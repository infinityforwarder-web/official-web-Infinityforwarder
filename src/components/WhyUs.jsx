import { Col, Container, Row } from 'react-bootstrap';
import { WHY_US, WHY_US_INTRO } from '../config/site';

export default function WhyUs() {
  return (
    <section className="section-padding why-section">
      <Container>
        <div className="text-center reveal-up section-header">
          <h2 className="section-title-plain">Why Choose Infinity Freight Forwarders?</h2>
          <p className="section-subtitle mx-auto">{WHY_US_INTRO}</p>
        </div>
        <Row className="g-3 g-md-4 why-us-grid">
          {WHY_US.map((item, i) => (
            <Col key={item.title} xs={6} lg={3} className="why-us-col">
              <article className={`why-card why-card-image reveal-up stagger-${(i % 4) + 1}`}>
                <div className="why-card-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="why-card-body">
                  <div className="why-card-icon">
                    <i className={`fa-solid ${item.icon}`} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
