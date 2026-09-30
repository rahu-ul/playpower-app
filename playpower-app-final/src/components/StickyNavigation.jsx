import { listingInfo } from '../data/listing';
import './StickyNavigation.css';

const TABS = [
  { id: 'photos-section', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

export default function StickyNavigation({ activeTab, onNavigate }) {
  const { booking, rating, reviewCount } = listingInfo;
  const currency = booking?.currency || '₹';

  function handleTabClick(e, tabId) {
    e.preventDefault();
    onNavigate?.(tabId);
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleReserve() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      calendarEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="sticky-nav">
      <div className="page-container sticky-nav-inner">
        <nav className="sticky-nav-tabs" aria-label="Listing sections">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={
                'sticky-nav-tab' + (activeTab === tab.id ? ' sticky-nav-tab--active' : '')
              }
              onClick={(e) => handleTabClick(e, tab.id)}
            >
              {tab.label}
            </a>
          ))}
        </nav>
        <div className="sticky-nav-summary">
          <span className="sticky-nav-price">
            {currency}
            {booking.priceForStay.toLocaleString('en-IN')}{' '}
            <span className="sticky-nav-price-suffix">for {booking.nights} nights</span>
          </span>
          <span className="sticky-nav-rating">
            ★ {rating.toFixed(2)} · {reviewCount} reviews
          </span>
          <button type="button" className="sticky-nav-reserve" onClick={handleReserve}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
