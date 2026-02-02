/**
 * Scroll reveal: add .visible when elements enter viewport
 * Respects prefers-reduced-motion
 */
(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');

  function reveal() {
    if (prefersReducedMotion) {
      reveals.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var windowHeight = window.innerHeight;
    var revealPoint = 120;
    reveals.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight - revealPoint) el.classList.add('visible');
    });
  }

  window.addEventListener('scroll', reveal, { passive: true });
  window.addEventListener('resize', reveal);
  reveal();
})();

/**
 * Hero video: ensure autoplay runs (some browsers need an explicit .play() call)
 */
(function () {
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.play().catch(function () {});
  }
})();

/**
 * Header: add .header-scrolled when past hero for background + contrast
 */
(function () {
  var header = document.getElementById('site-header');
  if (!header) return;

  function updateHeader() {
    var hero = document.querySelector('.hero');
    var heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    if (heroBottom < 1) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
  updateHeader();
})();
