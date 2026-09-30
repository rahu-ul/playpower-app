import { Umbrella, Snowflake, KeyRound } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './Highlights.css';

const ICONS = {
  umbrella: Umbrella,
  snowflake: Snowflake,
  key: KeyRound,
};

export default function Highlights() {
  return (
    <div className="highlights">
      {listingInfo.highlights.map((h, i) => {
        const Icon = ICONS[h.icon];
        return (
          <div className="highlight-row" key={i}>
            <Icon size={26} strokeWidth={1.5} />
            <div>
              <strong>{h.title}</strong>
              <p>{h.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
