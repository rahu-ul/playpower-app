import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import GridDotsIcon from './GridDotsIcon';
import { allPhotos } from '../data/listing';
import { useFocusTrap } from '../hooks/useFocusTrap';
import './Lightbox.css';

export default function Lightbox({ index, onClose, onNavigate }) {
  const containerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const photo = allPhotos[index];

  useFocusTrap(containerRef, onClose);

  useEffect(() => {
    closeBtnRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onNavigate((i) => Math.max(0, i - 1));
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNavigate((i) => Math.min(allPhotos.length - 1, i + 1));
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onNavigate]);

  if (!photo) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.category} photo viewer`}
      ref={containerRef}
    >
      <div className="lightbox-topbar">
        <button
          type="button"
          className="lightbox-icon-btn"
          onClick={onClose}
          aria-label="Return to photo tour overview"
        >
          <GridDotsIcon size={16} />
        </button>
        <span className="lightbox-title">{photo.category}</span>
        <div className="lightbox-actions">
          <span className="lightbox-counter">
            {index + 1} of {allPhotos.length}
          </span>
          <button
            type="button"
            className="lightbox-icon-btn"
            onClick={onClose}
            ref={closeBtnRef}
            aria-label="Close photo viewer"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="lightbox-stage">
        <button
          type="button"
          className="lightbox-nav lightbox-nav--prev"
          onClick={() => onNavigate(Math.max(0, index - 1))}
          disabled={index === 0}
          aria-label="Previous photo"
        >
          <ChevronLeft size={16} />
        </button>

        <img src={photo.src} alt={photo.alt} className="lightbox-image" />

        <button
          type="button"
          className="lightbox-nav lightbox-nav--next"
          onClick={() => onNavigate(Math.min(allPhotos.length - 1, index + 1))}
          disabled={index === allPhotos.length - 1}
          aria-label="Next photo"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
