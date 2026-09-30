import { ChevronDown, Flag } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './BookingCard.css';

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
}

export default function BookingCard({ onOpenCalendar }) {
  const { booking } = listingInfo;
  const currency = booking?.currency || '₹';

  return (
    <div className="booking-sidebar-wrapper">
      <aside className="booking-card" aria-label="Reservation details">
        <div className="booking-card-promo">
          <span aria-hidden="true" className="booking-promo-icon">🏷️</span>
          <div>
            <p>{booking.promo.text}</p>
            <a href="#terms">{booking.promo.linkText}</a>
          </div>
          <button type="button" className="booking-card-claim" aria-label="Claim promo discount">
            Claim
          </button>
        </div>

        <div className="booking-card-price">
          <span className="booking-card-price-amount">
            {currency}
            {booking.priceForStay.toLocaleString('en-IN')}
          </span>
          <span className="booking-card-price-nights"> for {booking.nights} nights</span>
        </div>

        <div className="booking-card-box">
          <button
            type="button"
            className="booking-card-dates"
            onClick={onOpenCalendar}
            aria-label={`Change dates, currently ${formatDate(booking.checkIn)} to ${formatDate(booking.checkOut)}`}
          >
            <div className="booking-card-date-field">
              <span>CHECK-IN</span>
              <strong>{formatDate(booking.checkIn)}</strong>
            </div>
            <div className="booking-card-date-field booking-card-date-field--border">
              <span>CHECKOUT</span>
              <strong>{formatDate(booking.checkOut)}</strong>
            </div>
          </button>

          <button
            type="button"
            className="booking-card-guests"
            aria-label={`Select guests, currently ${booking.guests} guests`}
          >
            <div>
              <span>GUESTS</span>
              <strong>{booking.guests} guests</strong>
            </div>
            <ChevronDown size={18} />
          </button>
        </div>

        <div className="booking-card-cancellation-badge">
          Free cancellation before <strong>{booking.freeCancellationBefore}</strong>
        </div>

        <button type="button" className="booking-card-reserve" onClick={onOpenCalendar}>
          Reserve
        </button>

        <p className="booking-card-note">You won&apos;t be charged yet</p>
      </aside>

      <button type="button" className="booking-report-btn">
        <Flag size={14} />
        <span>Report this listing</span>
      </button>
    </div>
  );
}
