import { CalendarX, Clock, ShieldCheck } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './Policies.css';

const ICONS = {
  cancellation: CalendarX,
  houseRules: Clock,
  safety: ShieldCheck,
};

export default function Policies() {
  const { policies } = listingInfo;

  return (
    <div className="policies">
      {Object.entries(policies).map(([key, p]) => {
        const Icon = ICONS[key];
        return (
          <div className="policy-col" key={key}>
            <Icon size={22} strokeWidth={1.5} />
            <h3>{p.title}</h3>
            {p.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <button type="button" className="policy-learn-more">
              Learn more
            </button>
          </div>
        );
      })}
    </div>
  );
}
