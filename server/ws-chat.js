'use strict';

// Minimal WebSocket server for the team chat, using only Node.js built-ins.
// No npm dependencies — implements just enough of RFC 6455 for text-message chat.

const crypto = require('crypto');

const ACCEPT_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

// Opcodes
const OP_TEXT = 0x1;
const OP_CLOSE = 0x8;
const OP_PING = 0x9;
const OP_PONG = 0xA;

function acceptKey(key) {
    return crypto.createHash('sha1').update(key + ACCEPT_GUID).digest('base64');
}

// Parse one frame from a Buffer. Returns { fin, opcode, payload } or null if
// not enough bytes yet.
function parseFrame(buf) {
    if (buf.length < 2) return null;
    const b0 = buf[0];
    const b1 = buf[1];
    const fin = (b0 & 0x80) !== 0;
    const opcode = b0 & 0x0F;
    const masked = (b1 & 0x80) !== 0;
    let len = b1 & 0x7F;
    let offset = 2;

    if (len === 126) {
        if (buf.length < 4) return null;
        len = buf.readUInt16BE(2);
        offset = 4;
    } else if (len === 127) {
        if (buf.length < 10) return null;
        // Read as BigInt then convert (payloads are small in practice)
        len = Number(buf.readBigUInt64BE(2));
        offset = 10;
    }

    let mask = null;
    if (masked) {
        if (buf.length < offset + 4) return null;
        mask = buf.slice(offset, offset + 4);
        offset += 4;
    }

    if (buf.length < offset + len) return null;

    let payload = buf.slice(offset, offset + len);
    if (masked) {
        const unmasked = Buffer.allocUnsafe(len);
        for (let i = 0; i < len; i++) {
            unmasked[i] = payload[i] ^ mask[i % 4];
        }
        payload = unmasked;
    }

    return { fin, opcode, payload, totalLen: offset + len };
}

// Encode a text frame (server-to-client, unmasked).
function encodeTextFrame(text) {
    const payload = Buffer.from(text, 'utf8');
    const len = payload.length;
    let header;
    if (len < 126) {
        header = Buffer.allocUnsafe(2);
        header[0] = 0x80 | OP_TEXT; // FIN + text
        header[1] = len;
    } else if (len < 65536) {
        header = Buffer.allocUnsafe(4);
        header[0] = 0x80 | OP_TEXT;
        header[1] = 126;
        header.writeUInt16BE(len, 2);
    } else {
        header = Buffer.allocUnsafe(10);
        header[0] = 0x80 | OP_TEXT;
        header[1] = 127;
        header.writeBigUInt64BE(BigInt(len), 2);
    }
    return Buffer.concat([header, payload]);
}

function encodeCloseFrame() {
    const header = Buffer.allocUnsafe(2);
    header[0] = 0x80 | OP_CLOSE;
    header[1] = 0;
    return header;
}

function encodePongFrame(payload) {
    const header = Buffer.allocUnsafe(2);
    header[0] = 0x80 | OP_PONG;
    header[1] = payload.length;
    return Buffer.concat([header, payload]);
}

// A single connected client.
class WsClient {
    constructor(socket) {
        this.socket = socket;
        this.buffer = Buffer.alloc(0);
        this.alive = true;
    }

    send(text) {
        if (!this.alive) return;
        try {
            this.socket.write(encodeTextFrame(text));
        } catch (e) {
            this.alive = false;
        }
    }

    close() {
        this.alive = false;
        try { this.socket.write(encodeCloseFrame()); } catch (e) {}
        try { this.socket.end(); } catch (e) {}
    }
}

// Attach WebSocket handling to an existing http.Server.
// onMessage(message) is called when a client sends a text frame.
// Returns { clients, broadcast } where broadcast(text) sends to all.
function attachWebSocket(server, onMessage) {
    const clients = new Set();

    server.on('upgrade', (req, socket) => {
        // Only handle the chat WebSocket path.
        const url = new URL(req.url, 'http://localhost');
        if (url.pathname !== '/api/chat/ws') {
            socket.destroy();
            return;
        }

        const key = req.headers['sec-websocket-key'];
        if (!key) {
            socket.destroy();
            return;
        }

        const accept = acceptKey(key);
        const responseHeaders = [
            'HTTP/1.1 101 Switching Protocols',
            'Upgrade: websocket',
            'Connection: Upgrade',
            'Sec-WebSocket-Accept: ' + accept,
            '\r\n'
        ].join('\r\n');

        socket.write(responseHeaders);

        const client = new WsClient(socket);
        clients.add(client);

        socket.on('data', (chunk) => {
            client.buffer = Buffer.concat([client.buffer, chunk]);

            while (client.buffer.length > 0) {
                const frame = parseFrame(client.buffer);
                if (!frame) break; // not enough data yet

                client.buffer = client.buffer.slice(frame.totalLen);

                if (frame.opcode === OP_CLOSE) {
                    client.alive = false;
                    socket.end();
                    return;
                }
                if (frame.opcode === OP_PING) {
                    try { socket.write(encodePongFrame(frame.payload)); } catch (e) {}
                    continue;
                }
                if (frame.opcode === OP_PONG) {
                    continue; // keepalive
                }
                if (frame.opcode === OP_TEXT) {
                    const text = frame.payload.toString('utf8');
                    if (onMessage) onMessage(client, text);
                }
            }
        });

        socket.on('end', () => {
            client.alive = false;
            clients.delete(client);
        });
        socket.on('error', () => {
            client.alive = false;
            clients.delete(client);
        });
    });

    function broadcast(text) {
        for (const client of clients) {
            client.send(text);
        }
    }

    return { clients, broadcast };
}

module.exports = { attachWebSocket };
