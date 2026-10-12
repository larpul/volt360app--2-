'use strict';

// Small dependency-free uploads backend for the Volt360 app.
// Stores uploaded files on disk (a Docker volume) and serves them back.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 4000);
const DATA_DIR = process.env.DATA_DIR || '/data/uploads';

fs.mkdirSync(DATA_DIR, { recursive: true });

const TYPES = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.pdf': 'application/pdf'
};

// ---- Roof scan: Google Solar API data + an AI look at the satellite image ----
// A prospect counts as "no solar yet" when Google has roof data for the address but
// the AI sees no panels on the roof. SOLAR_API_KEY must be a server-side Google Cloud
// key with the Solar API and Static Maps enabled; both come from env_file.
const SOLAR_API_KEY = process.env.GOOGLE_SOLAR_API_KEY || process.env.GOOGLE_MAPS_API_KEY || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';
const scanCache = new Map();

// ---- Digital Business Card: QR sharing and scan tracking ----
// Card data and scan records are stored as JSON files next to the uploads directory.
const CARD_FILE = path.join(path.dirname(DATA_DIR), 'card.json');
const SCANS_FILE = path.join(path.dirname(DATA_DIR), 'scans.json');

// Google Sheets integration — each QR scan is logged as a new spreadsheet row.
const sheets = require('./google-sheets');

function readJsonFile(filePath, fallback) {
    try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); }
    catch (e) { return fallback; }
}

function writeJsonFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function googleJson(url, ms, body) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    try {
        const response = await fetch(url, {
            method: body ? 'POST' : 'GET',
            signal: controller.signal,
            headers: body ? { 'Content-Type': 'application/json' } : undefined,
            body: body ? JSON.stringify(body) : undefined
        });
        const text = await response.text();
        let parsed = null;
        try { parsed = JSON.parse(text); } catch (error) { parsed = null; }
        return { status: response.status, ok: response.ok, body: parsed };
    } catch (error) {
        return { status: 0, ok: false, body: null, error: String((error && error.message) || error) };
    }
}

// Google's roof data: usable roof area, how many panels fit, and how much sun it gets.
async function solarRoofData(lat, lng) {
    const url = 'https://solar.googleapis.com/v1/buildingInsights:findClosest'
        + '?location.latitude=' + lat + '&location.longitude=' + lng
        + '&requiredQuality=HIGH&key=' + encodeURIComponent(SOLAR_API_KEY);
    const result = await googleJson(url, 20000);
    if (result.status === 404) {
        return { available: false, reason: 'Google has no roof data for this address.' };
    }
    if (!result.ok || !result.body) {
        return { available: false, reason: 'The roof lookup failed (' + result.status + ').' };
    }
    const potential = result.body.solarPotential || {};
    const roof = potential.wholeRoofStats || null;
    const panels = typeof potential.maxArrayPanelsCount === 'number' ? potential.maxArrayPanelsCount : null;
    const watts = typeof potential.panelCapacityWatts === 'number' ? potential.panelCapacityWatts : null;
    // Where Google would put each panel, so the roof design page can draw the layout on the roof
    // itself. Only the centre and the orientation are needed to place a panel; the panel's own
    // size travels once, below.
    const layout = (Array.isArray(potential.solarPanels) ? potential.solarPanels : [])
        .filter((panel) => panel && panel.center
        && typeof panel.center.latitude === 'number' && typeof panel.center.longitude === 'number')
        .slice(0, 240)
        .map((panel) => ({
        lat: Math.round(panel.center.latitude * 1000000) / 1000000,
        lng: Math.round(panel.center.longitude * 1000000) / 1000000,
        portrait: panel.orientation === 'PORTRAIT'
    }));
    return {
        available: true,
        imageryQuality: result.body.imageryQuality || null,
        roofAreaM2: roof && roof.areaMeters2 ? Math.round(roof.areaMeters2) : null,
        maxPanels: panels,
        sunshineHours: typeof potential.maxSunshineHoursPerYear === 'number' ? potential.maxSunshineHoursPerYear : null,
        capacityKw: panels && watts ? Math.round(panels * watts / 100) / 10 : null,
        panels: layout,
        panelWidthMeters: typeof potential.panelWidthMeters === 'number' ? potential.panelWidthMeters : null,
        panelHeightMeters: typeof potential.panelHeightMeters === 'number' ? potential.panelHeightMeters : null
    };
}

// A top-down satellite tile of the roof, so the AI can actually look at the roof.
async function satelliteTile(lat, lng) {
    const url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng
        + '&zoom=20&size=512x512&maptype=satellite&key=' + encodeURIComponent(SOLAR_API_KEY);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
        const response = await fetch(url, { signal: controller.signal });
        const type = response.headers.get('content-type') || '';
        if (!response.ok || type.indexOf('image/') !== 0) {
            return null;
        }
        const buffer = Buffer.from(await response.arrayBuffer());
        if (!buffer.length || buffer.length > 4 * 1024 * 1024) {
            return null;
        }
        return { mime: type.split(';')[0], data: buffer.toString('base64') };
    } catch (error) {
        return null;
    } finally {
        clearTimeout(timer);
    }
}

// Ask the model whether panels are already on this roof.
async function aiPanelCheck(lat, lng, roof) {
    const tile = await satelliteTile(lat, lng);
    if (!tile) {
        return { hasSolar: null, confidence: null, summary: 'No satellite image for this address, so the AI check was skipped.' };
    }
    const context = roof && roof.available && roof.roofAreaM2
        ? ' Google roof data for this house: about ' + roof.roofAreaM2 + ' m2 of roof, room for up to ' + roof.maxPanels + ' panels.'
        : '';
    const prompt = 'You are a solar sales assistant. The image is a top-down satellite view of one house, centred on its roof.'
        + context
        + ' Decide whether solar panels are already installed on that roof.'
        + ' Panels look like regular dark rectangles in neat rows; skylights, vents and plain shingles do not count.'
        + ' Reply with JSON only and no prose: {"hasSolar": true or false, "confidence": 0 to 1, "summary": "one short sentence"}';
    const result = await googleJson(
        'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + encodeURIComponent(GEMINI_API_KEY),
        25000,
        {
            contents: [{ parts: [{ text: prompt }, { inline_data: { mime_type: tile.mime, data: tile.data } }] }],
            generationConfig: { temperature: 0, responseMimeType: 'application/json' }
        }
    );
    const parts = result.body && result.body.candidates && result.body.candidates[0]
        && result.body.candidates[0].content ? result.body.candidates[0].content.parts : null;
    const text = parts && parts[0] ? parts[0].text : '';
    let verdict = null;
    try { verdict = JSON.parse(text); } catch (error) { verdict = null; }
    if (!verdict || typeof verdict.hasSolar !== 'boolean') {
        return { hasSolar: null, confidence: null, summary: 'The AI could not read this roof.' };
    }
    return {
        hasSolar: verdict.hasSolar,
        confidence: typeof verdict.confidence === 'number' ? verdict.confidence : null,
        summary: String(verdict.summary || '').slice(0, 220)
    };
}

// One scan = Google's roof data plus the AI verdict on existing panels.
async function roofScan(lat, lng) {
    if (!SOLAR_API_KEY) {
        return {
            ok: false,
            code: 'not_configured',
            message: 'Add a Google Cloud key with the Solar API and Static Maps enabled to turn the roof scan on.'
        };
    }
    const cacheKey = lat.toFixed(5) + ',' + lng.toFixed(5);
    if (scanCache.has(cacheKey)) {
        return scanCache.get(cacheKey);
    }
    const roof = await solarRoofData(lat, lng);
    const ai = GEMINI_API_KEY
        ? await aiPanelCheck(lat, lng, roof)
        : { hasSolar: null, confidence: null, summary: 'Add an AI key so the roof can be checked for existing panels.' };
    const payload = {
        ok: true,
        hasSolar: ai.hasSolar,
        confidence: ai.confidence,
        summary: ai.summary,
        roof: roof,
        aiConfigured: !!GEMINI_API_KEY,
        solarConfigured: true
    };
    scanCache.set(cacheKey, payload);
    return payload;
}

// ---- Volt 360 AI Assistant: the answers behind the floating chat bubble ----
// The helper is a Gemini model with a solar-sales system prompt. GEMINI_API_KEY is
// optional and not required at boot: without it the chat still opens and the reply says
// it is not connected yet, the same way the scan page handles its AI half.
const ASSIST_PROMPT = [
    'You are Volt 360 AI Assistant, the AI helper inside Solar360, a solar-installation sales app',
    'used by a sales owner and their field agents.',
    'Help with qualifying prospects, site-visit prep, system sizing (kW against the customer\'s',
    'electric bill), common objections, follow-ups, and which deals to chase next.',
    'Answer in short, practical plain text: two to five sentences, no markdown headings or bullets.',
    'If a question is unrelated to solar sales, answer briefly and steer back to the pipeline.'
].join(' ');

function readJsonBody(req, limit) {
    return new Promise((resolve) => {
        let size = 0;
        const chunks = [];
        req.on('data', (chunk) => {
            size += chunk.length;
            if (size > limit) {
                resolve(null);
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
            } catch (error) {
                resolve(null);
            }
        });
        req.on('error', () => resolve(null));
    });
}

// The raw bytes of one upload, for the routes that need the file itself (the bill reader).
function readRawBody(req, limit) {
    return new Promise((resolve) => {
        let size = 0;
        const chunks = [];
        req.on('data', (chunk) => {
            size += chunk.length;
            if (size > limit) {
                resolve(null);
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', () => resolve(null));
    });
}

async function assistantReply(messages) {
    if (!GEMINI_API_KEY) {
        return {
            ok: false,
            code: 'not_configured',
            message: 'The assistant is not connected yet. Add a Google AI (Gemini) key and it can answer right away.'
        };
    }
    const contents = messages.map((message) => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(message.text || '').slice(0, 2000) }]
    }));
    const result = await googleJson(
        'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + encodeURIComponent(GEMINI_API_KEY),
        25000,
        {
            contents: contents,
            systemInstruction: { parts: [{ text: ASSIST_PROMPT }] },
            generationConfig: { temperature: 0.6, maxOutputTokens: 512 }
        }
    );
    const parts = result.body && result.body.candidates && result.body.candidates[0]
        && result.body.candidates[0].content ? result.body.candidates[0].content.parts : null;
    const reply = parts && parts[0] && parts[0].text ? String(parts[0].text).trim() : '';
    if (!reply) {
        return { ok: false, code: 'no_answer', message: 'The assistant could not answer just now. Please try again.' };
    }
    return { ok: true, reply: reply };
}

// ---- Utility bill analysis: read the customer's real usage off their own bill ----
// The rep hands over the customer's latest electricity bill (a photo or a PDF) and the AI reads
// the monthly usage and the amount due from it, so the savings calculator works off the numbers
// the customer actually pays instead of a guess.
const BILL_MIME = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.pdf': 'application/pdf'
};

async function analyzeBill(buffer, mime) {
    if (!GEMINI_API_KEY) {
        return {
            ok: false,
            code: 'not_configured',
            message: 'Add a Google AI (Gemini) key and the bill can be read automatically. Enter the usage and the amount by hand for now.'
        };
    }
    const prompt = 'You are reading one residential electricity bill for a solar sales rep.'
        + ' Read the current monthly usage and the amount due from the document or the photo.'
        + ' Reply with JSON only and no prose: {"usageKwh": number or null,'
        + ' "amountDue": number or null, "periodDays": number or null, "utility": "the utility name or an empty string"}.'
        + ' usageKwh is the billed electricity in kWh for the period; amountDue is the current charges in US dollars.';
    const result = await googleJson(
        'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + encodeURIComponent(GEMINI_API_KEY),
        30000,
        {
            contents: [{ parts: [{ text: prompt }, { inline_data: { mime_type: mime, data: buffer.toString('base64') } }] }],
            generationConfig: { temperature: 0, responseMimeType: 'application/json' }
        }
    );
    const parts = result.body && result.body.candidates && result.body.candidates[0]
        && result.body.candidates[0].content ? result.body.candidates[0].content.parts : null;
    const text = parts && parts[0] ? parts[0].text : '';
    let read = null;
    try { read = JSON.parse(text); } catch (error) { read = null; }
    const usage = read && typeof read.usageKwh === 'number' && read.usageKwh > 0 ? Math.round(read.usageKwh) : null;
    const amount = read && typeof read.amountDue === 'number' && read.amountDue > 0 ? Math.round(read.amountDue * 100) / 100 : null;
    if (!usage && !amount) {
        return { ok: false, code: 'no_usage', message: 'The bill could not be read. Enter the usage and the amount by hand.' };
    }
    return {
        ok: true,
        usageKwh: usage,
        amountDue: amount,
        periodDays: read && typeof read.periodDays === 'number' ? Math.round(read.periodDays) : null,
        utility: read && read.utility ? String(read.utility).slice(0, 60) : ''
    };
}

// Look up approximate location from the visitor's IP address using ip-api.com (free, no key).
async function ipLocation(ip) {
    if (!ip || ip === '127.0.0.1' || ip.startsWith('10.') || ip.startsWith('172.') || ip.startsWith('192.168.')) {
        return '';
    }
    try {
        var controller = new AbortController();
        var timer = setTimeout(function () { controller.abort(); }, 4000);
        var resp = await fetch('http://ip-api.com/json/' + ip + '?fields=city,regionName,country', { signal: controller.signal });
        clearTimeout(timer);
        var data = await resp.json();
        if (data && (data.city || data.regionName)) {
            return [data.city, data.regionName, data.country].filter(Boolean).join(', ');
        }
    } catch (e) { /* non-blocking */ }
    return '';
}

// Extract the visitor's real IP from nginx proxy headers.
function clientIp(req) {
    return req.headers['x-real-ip'] || (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || '';
}

function sendJson(res, status, payload) {
    const body = JSON.stringify(payload);
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
    });
    res.end(body);
}

// The client POSTs the raw file bytes with the original name in ?name=
function storeFile(req, res, name) {
    const original = path.basename(name || 'file');
    const safe = original.replace(/[^a-zA-Z0-9._-]/g, '_');
    const stored = Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '-' + safe;
    const out = fs.createWriteStream(path.join(DATA_DIR, stored));
    let size = 0;

    req.on('data', (chunk) => { size += chunk.length; });
    req.on('error', () => sendJson(res, 500, { error: 'upload failed' }));
    out.on('error', () => sendJson(res, 500, { error: 'could not store file' }));
    out.on('finish', () => sendJson(res, 200, { name: original, url: '/uploads/' + stored, size }));
    req.pipe(out);
}

function serveFile(res, fileName) {
    const file = path.join(DATA_DIR, path.basename(fileName));
    fs.readFile(file, (err, data) => {
        if (err) {
            sendJson(res, 404, { error: 'not found' });
            return;
        }
        res.writeHead(200, {
            'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
            'Content-Length': data.length
        });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'GET' && url.pathname === '/api/health') {
        sendJson(res, 200, { ok: true });
        return;
    }
    // Front-end runtime config. The Google Maps browser key is restricted by HTTP
    // referrer in Google Cloud, so handing it to the client is expected.
    if (req.method === 'GET' && url.pathname === '/api/config') {
        sendJson(res, 200, { googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '' });
        return;
    }
    // What the scan page needs to tell the user which half is missing.
    if (req.method === 'GET' && url.pathname === '/api/solar/status') {
        sendJson(res, 200, { solarConfigured: !!SOLAR_API_KEY, aiConfigured: !!GEMINI_API_KEY });
        return;
    }
    // Roof scan for one house: Google's roof data + whether panels are already up there.
    if (req.method === 'GET' && url.pathname === '/api/solar/scan') {
        const lat = Number(url.searchParams.get('lat'));
        const lng = Number(url.searchParams.get('lng'));
        if (!isFinite(lat) || !isFinite(lng)) {
            sendJson(res, 400, { ok: false, code: 'bad_request', message: 'lat and lng are required.' });
            return;
        }
        roofScan(lat, lng)
            .then(payload => sendJson(res, 200, payload))
            .catch(error => sendJson(res, 500, { ok: false, code: 'scan_failed', message: String((error && error.message) || error) }));
        return;
    }
    // Volt 360 AI Assistant: one turn of the floating chat bubble's conversation.
    if (req.method === 'POST' && url.pathname === '/api/chat') {
        readJsonBody(req, 64 * 1024).then((body) => {
            const list = body && Array.isArray(body.messages) ? body.messages.slice(-16) : [];
            if (!list.length) {
                sendJson(res, 400, { ok: false, code: 'bad_request', message: 'A message is required.' });
                return;
            }
            assistantReply(list)
                .then((payload) => sendJson(res, 200, payload))
                .catch((error) => sendJson(res, 500, { ok: false, code: 'chat_failed', message: String((error && error.message) || error) }));
        });
        return;
    }
    // Utility bill: store the file and read the customer's usage out of it.
    if (req.method === 'POST' && url.pathname === '/api/bill/analyze') {
        readRawBody(req, 12 * 1024 * 1024).then((buffer) => {
            if (!buffer || !buffer.length) {
                sendJson(res, 400, { ok: false, code: 'bad_request', message: 'A bill file is required.' });
                return;
            }
            const original = path.basename(url.searchParams.get('name') || 'bill');
            const safe = original.replace(/[^a-zA-Z0-9._-]/g, '_');
            const stored = Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '-' + safe;
            try {
                fs.writeFileSync(path.join(DATA_DIR, stored), buffer);
            }
            catch (error) {
                sendJson(res, 500, { ok: false, code: 'store_failed', message: 'The bill could not be saved.' });
                return;
            }
            const header = String(req.headers['content-type'] || '').split(';')[0];
            const mime = BILL_MIME[path.extname(original).toLowerCase()]
                || (header.indexOf('image/') === 0 ? header : 'application/pdf');
            const file = { name: original, url: '/uploads/' + stored, size: buffer.length };
            analyzeBill(buffer, mime)
                .then((read) => sendJson(res, 200, Object.assign({ file: file }, read)))
                .catch((error) => sendJson(res, 500, { ok: false, code: 'bill_failed', message: String((error && error.message) || error) }));
        });
        return;
    }
    if (req.method === 'POST' && url.pathname === '/api/uploads') {
        storeFile(req, res, url.searchParams.get('name'));
        return;
    }
    if (req.method === 'GET' && url.pathname.startsWith('/uploads/')) {
        serveFile(res, decodeURIComponent(url.pathname.slice('/uploads/'.length)));
        return;
    }
    // ---- Digital Business Card ----
    // Get the owner's card data.
    if (req.method === 'GET' && url.pathname === '/api/card') {
        var card = readJsonFile(CARD_FILE, null);
        sendJson(res, 200, card || { name: '', title: '', phone: '', email: '', website: '', company: '', photo: '', tagline: '' });
        return;
    }
    // Save the owner's card data (create or update). Generates a stable card ID on first save.
    if (req.method === 'PUT' && url.pathname === '/api/card') {
        readJsonBody(req, 64 * 1024).then(function (body) {
            if (!body) { sendJson(res, 400, { ok: false, message: 'Invalid card data.' }); return; }
            var existing = readJsonFile(CARD_FILE, {});
            var card = {
                id: existing.id || 'card_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
                name: String(body.name || '').slice(0, 120),
                title: String(body.title || '').slice(0, 120),
                phone: String(body.phone || '').slice(0, 40),
                email: String(body.email || '').slice(0, 200),
                website: String(body.website || '').slice(0, 300),
                company: String(body.company || '').slice(0, 120),
                tagline: String(body.tagline || '').slice(0, 120),
                photo: String(body.photo || '').slice(0, 500),
                updatedAt: new Date().toISOString()
            };
            writeJsonFile(CARD_FILE, card);
            sendJson(res, 200, { ok: true, card: card });
        });
        return;
    }
    // Public card data (for QR code scans). Returns contact fields only, no internal IDs.
    if (req.method === 'GET' && url.pathname.startsWith('/api/card/public/')) {
        var cardId = decodeURIComponent(url.pathname.slice('/api/card/public/'.length));
        var card = readJsonFile(CARD_FILE, null);
        if (!card || card.id !== cardId) {
            sendJson(res, 404, { ok: false, message: 'Card not found.' });
            return;
        }
        sendJson(res, 200, {
            ok: true,
            name: card.name || '', title: card.title || '', phone: card.phone || '',
            email: card.email || '', website: card.website || '', company: card.company || '',
            tagline: card.tagline || '', photo: card.photo || ''
        });
        return;
    }
    // Record a scan and return card data for the public page to display.
    if (req.method === 'POST' && url.pathname.startsWith('/api/card/scan/')) {
        var cardId = decodeURIComponent(url.pathname.slice('/api/card/scan/'.length));
        var card = readJsonFile(CARD_FILE, null);
        if (!card || card.id !== cardId) {
            sendJson(res, 404, { ok: false, message: 'Card not found.' });
            return;
        }
        var scanRecord = {
            cardId: cardId,
            at: new Date().toISOString(),
            ua: String(req.headers['user-agent'] || '').slice(0, 300),
            ref: String(req.headers.referer || '').slice(0, 300),
            ip: clientIp(req),
            location: ''
        };
        var scans = readJsonFile(SCANS_FILE, []);
        scans.push(scanRecord);
        if (scans.length > 1000) scans.splice(0, scans.length - 1000);
        writeJsonFile(SCANS_FILE, scans);
        // Fire-and-forget: look up the visitor's location from their IP, then log to Sheets.
        if (sheets.isConfigured()) {
            ipLocation(scanRecord.ip).then(function (loc) {
                if (loc) {
                    scanRecord.location = loc;
                    // Update the stored record in place.
                    var fresh = readJsonFile(SCANS_FILE, []);
                    var idx = fresh.length - 1;
                    if (idx >= 0 && fresh[idx].at === scanRecord.at) { fresh[idx].location = loc; writeJsonFile(SCANS_FILE, fresh); }
                }
                sheets.logScan(scanRecord);
            }).catch(function () { sheets.logScan(scanRecord); });
        }
        sendJson(res, 200, {
            ok: true,
            name: card.name || '', title: card.title || '', phone: card.phone || '',
            email: card.email || '', website: card.website || '', company: card.company || '',
            tagline: card.tagline || '', photo: card.photo || ''
        });
        return;
    }
    // Record a share event (when someone taps the Share button on the card).
    if (req.method === 'POST' && url.pathname.startsWith('/api/card/share/')) {
        var cardId = decodeURIComponent(url.pathname.slice('/api/card/share/'.length));
        var card = readJsonFile(CARD_FILE, null);
        if (!card || card.id !== cardId) {
            sendJson(res, 404, { ok: false, message: 'Card not found.' });
            return;
        }
        readJsonBody(req, 4096).then(function (body) {
            var shareRecord = {
                cardId: cardId,
                at: new Date().toISOString(),
                method: String((body && body.method) || '').slice(0, 40),
                ua: String(req.headers['user-agent'] || '').slice(0, 300),
                ref: String(req.headers.referer || '').slice(0, 300)
            };
            var scans = readJsonFile(SCANS_FILE, []);
            scans.push(Object.assign({ type: 'share' }, shareRecord));
            if (scans.length > 1000) scans.splice(0, scans.length - 1000);
            writeJsonFile(SCANS_FILE, scans);
            // Fire-and-forget: log the share to Google Sheets.
            if (sheets.isConfigured()) {
                sheets.logShare(shareRecord);
            }
            sendJson(res, 200, { ok: true });
        });
        return;
    }
    // Record a contact request (visitor leaves their phone number on the card page).
    if (req.method === 'POST' && url.pathname.startsWith('/api/card/contact/')) {
        var cardId = decodeURIComponent(url.pathname.slice('/api/card/contact/'.length));
        var card = readJsonFile(CARD_FILE, null);
        if (!card || card.id !== cardId) {
            sendJson(res, 404, { ok: false, message: 'Card not found.' });
            return;
        }
        readJsonBody(req, 4096).then(function (body) {
            var phone = String((body && body.phone) || '').slice(0, 40);
            var contactRecord = {
                cardId: cardId,
                at: new Date().toISOString(),
                type: 'contact',
                phone: phone,
                ua: String(req.headers['user-agent'] || '').slice(0, 300),
                ref: String(req.headers.referer || '').slice(0, 300),
                ip: clientIp(req),
                location: ''
            };
            var scans = readJsonFile(SCANS_FILE, []);
            scans.push(contactRecord);
            if (scans.length > 1000) scans.splice(0, scans.length - 1000);
            writeJsonFile(SCANS_FILE, scans);
            // Fire-and-forget: look up location, then log to Google Sheets.
            if (sheets.isConfigured()) {
                ipLocation(contactRecord.ip).then(function (loc) {
                    contactRecord.location = loc;
                    sheets.logContact(contactRecord);
                }).catch(function () { sheets.logContact(contactRecord); });
            }
            sendJson(res, 200, { ok: true });
        });
        return;
    }
    // Export all scan and share records as a CSV download (same data logged to Google Sheets).
    if (req.method === 'GET' && url.pathname === '/api/card/scans/export') {
        var card = readJsonFile(CARD_FILE, null);
        var allScans = readJsonFile(SCANS_FILE, []);
        var myScans = card ? allScans.filter(function (s) { return s.cardId === card.id; }) : [];
        // Sort newest first so the CSV reads the same way the dashboard does.
        myScans.sort(function (a, b) { return (b.at || '') < (a.at || '') ? -1 : (b.at || '') > (a.at || '') ? 1 : 0; });
        var info = sheets.parseUserAgent;
        var rows = [['Timestamp', 'Event', 'Phone', 'Location', 'Device', 'OS', 'Browser', 'Method', 'User Agent', 'Referrer']];
        myScans.forEach(function (s) {
            var ua = info(s.ua);
            rows.push([
                s.at || '',
                s.type === 'share' ? 'Share' : s.type === 'contact' ? 'Contact' : 'Scan',
                s.phone || '',
                s.location || '',
                ua.device,
                ua.os,
                ua.browser,
                s.method || '',
                s.ua || '',
                s.ref || ''
            ]);
        });
        var csv = rows.map(function (r) {
            return r.map(function (cell) {
                var v = String(cell);
                if (/[",\n]/.test(v)) v = '"' + v.replace(/"/g, '""') + '"';
                return v;
            }).join(',');
        }).join('\n');
        res.writeHead(200, {
            'Content-Type': 'text/csv',
            'Content-Disposition': 'attachment; filename="card-activity.csv"'
        });
        res.end(csv);
        return;
    }
    // Google Sheets connection status and direct link (for the analytics page).
    if (req.method === 'GET' && url.pathname === '/api/sheets/status') {
        sendJson(res, 200, { connected: sheets.isConfigured(), url: sheets.getSheetUrl() });
        return;
    }
    // Scan analytics for the owner: total count and recent scan details.
    if (req.method === 'GET' && url.pathname === '/api/card/scans') {
        var card = readJsonFile(CARD_FILE, null);
        if (!card) {
            sendJson(res, 200, { ok: true, total: 0, scans: [] });
            return;
        }
        var allScans = readJsonFile(SCANS_FILE, []);
        var myScans = allScans.filter(function (s) { return s.cardId === card.id; });
        var shareCount = myScans.filter(function (s) { return s.type === 'share'; }).length;
        sendJson(res, 200, {
            ok: true,
            total: myScans.length,
            shares: shareCount,
            scans: myScans.slice(-50).reverse()
        });
        return;
    }

    sendJson(res, 404, { error: 'not found' });
});

server.listen(PORT, '0.0.0.0', () => console.log('uploads api listening on ' + PORT));
