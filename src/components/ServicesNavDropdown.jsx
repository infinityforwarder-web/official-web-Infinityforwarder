import { Link, useLocation } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { SERVICES } from '../config/site';

export default function ServicesNavDropdown({ className = '' }) {
  const location = useLocation();
  const isServicesActive =
    location.pathname === '/services' || location.pathname.startsWith('/services/');

  return (
    <NavDropdown
      title={
        <span className={isServicesActive ? 'dropdown-active' : ''}>
          Services <i className="fa-solid fa-chevron-down ms-1 dropdown-chevron" />
        </span>
      }
      id="services-nav-dropdown"
      className={`services-nav-dropdown nav-router-link ${className}`}
      align="end"
    >
      <NavDropdown.Item as={Link} to="/services" className="dropdown-item-custom">
        <i className="fa-solid fa-table-cells-large me-2" /> All Services
      </NavDropdown.Item>
      <NavDropdown.Divider />
      {SERVICES.map((s) => (
        <NavDropdown.Item
          key={s.slug}
          as={Link}
          to={`/services/${s.slug}`}
          className="dropdown-item-custom"
        >
          <span className="dropdown-item-icon" style={{ background: `${s.color}22`, color: s.color }}>
            <i className={`fa-solid ${s.icon}`} />
          </span>
          {s.title}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}
