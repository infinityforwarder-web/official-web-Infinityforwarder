import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import PageBanner from '../components/PageBanner';
import WhyUs from '../components/WhyUs';
import ProcessTimeline from '../components/ProcessTimeline';
import AnimatedStrip from '../components/AnimatedStrip';
import { ABOUT_IMAGES, COMPANY, PAGE_HEROES, TESTIMONIALS } from '../config/site';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="About Us"
        title={`About ${COMPANY.shortName}`}
        subtitle="Your strategic partner in global trade—reliable freight forwarding built on transparency, compliance, and customer care."
        image={PAGE_HEROES.about}
      />
      <AnimatedStrip />
      <section className="section-padding">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="reveal-left">
              <div className="about-img-main">
                <img
                  src={ABOUT_IMAGES.team}
                  alt="Logistics professionals"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col lg={6} className="reveal-right">
              <h2 className="section-title-plain mb-3">Who We Are</h2>
              <p className="text-muted mb-3">{COMPANY.description}</p>
              <p className="text-muted mb-4">
                Whether you move time-sensitive air cargo, cost-effective ocean containers, or need
                compliant customs support, our team manages complexity so your business stays focused
                on growth.
              </p>
              <Link to="/contact" className="btn btn-glow">
                Let&apos;s Work Together
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-padding pt-0">
        <Container>
          <Row className="g-4">
            <Col md={6} className="reveal-up">
              <div className="about-highlight-card h-100">
                <img
                  src={ABOUT_IMAGES.compliance}
                  alt="Compliance"
                  className="about-card-img mb-3"
                  loading="lazy"
                />
                <h3>Import Compliance</h3>
                <p>
                  India&apos;s EXIM framework requires correct classification, duties, and licences
                  where applicable. We guide you through regulatory requirements.
                </p>
              </div>
            </Col>
            <Col md={6} className="reveal-up stagger-2">
              <div className="about-highlight-card h-100">
                <img
                  src={ABOUT_IMAGES.network}
                  alt="Global shipping"
                  className="about-card-img mb-3"
                  loading="lazy"
                />
                <h3>Global Network</h3>
                <p>
                  Partnerships across ports, airlines, and carriers worldwide—delivering the same
                  care as leading import-export operators.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <WhyUs />
      <ProcessTimeline />
      <section className="section-padding pt-0 testimonials-section">
        <Container>
          <div className="text-center section-header reveal-up">
            <h2 className="section-title-plain">What Clients Say</h2>
          </div>
          <Row className="g-4">
            {TESTIMONIALS.map((t, i) => (
              <Col key={t.quote} md={6}>
                <blockquote className={`testimonial-card reveal-up stagger-${i + 1}`}>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
