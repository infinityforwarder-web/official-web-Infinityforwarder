import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function MobileHeader() {
  return (
    <div className="mobile-header">
      <Logo className="logo" compact />
      <div className="d-flex align-items-center gap-2">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </div>
  );
}
