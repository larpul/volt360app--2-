'use strict';

// Central activity-notification store for Solar360.
//
// Every notable event — a QR card scan, a share, a callback request, a meeting
// booking, a door-knock, a new lead, a pipeline stage change — becomes one entry
// here. The in-app bell (solar360-assist.js) lists them, and `email.sendActivityEmail`
// fires an alert to the owner at the same time.
//
// Notifications live next to card.json / scans.json / knocks.json (the parent of
// the uploads data dir), so they survive an `api` restart in the same container.

const fs = require('fs');
const path = require('path');
const email = require('./email');

const DATA_DIR = process.env.DATA_DIR || '/data/uploads';
const NOTIF_FILE = path.join(path.dirname(DATA_DIR), 'notifications.json');
const MAX_NOTIFICATIONS = 500;

function read() {
    try { return JSON.parse(fs.readFileSync(NOTIF_FILE, 'utf8')); }
    catch (e) { return []; }
}

function write(list) {
    fs.writeFileSync(NOTIF_FILE, JSON.stringify(list, null, 2));
}

// Create a notification, persist it, and fire an email alert.
//   type    — short event id ('card_scan', 'card_share', 'card_callback',
//             'card_booking', 'knock', 'lead_new', 'status_change')
//   title   — one-line headline (email subject + bell title)
//   message — the body line shown in the bell / email
//   meta    — extra structured fields shown under the email body
//   opts.email === false skips the email (e.g. a booking already sends its own).
function add(type, title, message, meta, opts) {
    var notif = {
        id: 'n_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        type: String(type || 'activity').slice(0, 40),
        title: String(title || 'Notification').slice(0, 200),
        message: String(message || '').slice(0, 1000),
        at: new Date().toISOString(),
        read: false,
        meta: meta || {}
    };
    var list = read();
    list.push(notif);
    if (list.length > MAX_NOTIFICATIONS) { list.splice(0, list.length - MAX_NOTIFICATIONS); }
    write(list);
    if (!(opts && opts.email === false)) {
        email.sendActivityEmail(notif);
    }
    return notif;
}

// Newest first, with the unread count for the bell badge.
function list() {
    var items = read().slice().reverse();
    return {
        items: items,
        unread: items.filter(function (n) { return !n.read; }).length
    };
}

function markAllRead() {
    var list = read();
    var changed = false;
    list.forEach(function (n) { if (!n.read) { n.read = true; changed = true; } });
    if (changed) { write(list); }
}

module.exports = { add, list, markAllRead, NOTIF_FILE };
