import { Link } from 'react-router-dom';
import { LOGO_SRC, LOGO_SRC_DARK, COMPANY } from '../config/site';
import { useTheme } from '../context/ThemeContext';

export default function Logo({ className = 'logo', compact = false }) {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? LOGO_SRC_DARK : LOGO_SRC;

  return (
    <Link to="/" className={className} aria-label={`${COMPANY.shortName} home`}>
      <span className="logo-mark" aria-hidden>
        <img
          src={logoSrc}
          alt=""
          className="logo-img"
          width={364}
          height={160}
          decoding="async"
        />
      </span>
      {!compact && (
        <span className="logo-text">
          <span className="logo-text-brand">Infinity</span>
          <span className="logo-text-accent" aria-hidden />
          <span className="logo-text-tag">Forwarder</span>
        </span>
      )}
    </Link>
  );
}
