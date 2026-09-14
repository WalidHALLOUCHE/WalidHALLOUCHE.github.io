const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');
const progressBar = document.querySelector('.page-progress span');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const closeMenu = () => {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const updateScrollState = () => {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? (scrollTop / scrollRange) * 100 : 0;

  header?.classList.toggle('is-scrolled', scrollTop > 24);
  if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
};

window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

const animateCounter = (element) => {
  if (element.dataset.animated === 'true') return;
  element.dataset.animated = 'true';

  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || '';

  if (reduceMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const start = performance.now();
  const duration = 900;

  const tick = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (elapsed < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      entry.target.querySelectorAll('.counter').forEach(animateCounter);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal, .proof-strip').forEach((element) => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.counter').forEach((counter) => counterObserver.observe(counter));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  document.querySelectorAll('.counter').forEach(animateCounter);
}
