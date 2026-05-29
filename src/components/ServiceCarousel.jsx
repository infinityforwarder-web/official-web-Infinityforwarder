import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { SERVICES } from '../config/site';

export default function ServiceCarousel() {
  const [index, setIndex] = useState(0);
  const total = SERVICES.length;

  const goTo = (nextIndex) => {
    setIndex((nextIndex + total) % total);
  };

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  return (
    <section className="service-carousel-section section-padding pt-0">
      <Container>
        <div className="text-center reveal-up section-header-sm mb-4">
          <h2 className="gradient-text section-title">Explore Our Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end logistics solutions — tap a service to learn more.
          </p>
        </div>

        <div className="service-carousel-wrap reveal-up">
          <Carousel
            activeIndex={index}
            onSelect={setIndex}
            interval={5000}
            pause="hover"
            className="service-carousel"
            indicators={false}
            controls={false}
            touch
          >
            {SERVICES.map((service) => (
              <Carousel.Item key={service.slug}>
                <Row className="align-items-center g-4">
                  <Col lg={7}>
                    <div className="service-carousel-media">
                      <img src={service.heroImage} alt={service.title} loading="lazy" />
                      <span
                        className="service-carousel-badge"
                        style={{ background: service.color }}
                      >
                        <i className={`fa-solid ${service.icon}`} />
                      </span>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="service-carousel-caption">
                      <p className="service-carousel-tag">{service.tagline}</p>
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                      <Link to={`/services/${service.slug}`} className="btn btn-glow">
                        View Service <i className="fa-solid fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="service-carousel-nav" aria-label="Carousel navigation">
            <button
              type="button"
              className="service-carousel-btn"
              onClick={goPrev}
              aria-label="Previous service"
            >
              <i className="fa-solid fa-chevron-left" aria-hidden />
            </button>
            <div className="service-carousel-dots" role="tablist" aria-label="Select service">
              {SERVICES.map((service, i) => (
                <button
                  key={service.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to ${service.title}`}
                  className={`service-carousel-dot ${i === index ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="service-carousel-btn"
              onClick={goNext}
              aria-label="Next service"
            >
              <i className="fa-solid fa-chevron-right" aria-hidden />
            </button>
          </div>

          <div className="service-carousel-thumbs d-none d-md-flex">
            {SERVICES.map((service, i) => (
              <button
                key={service.slug}
                type="button"
                className={`service-carousel-thumb ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Show ${service.title}`}
              >
                <img src={service.cardImage} alt="" loading="lazy" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
