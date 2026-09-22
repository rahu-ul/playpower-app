import { useEffect, useState } from 'react';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';
import ListingHeader from './components/ListingHeader';
import ListingDetails from './components/ListingDetails';
import Highlights from './components/Highlights';
import Description from './components/Description';
import SleepingArrangements from './components/SleepingArrangements';
import Amenities from './components/Amenities';
import AmenitiesModal from './components/AmenitiesModal';
import BookingCard from './components/BookingCard';
import Calendar from './components/Calendar';
import StickyNavigation from './components/StickyNavigation';
import Reviews from './components/Reviews';
import Location from './components/Location';
import HostSection from './components/HostSection';
import Policies from './components/Policies';
import NearbyStays from './components/NearbyStays';
import { photoTourCategories } from './data/listing';
import './App.css';

export default function App() {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [photoTourCategoryId, setPhotoTourCategoryId] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('photos-section');

  // Centralized body scroll lock
  const isAnyModalOpen = photoTourOpen || lightboxIndex !== null || amenitiesModalOpen;
  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnyModalOpen]);

  // Scroll-spy to sync StickyNavigation active tab with scroll position
  useEffect(() => {
    const sectionIds = ['photos-section', 'amenities', 'reviews', 'location'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 180; // Account for sticky header & sticky nav

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollY >= top - offset) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function openPhotoTour(heroIndex = 0) {
    const heroToCategoryMap = [
      'living-room-1',
      'living-room-2',
      'additional-photos',
      'bedroom',
      'exterior',
    ];
    setPhotoTourCategoryId(heroToCategoryMap[heroIndex] || 'living-room-1');
    setPhotoTourOpen(true);
  }

  function closePhotoTour() {
    setPhotoTourOpen(false);
    setPhotoTourCategoryId(null);
  }

  function openLightboxByCategory(categoryId, imageIndexInCategory) {
    let flatIndex = 0;
    for (const cat of photoTourCategories) {
      if (cat.id === categoryId) {
        flatIndex += imageIndexInCategory;
        break;
      }
      flatIndex += cat.images.length;
    }
    setLightboxIndex(flatIndex);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function scrollToCalendar() {
    document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="app">
      <Header />

      <main className="page-container" id="top">
        <section id="photos-section">
          <ListingHeader saved={saved} onToggleSave={() => setSaved((s) => !s)} />
          <ImageGallery onOpenPhotoTour={openPhotoTour} />
        </section>
      </main>

      <StickyNavigation activeTab={activeTab} onNavigate={setActiveTab} />

      <main className="page-container">
        <div className="listing-layout">
          <div className="listing-main">
            <ListingDetails />
            <Highlights />
            <Description />
            <SleepingArrangements />
            <Amenities onShowAll={() => setAmenitiesModalOpen(true)} />
            <Calendar />
          </div>
          <div className="listing-side">
            <BookingCard onOpenCalendar={scrollToCalendar} />
          </div>
        </div>

        <div className="listing-followup">
          <Reviews />
          <Location />
          <HostSection />
          <Policies />
        </div>

        <NearbyStays />
      </main>

      {photoTourOpen && (
        <PhotoTour
          onClose={closePhotoTour}
          onOpenLightbox={openLightboxByCategory}
          initialCategoryId={photoTourCategoryId}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={closeLightbox} onNavigate={setLightboxIndex} />
      )}

      {amenitiesModalOpen && <AmenitiesModal onClose={() => setAmenitiesModalOpen(false)} />}
    </div>
  );
}
