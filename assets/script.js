// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const abierto = links.classList.toggle('abierto');
      toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('abierto'));
    });
  }

  // Aparición al hacer scroll (respeta "reducir movimiento" del sistema)
  const revelables = document.querySelectorAll('.reveal');
  if (revelables.length) {
    const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefiereMenosMovimiento) {
      revelables.forEach(el => el.classList.add('visible'));
    } else if ('IntersectionObserver' in window) {
      const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revelables.forEach(el => observador.observe(el));
    } else {
      revelables.forEach(el => el.classList.add('visible'));
    }
  }
});
