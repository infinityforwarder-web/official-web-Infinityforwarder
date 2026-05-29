import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useCounter } from '../hooks/useCounter';

const stats = [
  { target: 150, label: 'Global Ports' },
  { target: 12500, label: 'Shipments Delivered' },
  { target: 99, label: 'Success Rate %' },
  { target: 24, label: 'Hour Support' },
];

function StatItem({ target, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = useCounter(target, visible);

  return (
    <Col xs={6} md={3} className="stat-item" ref={ref}>
      <h3>{display}</h3>
      <p>{label}</p>
    </Col>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <Container>
        <Row className="stats-grid reveal-up g-4">
          {stats.map((s) => (
            <StatItem key={s.label} target={s.target} label={s.label} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
