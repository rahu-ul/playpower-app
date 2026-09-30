import GridDotsIcon from './GridDotsIcon';
import { heroImages } from '../data/listing';
import './ImageGallery.css';

export default function ImageGallery({ onOpenPhotoTour }) {
  return (
    <div className="gallery" role="region" aria-label="Photo gallery">
      <button
        type="button"
        className="gallery-tile gallery-tile--large"
        onClick={() => onOpenPhotoTour(0)}
        aria-label={`View photo 1 of ${heroImages.length}: ${heroImages[0].alt}`}
      >
        <img src={heroImages[0].src} alt={heroImages[0].alt} />
      </button>
      <div className="gallery-grid">
        {heroImages.slice(1).map((img, i) => (
          <button
            type="button"
            key={img.id}
            className="gallery-tile"
            onClick={() => onOpenPhotoTour(i + 1)}
            aria-label={`View photo ${i + 2} of ${heroImages.length}: ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
        <button
          type="button"
          className="gallery-show-all"
          onClick={() => onOpenPhotoTour(null)}
          aria-label="Show all photos"
        >
          <GridDotsIcon size={14} />
          Show all photos
        </button>
      </div>
    </div>
  );
}
