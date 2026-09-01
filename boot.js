/* YOUR DESTINY — fail-safe startup controller
   The splash is guaranteed to release after 3 seconds even if another module fails. */
(function () {
  'use strict';

  var SUPPORTED = ['ru', 'en', 'es', 'pt', 'de', 'fr'];
  var CIS = ['ru', 'kk', 'be', 'ky', 'uk', 'uz', 'tg', 'tk', 'az', 'hy'];
  var startedAt = Date.now();
  var revealed = false;

  function langFromCode(code) {
    code = String(code || '').toLowerCase().replace('_', '-').split('-')[0];
    if (CIS.indexOf(code) !== -1) return 'ru';
    if (SUPPORTED.indexOf(code) !== -1) return code;
    return 'en';
  }

  function detectInitialLanguage() {
    try {
      var saved = localStorage.getItem('lang');
      var manual = localStorage.getItem('lang_manual') === '1';
      if (manual && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    try {
      var navLang = navigator.language || navigator.userLanguage || 'en';
      return langFromCode(navLang);
    } catch (_) {
      return 'en';
    }
  }

  function applyInitialLanguage() {
    var lang = detectInitialLanguage();
    try {
      localStorage.setItem('lang', lang);
      if (!localStorage.getItem('lang_manual')) localStorage.setItem('lang_manual', '0');
    } catch (_) {}
    window.YD_INITIAL_LANGUAGE = lang;
    return lang;
  }

  function reveal() {
    if (revealed) return;
    revealed = true;
    var intro = document.getElementById('intro-screen');
    var app = document.getElementById('app-container');
    var nav = document.getElementById('bottom-nav');

    if (app) {
      app.classList.add('active');
      app.style.display = 'flex';
      app.removeAttribute('aria-hidden');
    }
    if (nav) {
      nav.style.display = 'flex';
      nav.removeAttribute('aria-hidden');
    }
    if (intro) {
      intro.style.transition = 'opacity 120ms ease';
      intro.style.opacity = '0';
      intro.style.pointerEvents = 'none';
      window.setTimeout(function () {
        intro.style.display = 'none';
      }, 120);
    }
    window.YD_SPLASH_DONE = true;
    window.dispatchEvent(new CustomEvent('your-destiny-ready'));
  }

  function boot() {
    applyInitialLanguage();
    // Hard guarantee: the UI appears at T+3000ms, independent of app.js.
    window.setTimeout(reveal, 3000);
  }

  // Never allow an exception in application modules to cancel the splash timer.
  window.addEventListener('error', function () {});
  window.addEventListener('unhandledrejection', function () {});

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
