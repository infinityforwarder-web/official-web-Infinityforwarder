import { Container, Row, Col } from 'react-bootstrap';
import { SOCIAL_LINKS, COMPANY } from '../config/site';

export default function SocialConnect() {
  return (
    <section className="social-section" aria-label="Connect on social media">
      <Container>
        <div className="text-center reveal-up section-header-sm">
          <h2 className="gradient-text section-title">Connect With Us</h2>
          <p className="section-subtitle mx-auto">
            Follow {COMPANY.shortName} for company news, trade insights, and logistics tips.
          </p>
        </div>
        <Row className="g-3 g-md-4 justify-content-center social-grid">
          {SOCIAL_LINKS.map((social) => (
            <Col key={social.name} xs={6} md={4} lg={4}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card reveal-up"
                style={{ '--social-brand': social.brand }}
              >
                <span className="social-card-icon">
                  <i className={`fa-brands ${social.icon}`} />
                </span>
                <span className="social-card-name">{social.name}</span>
                <span className="social-card-handle">{social.handle}</span>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
