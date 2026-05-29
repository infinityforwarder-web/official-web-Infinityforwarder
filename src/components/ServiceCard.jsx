import { Link } from 'react-router-dom';

export default function ServiceCard({ service, variant = 'grid' }) {
  const to = `/services/${service.slug}`;

  if (variant === 'compact') {
    return (
      <Link to={to} className="service-card-compact reveal-up">
        <div className="service-card-media">
          <img
            src={service.cardImage}
            alt={service.title}
            loading="lazy"
            decoding="async"
          />
          <span className="service-card-badge" style={{ background: service.color }}>
            <i className={`fa-solid ${service.icon}`} />
          </span>
        </div>
        <div className="service-card-body">
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <span className="bento-link">
            Explore <i className="fa-solid fa-arrow-right" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="service-card-image reveal-up">
      <Link to={to} className="service-card-image-link">
        <div className="service-card-media service-card-media-lg">
          <img
            src={service.cardImage}
            alt={service.title}
            loading="lazy"
            decoding="async"
          />
          <div className="service-card-overlay">
            <span className="service-card-badge-lg" style={{ background: service.color }}>
              <i className={`fa-solid ${service.icon}`} />
            </span>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <span className="service-card-cta">
              View Details <i className="fa-solid fa-arrow-right" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
