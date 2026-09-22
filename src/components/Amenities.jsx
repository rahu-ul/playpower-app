import {
  UtensilsCrossed,
  Laptop,
  Waves,
  PawPrint,
  Wifi,
  Car,
  Bath,
  Cctv,
} from 'lucide-react';
import { listingInfo } from '../data/listing';
import './Amenities.css';

const ICONS = {
  kitchen: UtensilsCrossed,
  workspace: Laptop,
  pool: Waves,
  pets: PawPrint,
  wifi: Wifi,
  parking: Car,
  hottub: Bath,
  'security-camera': Cctv,
};

export default function Amenities({ onShowAll }) {
  const { amenities } = listingInfo;

  return (
    <div className="amenities" id="amenities">
      <h2>What this place offers</h2>
      <ul className="amenities-grid">
        {amenities.highlighted.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <li key={a.label} className={a.strikethrough ? 'amenity--unavailable' : ''}>
              <Icon size={22} strokeWidth={1.5} />
              <span>{a.label}</span>
            </li>
          );
        })}
      </ul>
      <button type="button" className="amenities-show-all" onClick={onShowAll}>
        Show all {amenities.totalCount} amenities
      </button>
    </div>
  );
}
