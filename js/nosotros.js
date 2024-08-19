document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.text-slide-in, .desc');
  const title = document.querySelector('.titulodesc');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach(element => observer.observe(element));

  setTimeout(() => title.classList.add('visible'), 1000);

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  const isElementInView = el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };

  const applyScrollEffects = () => {
    const h2Element = document.querySelector('h2.text-slide-in');
    const descElements = document.querySelectorAll('.desc');

    if (isElementInView(h2Element)) h2Element.classList.add('visible');
    descElements.forEach(p => {
      if (isElementInView(p)) p.classList.add('visible');
    });
  };

  window.addEventListener('load', applyScrollEffects);
  window.addEventListener('scroll', applyScrollEffects);
});
