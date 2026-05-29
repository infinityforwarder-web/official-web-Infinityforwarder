import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = 'theme-toggle' }) {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';

  return (
    <button type="button" className={className} onClick={toggleTheme} aria-label="Toggle theme">
      <i className={`fa-solid ${icon}`} />
    </button>
  );
}
