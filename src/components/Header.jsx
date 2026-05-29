import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import ServicesNavDropdown from './ServicesNavDropdown';
import { NAV_LINKS } from '../config/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="desktop-header" className={scrolled ? 'header-scrolled' : ''}>
      <Container>
        <Navbar expand="lg" className="nav-wrapper py-0 w-100">
          <Logo className="logo me-lg-3" />
          <Nav className="nav-links navbar-nav mx-auto d-none d-lg-flex flex-row align-items-center">
            <Nav.Link as={NavLink} to="/" end className="px-2 nav-router-link">
              Home
            </Nav.Link>
            <ServicesNavDropdown />
            {NAV_LINKS.filter((l) => l.path !== '/').map((l) => (
              <Nav.Link
                key={l.path}
                as={NavLink}
                to={l.path}
                end={l.end}
                className="px-2 nav-router-link"
              >
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="nav-actions d-flex align-items-center">
            <ThemeToggle />
            <NavLink to="/contact" className="btn btn-glow d-none d-lg-inline-flex">
              Get Quote
            </NavLink>
          </div>
        </Navbar>
      </Container>
    </header>
  );
}
