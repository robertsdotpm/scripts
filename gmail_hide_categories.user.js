// ==UserScript==
// @name         Gmail Hide Categories
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Overlay a white div over Gmail at a fixed position
// @match        https://mail.google.com/*
// @grant        none
// @license      MIT; https://opensource.org/licenses/MIT
// ==/UserScript==

(function() {
    'use strict';

    const overlay = document.createElement('div');

    overlay.style.position = 'absolute';
    overlay.style.top = '120px';       // 100px from the top
    overlay.style.right = '60px';
    overlay.style.width = '75%';       // 50% width
    overlay.style.height = '50px';    // 100px height
    overlay.style.background = '#F0F2EF';
    overlay.style.zIndex = '9999';     // high enough to be on top
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.fontSize = '18px';
    overlay.style.color = 'black';
    overlay.style.pointerEvents = 'none';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';       // vertical centering
    overlay.style.justifyContent = 'center';   // horizontal centering
    overlay.textContent = ""; // Add text to the div here if you want

    document.body.appendChild(overlay);
})();
