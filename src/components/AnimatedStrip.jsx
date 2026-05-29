import { ANIMATED_STRIP } from '../config/site';

export default function AnimatedStrip() {
  const items = [...ANIMATED_STRIP, ...ANIMATED_STRIP];

  return (
    <div className="animated-strip" aria-hidden>
      <div className="animated-strip-track">
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`} className="animated-strip-item">
            <i className={`fa-solid ${item.icon}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
