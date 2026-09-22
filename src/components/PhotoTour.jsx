import { useEffect, useRef } from 'react';
import { ChevronLeft, Share, Heart, Grid3x3 } from 'lucide-react';
import { photoTourCategories } from '../data/listing';
import { useFocusTrap } from '../hooks/useFocusTrap';
import './PhotoTour.css';

export default function PhotoTour({ onClose, onOpenLightbox, initialCategoryId }) {
  const containerRef = useRef(null);
  const bodyRef = useRef(null);
  const closeBtnRef = useRef(null);

  useFocusTrap(containerRef, onClose);

  useEffect(() => {
    closeBtnRef.current?.focus();

    if (initialCategoryId && bodyRef.current) {
      const targetEl = document.getElementById(`pt-${initialCategoryId}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [initialCategoryId]);

  function scrollToCategory(catId) {
    const targetEl = document.getElementById(`pt-${catId}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div
      className="photo-tour"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      ref={containerRef}
    >
      <div className="photo-tour-topbar">
        <button
          type="button"
          className="photo-tour-back"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label="Back to listing"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="photo-tour-title">Photo tour</span>
        <div className="photo-tour-actions">
          <button type="button" className="photo-tour-icon-btn" aria-label="Share">
            <Share size={16} />
          </button>
          <button type="button" className="photo-tour-icon-btn" aria-label="Save">
            <Heart size={16} />
          </button>
        </div>
      </div>

      <nav className="photo-tour-thumbstrip" aria-label="Photo categories">
        {photoTourCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className="photo-tour-thumb"
            onClick={() => scrollToCategory(cat.id)}
            aria-label={`Scroll to ${cat.label}`}
          >
            <div className="photo-tour-thumb-img">
              <img src={cat.images[0]} alt="" />
            </div>
            <span>{cat.label}</span>
          </button>
        ))}
      </nav>

      <div className="photo-tour-body" ref={bodyRef}>
        {photoTourCategories.map((cat) => (
          <section key={cat.id} id={`pt-${cat.id}`} className="photo-tour-category">
            <div className="photo-tour-category-text">
              <h2>{cat.title}</h2>
              <p>{cat.subtitle}</p>
            </div>
            <div className="photo-tour-category-images">
              {cat.images.map((src, i) => (
                <button
                  type="button"
                  key={i}
                  className={
                    'photo-tour-category-image' +
                    (cat.images.length > 1 && i === 0 ? ' photo-tour-category-image--wide' : '')
                  }
                  onClick={() => onOpenLightbox(cat.id, i)}
                  aria-label={`Enlarge photo ${i + 1} of ${cat.title}`}
                >
                  <img src={src} alt={`${cat.title} ${i + 1}`} />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <button
        type="button"
        className="photo-tour-fab"
        onClick={() => onOpenLightbox(photoTourCategories[0].id, 0)}
        aria-label="View all photos in grid"
      >
        <Grid3x3 size={16} />
      </button>
    </div>
  );
}
