import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { NAV_LINKS, SERVICES } from '../config/site';

export default function MobileMenu({ className = '' }) {
  const [show, setShow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => setShow(false);

  return (
    <>
      <button
        type="button"
        className={`mobile-menu-btn ${className}`}
        onClick={() => setShow(true)}
        aria-label="Open menu"
      >
        <i className="fa-solid fa-bars" />
      </button>
      <Offcanvas show={show} onHide={close} placement="end" className="mobile-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="mobile-drawer-nav">
            <NavLink to="/" end className="mobile-drawer-link" onClick={close}>
              <i className="fa-solid fa-house" /> Home
            </NavLink>
            <button
              type="button"
              className="mobile-drawer-link mobile-drawer-toggle"
              onClick={() => setServicesOpen((o) => !o)}
            >
              <span>
                <i className="fa-solid fa-layer-group" /> Services
              </span>
              <i className={`fa-solid fa-chevron-down ${servicesOpen ? 'open' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="mobile-drawer-sub">
                <Link to="/services" className="mobile-drawer-sublink" onClick={close}>
                  All Services
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="mobile-drawer-sublink"
                    onClick={close}
                  >
                    <i className={`fa-solid ${s.icon}`} style={{ color: s.color }} /> {s.title}
                  </Link>
                ))}
              </div>
            )}
            {NAV_LINKS.filter((l) => l.path !== '/').map((l) => (
              <NavLink key={l.path} to={l.path} className="mobile-drawer-link" onClick={close}>
                <i className={`fa-solid ${l.icon}`} /> {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-glow w-100 mt-3" onClick={close}>
              Get Quote
            </Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
