import { useEffect, useRef, useState } from 'react';

function formatValue(value, target) {
  const n = Math.min(Math.ceil(value), target);
  if (target >= 1000) return `${n.toLocaleString()}+`;
  if (target >= 99) return `${n}+`;
  return String(n);
}

export function useCounter(target, enabled) {
  const [display, setDisplay] = useState('0');
  const started = useRef(false);

  useEffect(() => {
    if (!enabled || started.current) return;
    started.current = true;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const tick = () => {
      current += increment;
      if (current < target) {
        setDisplay(formatValue(current, target));
        requestAnimationFrame(tick);
      } else {
        setDisplay(formatValue(target, target));
      }
    };
    requestAnimationFrame(tick);
  }, [target, enabled]);

  return display;
}
