import { listingInfo } from '../data/listing';
import './SleepingArrangements.css';

export default function SleepingArrangements() {
  return (
    <section className="sleeping" aria-label="Sleeping arrangements">
      <h2>Where you&apos;ll sleep</h2>
      <div className="sleeping-cards">
        {listingInfo.sleepingArrangements.map((s) => (
          <div className="sleeping-card" key={s.room}>
            <img src={s.image} alt={s.room} />
            <div className="sleeping-card-info">
              <strong>{s.room}</strong>
              <p>{s.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
