'use strict';

/*
 * Volt 360 AI Assistant — the floating AI helper for the owner and their sales agents.
 *
 * This is a standalone widget: it appends its own markup to <body>, outside the Angular
 * app, so the chat bubble and the notification bell are on every page and survive route
 * changes. Answers come from POST /api/chat (the `api` service), and the conversation plus
 * its unread flags live in localStorage, so the notification badge survives a reload.
 *
 * Styling lives in styles.css (the app-wide stylesheet), so the widget follows the app's
 * theme variables and the dark theme like every other card.
 */

(function () {
    var CHAT_KEY = 'solar360_assist_chat';
    var HISTORY_LIMIT = 16;
    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var ASSISTANT_NAME = 'Volt 360 AI Assistant';
    var WELCOME_TEXT = 'Hi, I am ' + ASSISTANT_NAME + ', the AI helper for you and your sales agents. '
        + 'Ask me about qualifying a prospect, sizing a system, handling an objection, or which deal to chase next.';

    var TEMPLATE = ''
        + '<div class="assist_dock">'
        +   '<button type="button" class="assist_fab assist_fab_bell" data-act="notifications" aria-label="Notifications">'
        +     '<i class="zmdi zmdi-notifications"></i>'
        +     '<span class="assist_badge" data-badge hidden></span>'
        +   '</button>'
        +   '<button type="button" class="assist_fab assist_fab_chat" data-act="chat" aria-label="Open ' + ASSISTANT_NAME + '">'
        +     '<i class="zmdi zmdi-comment-text"></i>'
        +     '<span class="assist_badge" data-badge hidden></span>'
        +   '</button>'
        + '</div>'
        + '<div class="assist_backdrop" data-act="close" hidden></div>'
        + '<section class="assist_panel assist_chat_panel" hidden aria-label="' + ASSISTANT_NAME + '">'
        +   '<header class="assist_head">'
        +     '<div class="assist_head_icon"><i class="zmdi zmdi-comment-text"></i></div>'
        +     '<div class="assist_head_text"><h2>' + ASSISTANT_NAME + '</h2><p>AI helper for you and your agents</p></div>'
        +     '<button type="button" class="assist_close" data-act="close" aria-label="Close"><i class="zmdi zmdi-close"></i></button>'
        +   '</header>'
        +   '<div class="assist_msgs"></div>'
        +   '<form class="assist_form">'
        +     '<input class="assist_input" type="text" placeholder="Ask about a prospect, sizing, next steps" autocomplete="off">'
        +     '<button class="assist_send" type="submit" aria-label="Send"><i class="zmdi zmdi-mail-send"></i></button>'
        +   '</form>'
        + '</section>'
        + '<section class="assist_panel assist_notif_panel" hidden aria-label="Notifications">'
        +   '<header class="assist_head">'
        +     '<div class="assist_head_icon"><i class="zmdi zmdi-notifications"></i></div>'
        +     '<div class="assist_head_text"><h2>Notifications</h2><p>New messages from your assistant</p></div>'
        +     '<button type="button" class="assist_close" data-act="close" aria-label="Close"><i class="zmdi zmdi-close"></i></button>'
        +   '</header>'
        +   '<div class="assist_notif_list"></div>'
        + '</section>';

    var root = document.createElement('div');
    root.className = 'assist_root';
    root.innerHTML = TEMPLATE;
    document.body.appendChild(root);

    var backdrop = root.querySelector('.assist_backdrop');
    var chatPanel = root.querySelector('.assist_chat_panel');
    var notifPanel = root.querySelector('.assist_notif_panel');
    var msgBox = root.querySelector('.assist_msgs');
    var notifList = root.querySelector('.assist_notif_list');
    var form = root.querySelector('.assist_form');
    var input = root.querySelector('.assist_input');
    var sendBtn = root.querySelector('.assist_send');
    var badges = root.querySelectorAll('[data-badge]');

    var messages = loadMessages();
    var pending = false;
    var openPanel = null;

    // ---- storage -----------------------------------------------------------

    function loadMessages() {
        try {
            var raw = window.localStorage.getItem(CHAT_KEY);
            if (raw) {
                var stored = JSON.parse(raw);
                if (Array.isArray(stored) && stored.length) {
                    // A stored seed keeps the wording it was created with; refresh it so the
                    // greeting follows the assistant's current name.
                    return stored.map(function (message) {
                        if (message.id === 'welcome') {
                            message.text = WELCOME_TEXT;
                        }
                        return message;
                    });
                }
            }
        } catch (error) {
            // a corrupt or unavailable store just falls back to the welcome message
        }
        return [{
            id: 'welcome',
            role: 'assistant',
            text: WELCOME_TEXT,
            at: Date.now(),
            read: false
        }];
    }

    function saveMessages() {
        try {
            window.localStorage.setItem(CHAT_KEY, JSON.stringify(messages));
        } catch (error) {
            // the conversation simply stays in memory if storage is full or blocked
        }
    }

    // ---- rendering ---------------------------------------------------------

    function escapeHtml(text) {
        return String(text).replace(/[&<>"']/g, function (character) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
        });
    }

    function pad(value) {
        return (value < 10 ? '0' : '') + value;
    }

    function timeLabel(at) {
        var date = new Date(at);
        var clock = pad(date.getHours()) + ':' + pad(date.getMinutes());
        return date.toDateString() === new Date().toDateString()
            ? clock
            : date.getDate() + ' ' + MONTHS[date.getMonth()] + ', ' + clock;
    }

    function renderMessages() {
        var html = messages.map(function (message) {
            var mine = message.role === 'user';
            return '<div class="assist_msg ' + (mine ? 'user' : 'bot') + '">'
                + '<p>' + escapeHtml(message.text) + '</p>'
                + '<span>' + (mine ? 'You' : ASSISTANT_NAME) + ' · ' + timeLabel(message.at) + '</span>'
                + '</div>';
        }).join('');
        if (pending) {
            html += '<div class="assist_msg bot assist_typing"><i></i><i></i><i></i></div>';
        }
        msgBox.innerHTML = html;
        msgBox.scrollTop = msgBox.scrollHeight;
    }

    function renderNotifications() {
        var alerts = messages.filter(function (message) {
            return message.role === 'assistant';
        }).slice().reverse();

        if (!alerts.length) {
            notifList.innerHTML = '<p class="assist_empty">No messages yet. Open the assistant and ask it something.</p>';
            return;
        }
        notifList.innerHTML = alerts.map(function (message) {
            return '<button type="button" class="assist_notif' + (message.read ? '' : ' new') + '" data-act="open-chat">'
                + '<div class="assist_notif_icon"><i class="zmdi zmdi-comment-text"></i></div>'
                + '<div class="assist_notif_body">'
                +   '<div class="assist_notif_top"><strong>' + ASSISTANT_NAME + '</strong><span>' + timeLabel(message.at) + '</span></div>'
                +   '<p>' + escapeHtml(message.text) + '</p>'
                + '</div>'
                + (message.read ? '' : '<span class="assist_notif_new">New</span>')
                + '</button>';
        }).join('');
    }

    function unreadCount() {
        return messages.filter(function (message) {
            return message.role === 'assistant' && !message.read;
        }).length;
    }

    function renderBadges() {
        var count = unreadCount();
        for (var index = 0; index < badges.length; index++) {
            badges[index].textContent = String(count);
            badges[index].hidden = count === 0;
        }
    }

    function markRead() {
        var changed = false;
        messages.forEach(function (message) {
            if (message.role === 'assistant' && !message.read) {
                message.read = true;
                changed = true;
            }
        });
        if (changed) {
            saveMessages();
            renderBadges();
        }
    }

    // ---- panels ------------------------------------------------------------

    function openChat() {
        openPanel = 'chat';
        notifPanel.hidden = true;
        chatPanel.hidden = false;
        backdrop.hidden = false;
        root.classList.add('assist_open');
        renderMessages();
        markRead();
    }

    function openNotifications() {
        openPanel = 'notifications';
        chatPanel.hidden = true;
        notifPanel.hidden = false;
        backdrop.hidden = false;
        root.classList.add('assist_open');
        renderNotifications();
        markRead();
    }

    function closePanels() {
        openPanel = null;
        chatPanel.hidden = true;
        notifPanel.hidden = true;
        backdrop.hidden = true;
        root.classList.remove('assist_open');
    }

    // ---- talking to the assistant -----------------------------------------

    function setSending(sending) {
        sendBtn.disabled = sending;
        input.disabled = sending;
    }

    function askAssistant() {
        // The model needs the conversation to open with the user's own words.
        var history = messages.slice(-HISTORY_LIMIT).map(function (message) {
            return { role: message.role, text: message.text };
        });
        while (history.length && history[0].role !== 'user') {
            history.shift();
        }

        return fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: history })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data && data.reply) {
                return String(data.reply);
            }
            return (data && data.message) || 'I could not reach the assistant just now. Please try again.';
        }).catch(function () {
            return 'I could not reach the assistant just now. Please try again.';
        });
    }

    function send() {
        var text = input.value.trim();
        if (!text || pending) {
            return;
        }
        input.value = '';
        messages.push({ id: 'u' + Date.now(), role: 'user', text: text, at: Date.now(), read: true });
        pending = true;
        saveMessages();
        renderMessages();
        setSending(true);

        askAssistant().then(function (reply) {
            messages.push({
                id: 'a' + Date.now(),
                role: 'assistant',
                text: reply,
                at: Date.now(),
                read: openPanel === 'chat'
            });
            pending = false;
            saveMessages();
            renderMessages();
            renderBadges();
            setSending(false);
            if (openPanel === 'notifications') {
                renderNotifications();
            }
        });
    }

    // ---- wiring ------------------------------------------------------------

    root.addEventListener('click', function (event) {
        var trigger = event.target.closest ? event.target.closest('[data-act]') : null;
        if (!trigger) {
            return;
        }
        var action = trigger.getAttribute('data-act');
        if (action === 'chat' || action === 'open-chat') {
            openChat();
        } else if (action === 'notifications') {
            openNotifications();
        } else if (action === 'close') {
            closePanels();
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        send();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && openPanel) {
            closePanels();
        }
    });

    saveMessages();
    renderMessages();
    renderNotifications();
    renderBadges();
})();
