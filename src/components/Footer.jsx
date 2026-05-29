import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from './Logo';
import { COMPANY, SERVICES, NAV_LINKS, SOCIAL_LINKS } from '../config/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden />
      <Container>
        <Row className="footer-grid g-4 g-lg-5">
          <Col lg={5} className="footer-brand">
            <Logo className="logo footer-logo" />
            <p className="footer-desc">{COMPANY.description}</p>
            <div className="footer-contact-mini">
              <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}>
                <i className="fa-solid fa-phone" /> {COMPANY.phones[0]}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" /> {COMPANY.whatsappDisplay}
              </a>
            </div>
            <div className="footer-social">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{ '--social-brand': social.brand }}
                >
                  <i className={`fa-brands ${social.icon}`} />
                </a>
              ))}
            </div>
          </Col>
          <Col xs={6} md={4} lg={4} className="footer-links">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={6} md={4} lg={3} className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">All Services</Link>
              </li>
              {NAV_LINKS.filter((l) => l.path !== '/').map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact">Get a Quote</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
