(function () {
  'use strict';

  // Run a callback after DOM is ready
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  // Set footer year if the #year element exists
  function initFooterYear() {
    var y = document.getElementById('year');
    if (y) {
      y.textContent = new Date().getFullYear();
    }
  }

  // Initialize clickable dropdown behavior for expandable bars
  function initExpandableBars() {
    // Select all bars from both projects and experiences pages
    var bars = document.querySelectorAll('[data-project-bar], [data-exp]');
    if (!bars || !bars.length) return;

    bars.forEach(function (bar) {
      // Find the primary clickable area, if it exists
      var toggle = bar.querySelector('.exp-bar-toggle') || bar;

      // Toggle open/closed on click
      toggle.addEventListener('click', function (e) {
        if (e.target && e.target.closest('a')) return; // don't toggle when a link is clicked
        bar.classList.toggle('open');
      });

      // Keyboard accessibility: toggle on Enter/Space when focused
      bar.addEventListener('keydown', function (e) {
        var key = e.key || e.code;
        if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
          e.preventDefault();
          bar.classList.toggle('open');
        }
      });
    });
  }

  // Initialize all features
  ready(function () {
    initFooterYear();
    initExpandableBars();
  });
})();