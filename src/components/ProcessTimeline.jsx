import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { PROCESS_STEPS } from '../config/site';

export default function ProcessTimeline() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState([]);

  useEffect(() => {
    const onScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        let p = ((windowHeight * 0.8 - rect.top) / rect.height) * 100;
        p = Math.min(100, Math.max(0, p));
        setProgress(p);
        const active = PROCESS_STEPS.map((_, index) => index).filter((index) => {
          const stepPoint = (index / (PROCESS_STEPS.length - 1)) * 100;
          return p >= stepPoint - 15;
        });
        setActiveSteps(active);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section-padding pt-0" id="process">
      <Container>
        <div className="text-center reveal-up section-header">
          <h2 className="section-title-plain">How It Works</h2>
          <p className="section-subtitle mx-auto">
            Simple process from enquiry to final delivery.
          </p>
          <p className="process-mobile-hint d-md-none">Swipe horizontally to view all steps</p>
        </div>
        <div className="process-section reveal-up">
          <div className="process-wrapper" ref={timelineRef}>
            <div className="process-line" />
            <div className="process-progress" style={{ height: `${progress}%` }} aria-hidden />
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.num}
                className={`process-step ${activeSteps.includes(index) ? 'active' : ''}`}
              >
                <div className="step-node">{step.num}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
