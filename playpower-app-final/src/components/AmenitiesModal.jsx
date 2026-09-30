import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { listingInfo } from '../data/listing';
import { useFocusTrap } from '../hooks/useFocusTrap';
import './AmenitiesModal.css';

export default function AmenitiesModal({ onClose }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const overlayRef = useRef(null);

  useFocusTrap(modalRef, onClose);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div className="amenities-modal-overlay" ref={overlayRef} onMouseDown={handleOverlayClick}>
      <div
        className="amenities-modal"
        role="dialog"
        aria-modal="true"
        aria-label="All amenities"
        ref={modalRef}
      >
        <div className="amenities-modal-header">
          <button
            type="button"
            className="amenities-modal-close"
            onClick={onClose}
            ref={closeBtnRef}
            aria-label="Close amenities"
          >
            <X size={18} />
          </button>
        </div>
        <div className="amenities-modal-body">
          <h2>What this place offers</h2>
          {listingInfo.amenities.categories.map((cat) => (
            <section key={cat.name} className="amenities-modal-category">
              <h3>{cat.name}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
