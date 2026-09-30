import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './NearbyStays.css';

export default function NearbyStays() {
  const scrollerRef = useRef(null);
  const [page, setPage] = useState(1);
  const { nearbyStays, booking } = listingInfo;
  const currency = booking?.currency || '₹';

  function scrollBy(dir) {
    scrollerRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' });
    setPage((p) => Math.min(2, Math.max(1, p + dir)));
  }

  return (
    <section className="nearby-stays" aria-label="Nearby accommodations">
      <div className="nearby-stays-header">
        <h2>More stays nearby</h2>
        <div className="nearby-stays-controls">
          <span>{page} / 2</span>
          <button type="button" onClick={() => scrollBy(-1)} aria-label="Previous stays">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="Next stays">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="nearby-stays-scroller" ref={scrollerRef}>
        {nearbyStays.map((stay) => (
          <article className="nearby-stay-card" key={stay.title}>
            <div className="nearby-stay-image">
              <img src={stay.image} alt={stay.title} />
            </div>
            <p className="nearby-stay-title">{stay.title}</p>
            <p className="nearby-stay-meta">
              <strong>{currency}{stay.price.toLocaleString('en-IN')}</strong> · ★ {stay.rating}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
