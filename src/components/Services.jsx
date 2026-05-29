import { Col, Container, Row } from 'react-bootstrap';

const services = [
  {
    large: true,
    reveal: 'reveal-left',
    icon: 'fa-plane-departure',
    iconStyle: {},
    title: 'Air Freight Priority',
    description:
      'Expedited, secure, and reliable air cargo solutions for your time-sensitive and high-value shipments worldwide. When time is the ultimate currency, we deliver.',
    cta: { href: '#contact', label: 'Book Charter', outline: true },
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Air freight',
  },
  {
    reveal: 'reveal-right',
    delay: '0.1s',
    icon: 'fa-ship',
    iconStyle: { color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' },
    title: 'Ocean Freight',
    description: 'Cost-effective FCL & LCL container routing across major global shipping lanes.',
    link: true,
  },
  {
    reveal: 'reveal-up',
    delay: '0.2s',
    icon: 'fa-file-shield',
    iconStyle: { color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)' },
    title: 'Customs Brokerage',
    description: 'Automated EXIM compliance, swift documentation, and zero border delays.',
    link: true,
  },
  {
    large: true,
    row: true,
    reveal: 'reveal-up',
    delay: '0.3s',
    icon: 'fa-truck-fast',
    iconStyle: { margin: 0, width: 80, height: 80, fontSize: '3rem' },
    title: 'Inland Transport',
    description:
      'Complete final-mile delivery network. Seamless offloading and dedicated trucking right to your warehouse door.',
  },
];

export default function Services() {
  return (
    <section className="section-padding" id="services">
      <Container>
        <div className="text-center reveal-up section-header">
          <h2 className="gradient-text section-title">Core Architecture</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive transportation and supply chain services engineered for scale and
            absolute reliability.
          </p>
        </div>
        <Row className="bento-grid g-4 g-lg-5">
          {services.map((s) => (
            <Col
              key={s.title}
              xs={12}
              md={s.large && !s.row ? 12 : 6}
              lg={s.large ? (s.row ? 12 : 8) : 4}
            >
              <article
                className={`bento-item ${s.large ? 'bento-large' : ''} ${s.reveal} ${s.row ? 'bento-row' : ''}`}
                style={s.delay ? { transitionDelay: s.delay } : undefined}
              >
                {s.row ? (
                  <>
                    <div className="bento-row-text">
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </div>
                    <div className="bento-icon bento-icon-lg" style={s.iconStyle}>
                      <i className={`fa-solid ${s.icon}`} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bento-body" style={{ position: 'relative', zIndex: 2 }}>
                      <div className="bento-icon" style={s.iconStyle}>
                        <i className={`fa-solid ${s.icon}`} />
                      </div>
                      <h3>{s.title}</h3>
                      <p className={s.large ? 'bento-desc-wide' : ''}>{s.description}</p>
                      {s.cta && (
                        <a href={s.cta.href} className="btn btn-outline magnetic mt-auto">
                          {s.cta.label}
                        </a>
                      )}
                      {s.link && (
                        <a href="#contact" className="bento-link">
                          Learn More <i className="fa-solid fa-angle-right" />
                        </a>
                      )}
                    </div>
                    {s.image && (
                      <img src={s.image} alt={s.imageAlt} className="bento-img" loading="lazy" />
                    )}
                  </>
                )}
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
