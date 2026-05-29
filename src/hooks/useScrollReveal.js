import { useEffect } from 'react';

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    elements.forEach((el) => el.classList.remove('active'));

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('active'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, deps);
}
