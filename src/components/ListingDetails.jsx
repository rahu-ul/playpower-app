import { listingInfo } from '../data/listing';
import './ListingDetails.css';

export default function ListingDetails() {
  const { typeSummary, guestsSummary, rating, reviewCount, guestFavouriteBlurb, host } =
    listingInfo;

  return (
    <div className="listing-details">
      <h2 className="listing-details-type">{typeSummary}</h2>
      <p className="listing-details-guests">{guestsSummary}</p>

      <div className="guest-favourite-card">
        <div className="guest-favourite-badge" aria-hidden="true">
          🏆
        </div>
        <div className="guest-favourite-text">
          <strong>Guest favourite</strong>
          <span>{guestFavouriteBlurb}</span>
        </div>
        <div className="guest-favourite-rating">
          <span className="guest-favourite-rating-number">{rating.toFixed(2)}</span>
          <span className="guest-favourite-stars" aria-hidden="true">
            ★★★★★
          </span>
          <span className="guest-favourite-count">
            {reviewCount}
            <br />
            Reviews
          </span>
        </div>
      </div>

      <div className="host-row">
        <div className="host-avatar" aria-hidden="true">
          {host.name.charAt(0)}
        </div>
        <div>
          <strong>Hosted by {host.name}</strong>
          <p>{host.yearsHosting} years hosting</p>
        </div>
      </div>
    </div>
  );
}
