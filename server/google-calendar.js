'use strict';

// Google Calendar integration — writes booked meetings onto a calendar that has
// been shared with a Google service account, and reads the upcoming events back.
// Uses only Node.js built-ins (crypto, fetch) so no npm install is needed.
//
// Setup (the user does this once):
//   1. Enable the Google Calendar API in the Google Cloud project that owns the
//      service account already used for Google Sheets (GOOGLE_SHEETS_CLIENT_EMAIL).
//   2. In Google Calendar → Settings → your calendar → "Share with specific
//      people", add that service account email with "Make changes to events".
//      The app shows the exact address on the Settings → Google Calendar row.
//   3. Set GOOGLE_CALENDAR_ID to the calendar's ID (Settings → your calendar →
//      "Integrate calendar" → Calendar ID). Use "primary" only to write to the
//      service account's own calendar.
//
// Optional overrides if a separate service account is used for Calendar:
//   GOOGLE_CALENDAR_CLIENT_EMAIL, GOOGLE_CALENDAR_PRIVATE_KEY.
// GOOGLE_CALENDAR_TIMEZONE defaults to America/New_York.

const crypto = require('crypto');

const CLIENT_EMAIL = process.env.GOOGLE_CALENDAR_CLIENT_EMAIL
    || process.env.GOOGLE_SHEETS_CLIENT_EMAIL || '';
// The private key arrives with literal \n; convert to real newlines.
const PRIVATE_KEY = (process.env.GOOGLE_CALENDAR_PRIVATE_KEY
    || process.env.GOOGLE_SHEETS_PRIVATE_KEY || '')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '');
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || '';
const TIME_ZONE = process.env.GOOGLE_CALENDAR_TIMEZONE || 'America/New_York';
const SCOPE = 'https://www.googleapis.com/auth/calendar';
const DEFAULT_MINUTES = 60;

let cachedToken = null; // { token, expiresAt }

function isConfigured() {
    return !!(CLIENT_EMAIL && PRIVATE_KEY && CALENDAR_ID);
}

function getServiceAccountEmail() {
    return CLIENT_EMAIL;
}

function getCalendarUrl() {
    if (!CALENDAR_ID || CALENDAR_ID === 'primary') {
        return 'https://calendar.google.com/calendar/u/0/r';
    }
    return 'https://calendar.google.com/calendar/u/0/r?cid=' + encodeURIComponent(CALENDAR_ID);
}

// Signed JWT (RS256) exchanged for an OAuth access token.
async function getAccessToken() {
    const now = Math.floor(Date.now() / 1000);
    if (cachedToken && cachedToken.expiresAt > now + 60) {
        return cachedToken.token;
    }

    const header = { alg: 'RS256', typ: 'JWT' };
    const payload = {
        iss: CLIENT_EMAIL,
        scope: SCOPE,
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

    const resp = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt
        }).toString()
    });
    const data = await resp.json();

    if (!data.access_token) {
        throw new Error('Google Calendar token exchange failed: '
            + (data.error_description || data.error || 'unknown'));
    }

    cachedToken = {
        token: data.access_token,
        expiresAt: now + (data.expires_in || 3600)
    };
    return cachedToken.token;
}

function calendarApiPath(suffix) {
    return 'https://www.googleapis.com/calendar/v3/calendars/'
        + encodeURIComponent(CALENDAR_ID) + suffix;
}

// 'YYYY-MM-DD' + 'HH:MM' → 'YYYY-MM-DDTHH:MM:SS'
function dateTimeOf(date, time) {
    const day = String(date || '').trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return null;
    const raw = /^\d{1,2}:\d{2}/.test(String(time || '')) ? String(time).slice(0, 5) : '09:00';
    const clock = raw.length === 4 ? '0' + raw : raw;
    return day + 'T' + clock + ':00';
}

function endTimeOf(startIso, minutes) {
    const end = new Date(startIso);
    const duration = (minutes || DEFAULT_MINUTES) * 60000;
    const shifted = new Date(end.getTime() + duration);
    const pad = (n) => String(n).padStart(2, '0');
    return shifted.getFullYear() + '-' + pad(shifted.getMonth() + 1) + '-' + pad(shifted.getDate())
        + 'T' + pad(shifted.getHours()) + ':' + pad(shifted.getMinutes()) + ':00';
}

// Create one event for a booked meeting. Returns the created event, or null when
// the integration is off or Google rejects the call.
async function createEvent(booking) {
    if (!isConfigured()) return null;
    const start = dateTimeOf(booking && booking.date, booking && booking.time);
    if (!start) return null;

    const name = (booking && booking.name) || 'New booking';
    const lines = [];
    if (booking.email) lines.push('Email: ' + booking.email);
    if (booking.phone) lines.push('Phone: ' + booking.phone);
    if (booking.notes) lines.push('Notes: ' + booking.notes);
    lines.push('Booked through the Volt360 scheduling tool.');

    const event = {
        summary: 'Site visit — ' + name,
        description: lines.join('\n'),
        start: { dateTime: start, timeZone: TIME_ZONE },
        end: { dateTime: endTimeOf(start, DEFAULT_MINUTES), timeZone: TIME_ZONE }
    };
    if (booking.location) event.location = booking.location;

    try {
        const token = await getAccessToken();
        const resp = await fetch(calendarApiPath('/events'), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });
        const data = await resp.json().catch(function () { return {}; });
        if (!resp.ok) {
            console.error('Google Calendar insert failed:', resp.status,
                String((data.error && data.error.message) || '').slice(0, 200));
            return null;
        }
        return data;
    } catch (err) {
        console.error('Google Calendar insert error:', String((err && err.message) || err));
        return null;
    }
}

// Upcoming events, flattened to what the app shows.
async function listUpcomingEvents(days) {
    if (!isConfigured()) return [];
    const span = Math.max(1, Math.min(Number(days) || 7, 60));
    const now = new Date();
    const params = new URLSearchParams({
        timeMin: now.toISOString(),
        timeMax: new Date(now.getTime() + span * 86400000).toISOString(),
        singleEvents: 'true',
        orderBy: 'startTime',
        maxResults: '50'
    });

    const token = await getAccessToken();
    const resp = await fetch(calendarApiPath('/events') + '?' + params.toString(), {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    if (!resp.ok) {
        const text = await resp.text();
        throw new Error('Google Calendar list failed: ' + resp.status + ' ' + text.slice(0, 200));
    }
    const data = await resp.json();
    return (data.items || []).map(function (item) {
        return {
            id: item.id,
            title: item.summary || '(untitled)',
            start: (item.start && (item.start.dateTime || item.start.date)) || '',
            end: (item.end && (item.end.dateTime || item.end.date)) || '',
            location: item.location || ''
        };
    });
}

// Connection state for the Settings card. Probes the calendar so a configured
// but unshared calendar reports the real Google error instead of a false "on".
async function status() {
    const base = {
        connected: false,
        configured: isConfigured(),
        calendarId: CALENDAR_ID ? (CALENDAR_ID === 'primary' ? 'primary' : 'linked') : '',
        serviceAccountEmail: CLIENT_EMAIL,
        timeZone: TIME_ZONE,
        url: getCalendarUrl()
    };
    if (!isConfigured()) {
        base.reason = CLIENT_EMAIL && PRIVATE_KEY
            ? 'Add your Google Calendar ID to finish linking.'
            : 'The Google service account is not configured yet.';
        return base;
    }
    try {
        const token = await getAccessToken();
        const resp = await fetch(calendarApiPath(''), {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        if (!resp.ok) {
            const data = await resp.json().catch(function () { return {}; });
            base.reason = 'Google rejected the link: '
                + String((data.error && data.error.message) || ('HTTP ' + resp.status)).slice(0, 200);
            return base;
        }
        base.connected = true;
        return base;
    } catch (err) {
        base.reason = String((err && err.message) || err).slice(0, 200);
        return base;
    }
}

module.exports = {
    isConfigured,
    getServiceAccountEmail,
    getCalendarUrl,
    createEvent,
    listUpcomingEvents,
    status
};
