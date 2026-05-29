import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop;
        const height = el.clientHeight;
        if (window.pageYOffset >= top - height / 3) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return active;
}
