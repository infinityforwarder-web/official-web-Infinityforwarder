import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 280);
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 22;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg className="scroll-top-ring" viewBox="0 0 48 48" aria-hidden>
        <circle className="scroll-top-ring-bg" cx="24" cy="24" r="22" />
        <circle
          className="scroll-top-ring-progress"
          cx="24"
          cy="24"
          r="22"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <span className="scroll-top-icon">
        <i className="fa-solid fa-rocket" />
      </span>
    </button>
  );
}
