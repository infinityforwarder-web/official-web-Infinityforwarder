import { Link } from 'react-router-dom';
import { LOGO_SRC, COMPANY } from '../config/site';

export default function Logo({ className = 'logo', compact = false }) {
  return (
    <Link to="/" className={className} aria-label={`${COMPANY.shortName} home`}>
      <img src={LOGO_SRC} alt="" className="logo-img" />
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
