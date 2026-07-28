// Bangun Karya Mandiri — script.js
// Sengaja minimal: hanya toggle menu mobile, tidak ada dependency eksternal.

(function () {
  var nav = document.getElementById('bkm-nav');
  var toggle = document.getElementById('bkm-nav-toggle');

  if (!nav || !toggle) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Tutup menu mobile otomatis saat salah satu link diklik
  nav.querySelectorAll('.bkm-nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
