import { useState } from 'react';
import { Search, Plus, Minus, ChevronRight, Home } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './Location.css';

export default function Location() {
  const [zoom, setZoom] = useState(1);
  const { location } = listingInfo;

  function handleZoomIn() {
    setZoom((z) => Math.min(2, +(z + 0.3).toFixed(1)));
  }

  function handleZoomOut() {
    setZoom((z) => Math.max(0.8, +(z - 0.3).toFixed(1)));
  }

  return (
    <section className="location" id="location" aria-label="Location and neighborhood">
      <h2>Where you&apos;ll be</h2>
      <p className="location-heading">{location.heading}</p>

      <div className="location-map" role="region" aria-label="Interactive map of Candolim, Goa">
        <div
          className="location-map-canvas"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: '55% 50%',
            transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)',
          }}
        >
          <svg viewBox="0 0 900 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="location-map-svg">
            {/* Base land & terrain */}
            <rect width="900" height="480" fill="#E8ECE9" />

            {/* Arabian Sea / Coastline on West */}
            <path
              d="M0,0 L240,0 C220,120 260,200 180,320 C140,380 160,440 130,480 L0,480 Z"
              fill="#AADAFF"
            />
            <path
              d="M240,0 C220,120 260,200 180,320 C140,380 160,440 130,480 L140,480 C170,440 150,380 190,320 C270,200 230,120 250,0 Z"
              fill="#F9F6EE"
              opacity="0.8"
            />

            {/* Nerul River branch */}
            <path
              d="M900,160 Q650,180 520,300 Q420,400 380,480 L420,480 Q450,410 550,320 Q680,210 900,190 Z"
              fill="#BFE1FA"
            />

            {/* Green parks & nature reserves */}
            <rect x="300" y="40" width="160" height="110" rx="20" fill="#D2E8D4" opacity="0.8" />
            <rect x="620" y="60" width="200" height="140" rx="30" fill="#D2E8D4" opacity="0.8" />
            <circle cx="340" cy="380" r="60" fill="#D2E8D4" opacity="0.8" />

            {/* Road network */}
            {/* Main Fort Aguada Highway */}
            <path
              d="M260,0 Q240,140 280,260 Q320,380 300,480"
              stroke="#FFFFFF"
              strokeWidth="12"
              fill="none"
            />
            <path
              d="M260,0 Q240,140 280,260 Q320,380 300,480"
              stroke="#FED085"
              strokeWidth="6"
              fill="none"
            />

            {/* Candolim Main Cross Road */}
            <path
              d="M270,200 L800,140"
              stroke="#FFFFFF"
              strokeWidth="10"
              fill="none"
            />
            <path
              d="M270,200 L800,140"
              stroke="#FCE3A1"
              strokeWidth="5"
              fill="none"
            />

            {/* Secondary roads */}
            <path d="M480,0 L520,480" stroke="#FFFFFF" strokeWidth="6" fill="none" />
            <path d="M280,320 L750,380" stroke="#FFFFFF" strokeWidth="6" fill="none" />
            <path d="M640,0 L620,480" stroke="#FFFFFF" strokeWidth="6" fill="none" />
            <path d="M350,80 L700,80" stroke="#FFFFFF" strokeWidth="5" fill="none" />

            {/* Local streets grid */}
            {[100, 180, 240, 360, 420].map((y) => (
              <line key={`street-h-${y}`} x1="300" y1={y} x2="850" y2={y} stroke="#FFFFFF" strokeWidth="3" />
            ))}
            {[380, 440, 560, 700, 780].map((x) => (
              <line key={`street-v-${x}`} x1={x} y1="40" x2={x} y2="440" stroke="#FFFFFF" strokeWidth="3" />
            ))}

            {/* Road & Area Labels */}
            <text x="70" y="240" fill="#4B7E9F" fontSize="13" fontWeight="700" letterSpacing="2">ARABIAN SEA</text>
            <text x="185" y="160" fill="#717171" fontSize="11" fontWeight="600" transform="rotate(75, 185, 160)">Candolim Beach</text>
            <text x="320" y="220" fill="#484848" fontSize="12" fontWeight="700">Fort Aguada Rd</text>
            <text x="560" y="130" fill="#484848" fontSize="12" fontWeight="600">Candolim Market</text>
            <text x="680" y="280" fill="#484848" fontSize="12" fontWeight="600">Nerul</text>

            {/* Pulsing listing area aura */}
            <circle cx="500" cy="230" r="60" fill="#FF385C" fillOpacity="0.15" />
            <circle cx="500" cy="230" r="36" fill="#FF385C" fillOpacity="0.25" />
          </svg>

          {/* Central Property Pin */}
          <div className="location-pin-wrapper">
            <div className="location-pin-circle">
              <Home size={22} color="#fff" strokeWidth={2.2} />
            </div>
            <div className="location-pin-label">Exact location after booking</div>
          </div>
        </div>

        {/* Map Control Buttons */}
        <div className="location-map-controls">
          <button type="button" onClick={handleZoomIn} aria-label="Zoom in on map">
            <Plus size={18} />
          </button>
          <button type="button" onClick={handleZoomOut} aria-label="Zoom out on map">
            <Minus size={18} />
          </button>
        </div>

        <div className="location-map-search" aria-hidden="true">
          <Search size={16} />
        </div>
      </div>

      <p className="location-notice">{location.exactLocationNotice}</p>

      <div className="location-neighbourhood">
        <h3>Neighbourhood highlights</h3>
        <p>{location.neighbourhoodHighlights}</p>
        <button type="button" className="location-show-more">
          Show more <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
