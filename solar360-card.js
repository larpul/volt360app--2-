'use strict';

/*
 * Digital Business Card — a standalone widget for the Solar360 profile page.
 *
 * Appends its own markup to <body>, outside the Angular app, so it survives route
 * changes. When the user is on /home a floating button appears that opens a
 * panel with: a QR code linking to the public card page, an editable contact form,
 * share / copy / vCard-download buttons, and scan-tracking analytics.
 *
 * Card data persists on the server (PUT /api/card); the QR code encodes the public
 * URL /card/{id}. When someone scans it, card.html loads, records the scan via
 * POST /api/card/scan/{id}, and shows the contact info with a Save-to-Contacts button.
 *
 * Styling lives in styles.css alongside the rest of the app.
 */

(function () {
    var FIELDS = ['name', 'title', 'phone', 'email', 'website', 'company'];
    var currentPath = '';
    var dock = null;
    var backdrop = null;
    var panel = null;
    var qrContainer = null;
    var qrInstance = null;
    var cardData = null;
    var scanTotalEl = null;
    var scanListEl = null;
    var saved = false;
    var pendingPhoto = null;  // uploaded photo URL awaiting save

    var TEMPLATE = ''
        + '<div class="card_dock" hidden>'
        +   '<button type="button" class="card_fab" data-act="open" aria-label="Digital Business Card">'
        +     '<i class="zmdi zmdi-card"></i>'
        +   '</button>'
        + '</div>'
        + '<div class="card_backdrop" data-act="close" hidden></div>'
        + '<section class="card_panel" hidden aria-label="Digital Business Card">'
        +   '<header class="card_head">'
        +     '<div class="card_head_icon"><i class="zmdi zmdi-card"></i></div>'
        +     '<div class="card_head_text"><h2>Digital Business Card</h2><p>Share your contact info with a QR code</p></div>'
        +     '<button type="button" class="card_close" data-act="close" aria-label="Close"><i class="zmdi zmdi-close"></i></button>'
        +   '</header>'
        +   '<div class="card_body">'
        +     '<div class="card_qr_section" id="card_qr_section">'
        +       '<div class="card_qr_box" id="card_qr"></div>'
        +       '<p class="card_qr_hint">Scan to view my contact info</p>'
        +       '<p class="card_qr_nosave" id="card_qr_nosave">Fill in your details and tap Save to generate your QR code.</p>'
        +     '</div>'
        +     '<div class="card_form" id="card_form">'
        +       '<div class="card_photo_field">'
        +         '<div class="card_photo_preview" id="card_photo_preview">'
        +           '<i class="zmdi zmdi-camera"></i>'
        +           '<span>Tap to upload photo</span>'
        +         '</div>'
        +         '<input type="file" id="card_photo_input" accept="image/*" hidden>'
        +       '</div>'
        +       '<div class="card_field">'
        +         '<label>Full Name</label>'
        +         '<input type="text" data-field="name" placeholder="Your name">'
        +       '</div>'
        +       '<div class="card_field">'
        +         '<label>Job Title</label>'
        +         '<input type="text" data-field="title" placeholder="e.g. Solar Sales Rep">'
        +       '</div>'
        +       '<div class="card_field">'
        +         '<label>Phone Number</label>'
        +         '<input type="tel" data-field="phone" placeholder="+1 555 000 0000">'
        +       '</div>'
        +       '<div class="card_field">'
        +         '<label>Email</label>'
        +         '<input type="email" data-field="email" placeholder="you@email.com">'
        +       '</div>'
        +       '<div class="card_field">'
        +         '<label>Company Website</label>'
        +         '<input type="url" data-field="website" placeholder="https://company.com">'
        +       '</div>'
        +       '<div class="card_field">'
        +         '<label>Company</label>'
        +         '<input type="text" data-field="company" placeholder="Company name">'
        +       '</div>'
        +       '<button type="button" class="card_save" data-act="save">Save & Generate QR</button>'
        +     '</div>'
        +     '<div class="card_share" id="card_share" hidden>'
        +       '<button type="button" class="card_share_btn" data-act="share"><i class="zmdi zmdi-share"></i> Share</button>'
        +       '<button type="button" class="card_share_btn" data-act="copy"><i class="zmdi zmdi-copy"></i> Copy Link</button>'
        +       '<button type="button" class="card_share_btn" data-act="vcard"><i class="zmdi zmdi-download"></i> Download vCard</button>'
        +     '</div>'
        +     '<div class="card_scans" id="card_scans" hidden>'
        +       '<h3 class="card_scans_title"><i class="zmdi zmdi-chart-donut"></i> Scan Tracking</h3>'
        +       '<div class="card_scans_total" id="card_scans_total">0 total scans</div>'
        +       '<div class="card_scans_list" id="card_scans_list"></div>'
        +     '</div>'
        +   '</div>'
        + '</section>';

    var root = document.createElement('div');
    root.className = 'card_root';
    root.innerHTML = TEMPLATE;
    document.body.appendChild(root);

    dock = root.querySelector('.card_dock');
    backdrop = root.querySelector('.card_backdrop');
    panel = root.querySelector('.card_panel');
    qrContainer = root.querySelector('#card_qr');
    scanTotalEl = root.querySelector('#card_scans_total');
    scanListEl = root.querySelector('#card_scans_list');

    // ---- route monitoring --------------------------------------------------

    function checkRoute() {
        var path = window.location.pathname;
        if (path === currentPath) return;
        currentPath = path;
        if (path === '/home') {
            dock.hidden = false;
        } else {
            dock.hidden = true;
            if (!panel.hidden) closePanel();
        }
    }

    // ---- profile data scraping --------------------------------------------

    function readProfileFromDom() {
        var inputs = document.querySelectorAll('ion-input');
        var data = { name: '', phone: '', email: '' };
        for (var i = 0; i < inputs.length; i++) {
            var type = inputs[i].getAttribute('type') || '';
            var val = inputs[i].getAttribute('value') || inputs[i].value || '';
            if (type === 'name') data.name = val;
            else if (type === 'tel') data.phone = val;
            else if (type === 'email') data.email = val;
        }
        return data;
    }

    // ---- panel open/close --------------------------------------------------

    function openPanel() {
        panel.hidden = false;
        backdrop.hidden = false;
        root.classList.add('card_open');
        loadCard().then(function () {
            loadScans();
        });
    }

    function closePanel() {
        panel.hidden = true;
        backdrop.hidden = true;
        root.classList.remove('card_open');
    }

    // ---- data: load / save / scans -----------------------------------------

    function loadCard() {
        return fetch('/api/card').then(function (r) { return r.json(); }).then(function (data) {
            cardData = data && data.id ? data : null;
            populateForm();
            updateQrSection();
            return data;
        }).catch(function () {
            populateForm();
            updateQrSection();
        });
    }

    function populateForm() {
        var base = cardData || {};
        if (!cardData) {
            var profile = readProfileFromDom();
            base.name = profile.name;
            base.phone = profile.phone;
            base.email = profile.email;
            base.photo = window.location.origin + '/assets/images/profile.png?v=4';
        }
        for (var i = 0; i < FIELDS.length; i++) {
            var input = root.querySelector('[data-field="' + FIELDS[i] + '"]');
            if (input) input.value = base[FIELDS[i]] || '';
        }
        updatePhotoPreview(base.photo || '');
    }

    function updatePhotoPreview(url) {
        var preview = root.querySelector('#card_photo_preview');
        if (!preview) return;
        var photoUrl = url || (cardData && cardData.photo) || '';
        if (photoUrl) {
            preview.innerHTML = '<img src="' + escapeHtml(photoUrl) + '" alt="Profile photo"><span class="card_photo_change">Tap to change</span>';
        } else {
            preview.innerHTML = '<i class="zmdi zmdi-camera"></i><span>Tap to upload photo</span>';
        }
    }

    function uploadPhoto(file) {
        if (!file || !file.type || file.type.indexOf('image/') !== 0) {
            flashStatus('Please choose an image file.');
            return;
        }
        var preview = root.querySelector('#card_photo_preview');
        preview.innerHTML = '<span class="card_photo_uploading">Uploading…</span>';
        fetch('/api/uploads?name=' + encodeURIComponent(file.name), {
            method: 'POST',
            headers: { 'Content-Type': file.type || 'application/octet-stream' },
            body: file
        }).then(function (r) { return r.json(); }).then(function (res) {
            if (res && res.url) {
                pendingPhoto = window.location.origin + res.url;
                updatePhotoPreview(pendingPhoto);
            } else {
                flashStatus('Photo upload failed. Please try again.');
                updatePhotoPreview('');
            }
        }).catch(function () {
            flashStatus('Photo upload failed. Please try again.');
            updatePhotoPreview('');
        });
    }

    function collectForm() {
        var data = {};
        for (var i = 0; i < FIELDS.length; i++) {
            var input = root.querySelector('[data-field="' + FIELDS[i] + '"]');
            if (input) data[FIELDS[i]] = input.value.trim();
        }
        data.photo = pendingPhoto || (cardData && cardData.photo) || (window.location.origin + '/assets/images/profile.png?v=4');
        return data;
    }

    function saveCard() {
        var data = collectForm();
        if (!data.name) {
            flashStatus('Enter your name first.');
            return;
        }
        var btn = root.querySelector('[data-act="save"]');
        btn.disabled = true;
        btn.textContent = 'Saving…';
        fetch('/api/card', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (r) { return r.json(); }).then(function (res) {
            btn.disabled = false;
            btn.textContent = 'Save & Generate QR';
            if (res && res.ok) {
                cardData = res.card;
                pendingPhoto = null;
                saved = true;
                populateForm();
                updateQrSection();
                loadScans();
                flashStatus('Saved! QR code is ready to share.');
            } else {
                flashStatus('Could not save. Please try again.');
            }
        }).catch(function () {
            btn.disabled = false;
            btn.textContent = 'Save & Generate QR';
            flashStatus('Could not save. Please try again.');
        });
    }

    function loadScans() {
        if (!cardData || !cardData.id) return;
        fetch('/api/card/scans').then(function (r) { return r.json(); }).then(function (data) {
            if (!data || !data.ok) return;
            root.querySelector('#card_scans').hidden = false;
            scanTotalEl.textContent = data.total + (data.total === 1 ? ' total scan' : ' total scans');
            renderScans(data.scans || []);
        }).catch(function () {});
    }

    function renderScans(scans) {
        if (!scans.length) {
            scanListEl.innerHTML = '<p class="card_scans_empty">No scans yet. Share your QR code to start tracking.</p>';
            return;
        }
        scanListEl.innerHTML = scans.map(function (s) {
            var d = new Date(s.at);
            var label = d.toLocaleDateString() + ' · ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            var device = parseDevice(s.ua);
            return '<div class="card_scan_item">'
                + '<div class="card_scan_icon"><i class="zmdi zmdi-smartphone-android"></i></div>'
                + '<div class="card_scan_body">'
                +   '<div class="card_scan_device">' + escapeHtml(device) + '</div>'
                +   '<div class="card_scan_time">' + escapeHtml(label) + '</div>'
                + '</div></div>';
        }).join('');
    }

    function parseDevice(ua) {
        ua = String(ua || '');
        if (ua.indexOf('iPhone') >= 0 || ua.indexOf('iPad') >= 0) return 'iPhone / iPad';
        if (ua.indexOf('Android') >= 0) return 'Android';
        if (ua.indexOf('Windows') >= 0) return 'Windows';
        if (ua.indexOf('Mac') >= 0) return 'Mac';
        if (ua.indexOf('Linux') >= 0) return 'Linux';
        return 'Unknown device';
    }

    // ---- QR code -----------------------------------------------------------

    function updateQrSection() {
        var qrSection = root.querySelector('#card_qr_section');
        var noSaveMsg = root.querySelector('#card_qr_nosave');
        var shareSection = root.querySelector('#card_share');

        if (!cardData || !cardData.id) {
            qrSection.classList.add('no_card');
            noSaveMsg.hidden = false;
            shareSection.hidden = true;
            qrContainer.innerHTML = '';
            return;
        }
        qrSection.classList.remove('no_card');
        noSaveMsg.hidden = true;
        shareSection.hidden = false;

        var cardUrl = window.location.origin + '/card/' + encodeURIComponent(cardData.id);
        qrContainer.innerHTML = '';
        if (typeof QRCode !== 'undefined') {
            qrInstance = new QRCode(qrContainer, { text: cardUrl, width: 180, height: 180, correctLevel: QRCode.CorrectLevel.M });
        }
    }

    // ---- share / copy / vCard ---------------------------------------------

    function getCardUrl() {
        if (!cardData || !cardData.id) return '';
        return window.location.origin + '/card/' + encodeURIComponent(cardData.id);
    }

    function shareLink() {
        var url = getCardUrl();
        if (!url) return;
        var shareData = {
            title: (cardData.name || 'My Business Card'),
            text: 'Here is my digital business card',
            url: url
        };
        if (navigator.share) {
            navigator.share(shareData).catch(function () {});
        } else {
            copyLink();
        }
    }

    function copyLink() {
        var url = getCardUrl();
        if (!url) return;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(function () {
                flashStatus('Link copied to clipboard!');
            }).catch(function () {
                flashStatus('Could not copy. Long-press the link to copy manually.');
            });
        } else {
            flashStatus('Copy not supported. The link is: ' + url);
        }
    }

    function downloadVCard() {
        if (!cardData) return;
        var vcf = 'BEGIN:VCARD\nVERSION:3.0\n'
            + 'FN:' + (cardData.name || '') + '\n'
            + (cardData.title ? 'TITLE:' + cardData.title + '\n' : '')
            + (cardData.company ? 'ORG:' + cardData.company + '\n' : '')
            + (cardData.phone ? 'TEL;TYPE=CELL:' + cardData.phone + '\n' : '')
            + (cardData.email ? 'EMAIL:' + cardData.email + '\n' : '')
            + (cardData.website ? 'URL:' + cardData.website + '\n' : '')
            + (cardData.photo ? 'PHOTO;VALUE=URL:' + cardData.photo + '\n' : '')
            + 'END:VCARD';
        var blob = new Blob([vcf], { type: 'text/vcard' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = (cardData.name || 'contact') + '.vcf';
        a.click();
        URL.revokeObjectURL(a.href);
    }

    // ---- helpers -----------------------------------------------------------

    function escapeHtml(text) {
        return String(text).replace(/[&<>"']/g, function (c) {
            return { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' }[c];
        });
    }

    var statusTimer = null;
    function flashStatus(msg) {
        var el = root.querySelector('.card_qr_hint');
        if (!el) return;
        var original = el.textContent;
        el.textContent = msg;
        if (statusTimer) clearTimeout(statusTimer);
        statusTimer = setTimeout(function () { el.textContent = original; }, 3000);
    }

    // ---- wiring ------------------------------------------------------------

    root.addEventListener('click', function (event) {
        var trigger = event.target.closest ? event.target.closest('[data-act]') : null;
        if (!trigger) return;
        var action = trigger.getAttribute('data-act');
        if (action === 'open') openPanel();
        else if (action === 'close') closePanel();
        else if (action === 'save') saveCard();
        else if (action === 'share') shareLink();
        else if (action === 'copy') copyLink();
        else if (action === 'vcard') downloadVCard();
    });

    // Photo upload: tapping the preview opens the file picker
    root.addEventListener('click', function (event) {
        var preview = event.target.closest ? event.target.closest('#card_photo_preview') : null;
        if (!preview) return;
        var input = root.querySelector('#card_photo_input');
        if (input) input.click();
    });
    root.addEventListener('change', function (event) {
        var input = event.target.closest ? event.target.closest('#card_photo_input') : null;
        if (!input || !input.files || !input.files.length) return;
        uploadPhoto(input.files[0]);
        input.value = '';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !panel.hidden) closePanel();
    });

    setInterval(checkRoute, 500);
})();
