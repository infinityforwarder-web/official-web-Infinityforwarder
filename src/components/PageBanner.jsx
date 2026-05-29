import { Container } from 'react-bootstrap';

export default function PageBanner({ title, subtitle, badge, image }) {
  return (
    <section
      className={`page-banner ${image ? 'page-banner-image' : ''}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {image && <div className="page-banner-overlay" />}
      <Container>
        <div className="page-banner-inner reveal-up active">
          {badge && <span className="hero-badge">{badge}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </Container>
    </section>
  );
}
