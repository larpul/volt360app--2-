'use strict';

// Google Sheets integration — appends one row per QR scan using a service account.
// Uses only Node.js built-ins (crypto, fetch) so no npm install is needed.
//
// Setup (user does this once in Google Cloud Console):
//   1. Create a service account and enable the Google Sheets API.
//   2. Download the JSON key.
//   3. Create a Google Sheet and share it with the service account email (Editor).
//   4. Set env vars: GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY,
//      GOOGLE_SHEETS_SPREADSHEET_ID.

const crypto = require('crypto');

const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL || '';
// The private key arrives with literal \n; convert to real newlines.
const PRIVATE_KEY = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '');
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
// The sheet tab to append to. Defaults to the first tab.
const SHEET_TAB = process.env.GOOGLE_SHEETS_TAB || 'Scans';

let cachedToken = null; // { token, expiresAt }

function isConfigured() {
    return !!(CLIENT_EMAIL && PRIVATE_KEY && SPREADSHEET_ID);
}

// Create a signed JWT and exchange it for an OAuth access token (RS256).
async function getAccessToken() {
    const now = Math.floor(Date.now() / 1000);
    if (cachedToken && cachedToken.expiresAt > now + 60) {
        return cachedToken.token;
    }

    const header = { alg: 'RS256', typ: 'JWT' };
    const payload = {
        iss: CLIENT_EMAIL,
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600
    };

    const b64 = (obj) => Buffer.from(JSON.stringify(obj))
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    const unsigned = b64(header) + '.' + b64(payload);

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(unsigned);
    const signature = signer.sign(PRIVATE_KEY, 'base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    const jwt = unsigned + '.' + signature;

    const params = new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
    });

    const resp = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
    });
    const data = await resp.json();

    if (!data.access_token) {
        throw new Error('Google Sheets token exchange failed: ' + (data.error_description || data.error || 'unknown'));
    }

    cachedToken = {
        token: data.access_token,
        expiresAt: now + (data.expires_in || 3600)
    };
    return cachedToken.token;
}

// Append one row of scan data to the spreadsheet.
// rowValues is an array of strings/numbers in column order.
async function appendRow(rowValues) {
    if (!isConfigured()) return;

    const token = await getAccessToken();
    const range = SHEET_TAB + '!A:Z';
    const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + encodeURIComponent(SPREADSHEET_ID)
        + '/values/' + encodeURIComponent(range) + ':append'
        + '?valueInputOption=RAW&insertDataOption=INSERT_ROWS';

    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: [rowValues] })
    });

    if (!resp.ok) {
        const text = await resp.text();
        console.error('Google Sheets append failed:', resp.status, text.slice(0, 300));
    }
}

// Parse a user-agent string into a short device description.
function parseUserAgent(ua) {
    ua = ua || '';
    var os = 'Unknown';
    var browser = 'Unknown';
    var device = 'Desktop';

    if (/iPad|Android(?!.*Mobile)|Silk/i.test(ua)) {
        device = 'Tablet';
    } else if (/iPhone|Android.*Mobile|Mobile|iPod/i.test(ua)) {
        device = 'Mobile';
    }

    if (/Windows/i.test(ua)) os = 'Windows';
    else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS';
    else if (/Android/i.test(ua)) os = 'Android';
    else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
    else if (/Linux/i.test(ua)) os = 'Linux';

    if (/Edg\//i.test(ua)) browser = 'Edge';
    else if (/OPR\/|Opera/i.test(ua)) browser = 'Opera';
    else if (/Chrome\//i.test(ua) && !/Edg/i.test(ua)) browser = 'Chrome';
    else if (/Firefox\//i.test(ua)) browser = 'Firefox';
    else if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';

    return { device: device, os: os, browser: browser };
}

// Log a QR scan to Google Sheets.  Non-blocking: errors are caught and logged
// so a scan is never blocked by a Sheets outage.
async function logScan(scan) {
    try {
        var info = parseUserAgent(scan.ua);
        await appendRow([
            scan.at || new Date().toISOString(),
            scan.cardId || '',
            info.device,
            info.os,
            info.browser,
            scan.ua || '',
            scan.ref || '',
            'Scan',
            '',
            scan.phone || '',
            scan.location || ''
        ]);
    } catch (err) {
        console.error('Google Sheets logScan error:', String((err && err.message) || err));
    }
}

// Log a share event to Google Sheets.
async function logShare(share) {
    try {
        var info = parseUserAgent(share.ua);
        await appendRow([
            share.at || new Date().toISOString(),
            share.cardId || '',
            info.device,
            info.os,
            info.browser,
            share.ua || '',
            share.ref || '',
            'Share',
            share.method || '',
            '',
            share.location || ''
        ]);
    } catch (err) {
        console.error('Google Sheets logShare error:', String((err && err.message) || err));
    }
}

// Log a contact request (visitor left their phone number) to Google Sheets.
async function logContact(contact) {
    try {
        var info = parseUserAgent(contact.ua);
        await appendRow([
            contact.at || new Date().toISOString(),
            contact.cardId || '',
            info.device,
            info.os,
            info.browser,
            contact.ua || '',
            contact.ref || '',
            'Contact',
            '',
            contact.phone || '',
            contact.location || ''
        ]);
    } catch (err) {
        console.error('Google Sheets logContact error:', String((err && err.message) || err));
    }
}

function getSheetUrl() {
    if (!SPREADSHEET_ID) return '';
    // The env var may be a bare ID or a full Google Sheets URL — extract the ID either way.
    var id = SPREADSHEET_ID;
    var match = id.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
    if (match) id = match[1];
    return 'https://docs.google.com/spreadsheets/d/' + id + '/edit';
}

module.exports = { isConfigured, appendRow, parseUserAgent, logScan, logShare, logContact, getSheetUrl };
