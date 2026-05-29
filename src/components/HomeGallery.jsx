import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { PAGE_HEROES, SERVICES } from '../config/site';

export default function HomeGallery() {
  const tiles = SERVICES.slice(0, 3);

  return (
    <section className="home-gallery section-padding pt-0">
      <Container>
        <Row className="g-3 g-md-4">
          <Col md={7}>
            <div className="gallery-hero reveal-left">
              <img src={PAGE_HEROES.homeGallery} alt="Logistics team" loading="lazy" />
              <div className="gallery-hero-caption">
                <span className="pulse-dot" />
                Live global logistics network
              </div>
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column gap-3 gap-md-4">
            {tiles.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`gallery-tile reveal-right stagger-${i + 1}`}
              >
                <img src={s.cardImage} alt={s.title} loading="lazy" />
                <span className="gallery-tile-label">
                  <i className={`fa-solid ${s.icon}`} /> {s.title}
                </span>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
