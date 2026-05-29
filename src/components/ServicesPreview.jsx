import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../config/site';

export default function ServicesPreview() {
  return (
    <section id="our-services" className="section-padding services-preview-section">
      <Container>
        <div className="text-center reveal-up section-header">
          <h2 className="gradient-text section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Tap any service to explore dedicated details, images, and benefits.
          </p>
        </div>
        <Row className="g-3 g-md-4 services-preview-grid">
          {SERVICES.map((s, i) => (
            <Col key={s.slug} xs={6} lg={4} className="services-preview-col">
              <div className={`reveal-up stagger-${(i % 3) + 1}`}>
                <ServiceCard service={s} variant="compact" />
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4 mt-md-5 reveal-up">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
