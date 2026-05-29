import { Link, Navigate, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceHero from '../components/ServiceHero';
import ServiceCard from '../components/ServiceCard';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedStrip from '../components/AnimatedStrip';
import { getRelatedServices, getServiceBySlug } from '../utils/serviceHelpers';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = getRelatedServices(slug, 3);

  return (
    <>
      <ServiceHero service={service} />
      <AnimatedStrip />
      <section className="section-padding">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.title },
            ]}
          />
          <Row className="g-5 align-items-start">
            <Col lg={7} className="reveal-left">
              <h2 className="section-title-plain mb-3">Service Overview</h2>
              <p className="text-muted lead">{service.details}</p>
              <div className="service-detail-img-wrap mt-4 reveal-up">
                <img src={service.cardImage} alt={service.title} className="service-detail-img" />
                <div className="service-detail-img-badge float-badge">
                  <i className={`fa-solid ${service.icon}`} />
                </div>
              </div>
            </Col>
            <Col lg={5} className="reveal-right">
              <div className="detail-panel">
                <h3>
                  <i className="fa-solid fa-list-check me-2" style={{ color: service.color }} />
                  What We Offer
                </h3>
                <ul className="detail-list">
                  {service.features.map((f) => (
                    <li key={f}>
                      <i className="fa-solid fa-circle-check" style={{ color: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-panel mt-4">
                <h3>
                  <i className="fa-solid fa-star me-2" style={{ color: service.color }} />
                  Key Benefits
                </h3>
                <ul className="detail-list">
                  {service.benefits.map((b) => (
                    <li key={b}>
                      <i className="fa-solid fa-bolt" style={{ color: service.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-padding pt-0">
        <Container>
          <div className="text-center section-header reveal-up">
            <h2 className="section-title-plain">Related Services</h2>
          </div>
          <Row className="g-4">
            {related.map((s) => (
              <Col key={s.slug} xs={12} md={4}>
                <ServiceCard service={s} variant="compact" />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="mobile-sticky-cta d-lg-none">
        <Link to="/contact" className="btn btn-glow w-100">
          Get Quote for {service.title}
        </Link>
      </div>
    </>
  );
}
