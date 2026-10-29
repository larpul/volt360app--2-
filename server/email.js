'use strict';

// Booking email notifications via Resend's HTTP API.
// Uses only Node.js built-in fetch — no npm install needed.
//
// Setup (user does this once):
//   1. Create a free account at resend.com.
//   2. Generate an API key.
//   3. (Optional) Verify your domain for a custom from-address; otherwise
//      Resend's shared onboarding@resend.dev sender is used.
//   4. Set env vars: RESEND_API_KEY, NOTIFICATION_EMAIL.

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || '';
// Default sender is Resend's shared onboarding address; override with a verified domain.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Digital Card <onboarding@resend.dev>';

function isConfigured() {
    return !!(RESEND_API_KEY && NOTIFICATION_EMAIL);
}

// Send an email alert when a visitor books a meeting through the scheduling tool.
// Non-blocking: errors are caught and logged so a booking is never blocked by an email outage.
async function sendBookingNotification(booking, cardName) {
    if (!isConfigured()) return;

    var who = booking.name || 'Someone';
    var when = (booking.date || '') + ' at ' + (booking.time || '');
    var subject = 'New Booking: ' + who + ' — ' + when;

    var textLines = [
        'You have a new meeting booking from your digital business card.',
        '',
        'Name:  ' + (booking.name || 'N/A'),
        'Email: ' + (booking.email || 'N/A'),
        'Date:  ' + (booking.date || 'N/A'),
        'Time:  ' + (booking.time || 'N/A'),
        '',
        'Card:  ' + (cardName || 'Your card'),
        'Booked at: ' + (booking.at || new Date().toISOString())
    ];
    if (booking.location) textLines.push('Location: ' + booking.location);

    var htmlLines = [
        '<div style="font-family:monospace;font-size:14px;max-width:480px">',
        '<h2 style="margin:0 0 16px">📅 New Meeting Booking</h2>',
        '<p style="color:#666;margin:0 0 20px">A visitor booked a meeting through your digital business card.</p>',
        '<table style="border-collapse:collapse;font-size:14px">',
        '<tr><td style="padding:6px 16px 6px 0;color:#999">Name</td><td style="font-weight:600">' + esc(booking.name) + '</td></tr>',
        '<tr><td style="padding:6px 16px 6px 0;color:#999">Email</td><td style="font-weight:600">' + esc(booking.email) + '</td></tr>',
        '<tr><td style="padding:6px 16px 6px 0;color:#999">Date</td><td style="font-weight:600">' + esc(booking.date) + '</td></tr>',
        '<tr><td style="padding:6px 16px 6px 0;color:#999">Time</td><td style="font-weight:600">' + esc(booking.time) + '</td></tr>',
        '</table>'
    ];
    if (booking.location) htmlLines.push('<p style="color:#999;font-size:12px;margin:16px 0 0">Location: ' + esc(booking.location) + '</p>');
    htmlLines.push('<p style="color:#999;font-size:12px;margin:24px 0 0">Booked at ' + esc(booking.at) + '</p>');
    htmlLines.push('</div>');

    try {
        var resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + RESEND_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [NOTIFICATION_EMAIL],
                subject: subject,
                text: textLines.join('\n'),
                html: htmlLines.join('\n')
            })
        });
        if (!resp.ok) {
            var err = await resp.text();
            console.error('Email notification failed:', resp.status, err.slice(0, 300));
        }
    } catch (err) {
        console.error('Email notification error:', String((err && err.message) || err));
    }
}

function esc(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
        return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[c];
    });
}

// Send a generic activity alert (card scan, knock, new lead, status change, …).
// Same non-blocking contract as sendBookingNotification: a bad key or outage is
// logged and never thrown, so an event is never lost because the email failed.
async function sendActivityEmail(notif) {
    if (!isConfigured()) return;

    var subject = notif.title || 'New activity on your Solar360 app';
    var meta = notif.meta || {};
    var metaLines = Object.keys(meta).filter(function (k) { return meta[k] !== '' && meta[k] != null; })
        .map(function (k) { return k + ': ' + meta[k]; });

    var textLines = [
        notif.title || '',
        '',
        notif.message || '',
        '',
        'When: ' + (notif.at || new Date().toISOString())
    ].concat(metaLines.length ? [''].concat(metaLines) : []);

    var htmlLines = [
        '<div style="font-family:monospace;font-size:14px;max-width:480px">',
        '<h2 style="margin:0 0 16px">' + esc(notif.title) + '</h2>',
        '<p style="margin:0 0 16px">' + esc(notif.message) + '</p>',
        '<p style="color:#999;font-size:12px;margin:0">When: ' + esc(notif.at) + '</p>'
    ];
    if (metaLines.length) {
        htmlLines.push('<table style="border-collapse:collapse;font-size:13px;margin-top:12px">');
        Object.keys(meta).forEach(function (k) {
            var v = meta[k];
            if (v === '' || v == null) return;
            htmlLines.push('<tr><td style="padding:4px 16px 4px 0;color:#999">' + esc(k) + '</td><td style="font-weight:600">' + esc(v) + '</td></tr>');
        });
        htmlLines.push('</table>');
    }
    htmlLines.push('</div>');

    try {
        var resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + RESEND_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [NOTIFICATION_EMAIL],
                subject: subject,
                text: textLines.join('\n'),
                html: htmlLines.join('\n')
            })
        });
        if (!resp.ok) {
            var err = await resp.text();
            console.error('Activity email failed:', resp.status, err.slice(0, 300));
        }
    } catch (err) {
        console.error('Activity email error:', String((err && err.message) || err));
    }
}

module.exports = { isConfigured, sendBookingNotification, sendActivityEmail };
