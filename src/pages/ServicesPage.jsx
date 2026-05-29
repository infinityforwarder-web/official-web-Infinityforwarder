import { Col, Container, Row } from 'react-bootstrap';
import PageBanner from '../components/PageBanner';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceCard from '../components/ServiceCard';
import AnimatedStrip from '../components/AnimatedStrip';
import { PAGE_HEROES, SERVICES } from '../config/site';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        badge="Our Solutions"
        title="Freight & Logistics Services"
        subtitle="Import, export, ocean and air freight, customs clearance, land transport, and warehousing—one partner for your entire supply chain."
        image={PAGE_HEROES.services}
      />
      <AnimatedStrip />
      <section className="section-padding">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services' },
            ]}
          />
          <Row className="g-4">
            {SERVICES.map((service, index) => (
              <Col key={service.slug} xs={12} md={6} lg={4}>
                <div className={`reveal-up stagger-${(index % 3) + 1}`}>
                  <ServiceCard service={service} variant="compact" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
