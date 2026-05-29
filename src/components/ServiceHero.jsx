import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function ServiceHero({ service }) {
  return (
    <section
      className="service-hero"
      style={{ backgroundImage: `url(${service.heroImage})` }}
    >
      <div className="service-hero-overlay" />
      <Container>
        <div className="service-hero-content reveal-up active">
          <Link to="/services" className="service-hero-back">
            <i className="fa-solid fa-arrow-left" /> All Services
          </Link>
          <span
            className="hero-badge service-hero-badge"
            style={{ borderColor: service.color }}
          >
            <i className={`fa-solid ${service.icon}`} style={{ color: service.color }} />
            {service.tagline}
          </span>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <Link to="/contact" className="btn btn-glow">
            Get a Quotation <i className="fa-solid fa-paper-plane ms-2" />
          </Link>
        </div>
      </Container>
      <div className="service-hero-shine" aria-hidden />
    </section>
  );
}
