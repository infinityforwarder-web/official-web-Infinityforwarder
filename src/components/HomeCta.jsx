import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const highlights = [
  { icon: 'fa-plane-departure', label: 'Air Freight' },
  { icon: 'fa-ship', label: 'Sea Freight' },
  { icon: 'fa-file-shield', label: 'Customs' },
  { icon: 'fa-truck-fast', label: 'Door to Door' },
];

export default function HomeCta() {
  return (
    <section className="home-cta section-padding">
      <Container>
        <div className="home-cta-panel reveal-up">
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={7}>
              <span className="home-cta-eyebrow">Ready to move your cargo?</span>
              <h2>
                Your logistics partner for <span className="gradient-text">global growth</span>
              </h2>
              <p>
                From quotation to final delivery, we handle air, ocean, customs, warehousing, and
                inland transport with clarity at every step.
              </p>
              <div className="home-cta-actions">
                <Link to="/contact" className="btn btn-glow">
                  Get a Quotation <i className="fa-solid fa-arrow-right ms-2" />
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </div>
            </Col>
            <Col lg={5}>
              <div className="home-cta-features">
                {highlights.map((item) => (
                  <div key={item.label} className="home-cta-feature">
                    <span className="home-cta-feature-icon">
                      <i className={`fa-solid ${item.icon}`} />
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
