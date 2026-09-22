import { Share, Heart } from 'lucide-react';
import './ListingHeader.css';

export default function ListingHeader({ saved, onToggleSave }) {
  return (
    <div className="listing-header">
      <h1 className="listing-header-title">
        {'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10'}
      </h1>
      <div className="listing-header-actions">
        <button type="button" className="listing-header-action-btn">
          <Share size={16} />
          <span className="listing-header-action-label">Share</span>
        </button>
        <button
          type="button"
          className="listing-header-action-btn"
          onClick={onToggleSave}
          aria-pressed={saved}
        >
          <Heart size={16} fill={saved ? 'var(--color-primary)' : 'none'} color={saved ? 'var(--color-primary)' : 'currentColor'} />
          <span className="listing-header-action-label">{saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
