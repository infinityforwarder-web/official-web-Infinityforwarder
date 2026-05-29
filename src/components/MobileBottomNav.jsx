import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SERVICES } from '../config/site';

const mainTabs = [
  { path: '/', label: 'Home', icon: 'fa-house', end: true },
  { path: '/services', label: 'Services', icon: 'fa-layer-group', isServices: true },
  { path: '/about', label: 'About', icon: 'fa-building' },
  { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
];

function ServicesSheet({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="services-sheet-root" role="presentation">
      <button type="button" className="services-sheet-backdrop" onClick={onClose} aria-label="Close menu" />
      <div className="services-bottom-sheet" role="dialog" aria-modal="true" aria-label="Our services">
        <div className="services-sheet-handle" aria-hidden />
        <div className="services-sheet-header">
          <h2>Our Services</h2>
          <button type="button" className="services-sheet-close" onClick={onClose} aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="services-sheet-body">
          <div className="services-sheet-grid">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="services-sheet-item"
                onClick={onClose}
              >
                <span
                  className="services-sheet-icon"
                  style={{ color: s.color, background: `${s.color}18` }}
                >
                  <i className={`fa-solid ${s.icon}`} />
                </span>
                <span className="services-sheet-label">{s.title}</span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="btn btn-glow w-100 services-sheet-all" onClick={onClose}>
            View All Services
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function MobileBottomNav() {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();
  const isServicesRoute = location.pathname.startsWith('/services');

  useEffect(() => {
    setShowServices(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div className="mobile-nav-inner">
          {mainTabs.map((item) =>
            item.isServices ? (
              <button
                key="services"
                type="button"
                className={`mobile-nav-item ${isServicesRoute ? 'active' : ''}`}
                onClick={() => setShowServices(true)}
                aria-expanded={showServices}
                aria-haspopup="dialog"
              >
                <span className="mobile-nav-icon-wrap">
                  <i className={`fa-solid ${item.icon}`} />
                </span>
                <span className="mobile-nav-label">{item.label}</span>
              </button>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="mobile-nav-icon-wrap">
                  <i className={`fa-solid ${item.icon}`} />
                </span>
                <span className="mobile-nav-label">{item.label}</span>
              </NavLink>
            )
          )}
        </div>
      </nav>
      <ServicesSheet open={showServices} onClose={() => setShowServices(false)} />
    </>
  );
}
