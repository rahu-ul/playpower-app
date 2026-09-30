import { Search, Globe, Menu, CircleUserRound } from 'lucide-react';
import './Header.css';

function AirbnbLogo() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" focusable="false">
      <path
        fill="var(--color-primary)"
        d="M16 1c1.4 0 2.5.7 3.4 2.1l.2.4 7.8 15.9.2.5c.5 1.2.7 2 .7 2.9 0 3.4-2.6 6.2-6 6.2-2.1 0-3.9-1.1-6.3-3.6-2.4 2.5-4.2 3.6-6.3 3.6-3.4 0-6-2.8-6-6.2 0-.9.2-1.7.7-2.9l.2-.5 7.8-15.9.2-.4C13.5 1.7 14.6 1 16 1zm0 2.4c-.5 0-.9.3-1.4 1.1l-.2.4-7.7 15.7-.1.3c-.4.9-.5 1.3-.5 1.8 0 2 1.5 3.6 3.5 3.6 1.4 0 2.7-.8 4.9-3.3-2-2.7-3-5-3-6.9 0-2.6 1.9-4.6 4.5-4.6s4.5 2 4.5 4.6c0 1.9-1 4.2-3 6.9 2.2 2.5 3.5 3.3 4.9 3.3 2 0 3.5-1.6 3.5-3.6 0-.5-.1-.9-.5-1.8l-.1-.3-7.7-15.7-.2-.4c-.5-.8-.9-1.1-1.4-1.1zm0 8.1c-1.2 0-2 .9-2 2.1 0 1.3.7 3 2 5 1.3-2 2-3.7 2-5 0-1.2-.8-2.1-2-2.1z"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="header-logo" aria-label="Airbnb-style home">
          <AirbnbLogo />
          <span>airbnb</span>
        </a>

        <form
          className="header-search"
          role="search"
          aria-label="Search listings"
          onSubmit={(e) => e.preventDefault()}
        >
          <button type="button" className="header-search-segment header-search-segment--active">
            <span className="header-search-icon" aria-hidden="true">🏠</span>
            <span>Anywhere</span>
          </button>
          <span className="header-search-divider" aria-hidden="true" />
          <button type="button" className="header-search-segment">
            Anytime
          </button>
          <span className="header-search-divider" aria-hidden="true" />
          <button type="button" className="header-search-segment header-search-segment--muted">
            Add guests
          </button>
          <button type="submit" className="header-search-btn" aria-label="Search">
            <Search size={14} color="#fff" strokeWidth={3} />
          </button>
        </form>

        <div className="header-right">
          <button type="button" className="header-host-link">
            Become a host
          </button>
          <button type="button" className="header-icon-btn" aria-label="Choose a language and region">
            <Globe size={16} />
          </button>
          <button type="button" className="header-menu-btn" aria-label="Open user menu">
            <Menu size={16} />
            <CircleUserRound size={26} color="#717171" />
          </button>
        </div>
      </div>
    </header>
  );
}
