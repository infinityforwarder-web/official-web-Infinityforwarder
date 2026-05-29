import { Col, Container, Row } from 'react-bootstrap';
import { CONTACT_IMAGES } from '../config/site';

const highlights = [
  {
    image: CONTACT_IMAGES.support,
    alt: 'Contact support',
    text: '24/7 shipment support on WhatsApp & phone',
  },
  {
    image: CONTACT_IMAGES.cargo,
    alt: 'Cargo shipping',
    text: 'Door-to-door cargo across India & abroad',
  },
  {
    image: CONTACT_IMAGES.multimodal,
    alt: 'Multimodal freight',
    text: 'Air, ocean, road & customs under one roof',
  },
];

export default function ContactHighlights() {
  return (
    <section className="section-padding contact-highlights-section">
      <Container>
        <Row className="g-3 g-md-4">
          {highlights.map((item, i) => (
            <Col key={item.text} xs={12} sm={4}>
              <div className={`contact-visual-card reveal-up stagger-${i + 1}`}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
