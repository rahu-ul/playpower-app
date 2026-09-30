import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './Description.css';

export default function Description() {
  const [expanded, setExpanded] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const { description } = listingInfo;

  return (
    <div className="description">
      <div className="highlight-row description-checkin">
        <span className="description-checkin-icon" aria-hidden="true">
          📄
        </span>
        <div>
          <strong>Self check-in</strong>
          <p>You can check in with the building staff.</p>
        </div>
      </div>

      {description.translated && (
        <div className="description-translate-banner">
          <span>Some info has been automatically translated.</span>{' '}
          <button type="button" onClick={() => setShowOriginal((s) => !s)}>
            {showOriginal ? 'Show translation' : 'Show original'}
          </button>
        </div>
      )}

      <p className={'description-text' + (expanded ? '' : ' description-text--clamped')}>
        {description.text}
      </p>
      <button type="button" className="description-toggle" onClick={() => setExpanded((e) => !e)}>
        {expanded ? 'Show less' : 'Show more'}
        {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
    </div>
  );
}
