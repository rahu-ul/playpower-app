import { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Key,
  MessageSquare,
  Map,
  Tag,
} from 'lucide-react';
import { listingInfo } from '../data/listing';
import './Reviews.css';

const CATEGORY_ICONS = {
  spray: Sparkles,
  check: CheckCircle2,
  key: Key,
  message: MessageSquare,
  map: Map,
  tag: Tag,
};

function LaurelLeft() {
  return (
    <svg width="44" height="68" viewBox="0 0 48 72" fill="#333333" aria-hidden="true" className="reviews-laurel">
      <path d="M42 66c-12-6-24-18-28-36C10 14 18 4 18 4s-4 12 1 26c4 12 14 22 23 36z" opacity="0.85" />
      <path d="M30 18c-6-2-12 0-14 4s0 10 6 12 12 0 14-4-1-10-6-12z" opacity="0.95" />
      <path d="M22 34c-6-1-11 2-12 7s3 9 9 10 11-2 12-7-3-9-9-10z" opacity="0.95" />
      <path d="M18 52c-5 0-9 4-9 9s4 8 9 8 9-4 9-9-4-8-9-8z" opacity="0.95" />
      <path d="M38 6c-5-3-11-2-14 2s-1 10 4 13 11 2 14-2 1-10-4-13z" opacity="0.95" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg width="44" height="68" viewBox="0 0 48 72" fill="#333333" aria-hidden="true" className="reviews-laurel" style={{ transform: 'scaleX(-1)' }}>
      <path d="M42 66c-12-6-24-18-28-36C10 14 18 4 18 4s-4 12 1 26c4 12 14 22 23 36z" opacity="0.85" />
      <path d="M30 18c-6-2-12 0-14 4s0 10 6 12 12 0 14-4-1-10-6-12z" opacity="0.95" />
      <path d="M22 34c-6-1-11 2-12 7s3 9 9 10 11-2 12-7-3-9-9-10z" opacity="0.95" />
      <path d="M18 52c-5 0-9 4-9 9s4 8 9 8 9-4 9-9-4-8-9-8z" opacity="0.95" />
      <path d="M38 6c-5-3-11-2-14 2s-1 10 4 13 11 2 14-2 1-10-4-13z" opacity="0.95" />
    </svg>
  );
}

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { rating, reviewCount, ratingBreakdown, reviewTopics, reviews } = listingInfo;

  const filteredReviews = selectedTopic
    ? reviews.filter((r) => r.text.toLowerCase().includes(selectedTopic.toLowerCase()))
    : reviews;

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  function toggleReview(i) {
    setExpandedReviews((prev) => ({ ...prev, [i]: !prev[i] }));
  }

  return (
    <section className="reviews" id="reviews" aria-label="Guest reviews">
      <div className="reviews-hero">
        <div className="reviews-hero-score">
          <LaurelLeft />
          <span className="reviews-hero-number">{rating.toFixed(2)}</span>
          <LaurelRight />
        </div>
        <h2 className="reviews-hero-title">Guest favourite</h2>
        <p className="reviews-hero-subtitle">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a href="#how-reviews-work" className="reviews-how-it-works">
          How reviews work
        </a>
      </div>

      <div className="reviews-breakdown-grid">
        <div className="reviews-breakdown-overall">
          <span className="reviews-col-label">Overall rating</span>
          <div className="reviews-bar-list">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="reviews-bar-item">
                <span>{star}</span>
                <div className="reviews-bar-track">
                  <div
                    className="reviews-bar-fill"
                    style={{ width: star === 5 ? '92%' : star === 4 ? '8%' : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {ratingBreakdown.map((item) => {
          const IconComponent = CATEGORY_ICONS[item.icon] || Sparkles;
          return (
            <div key={item.label} className="reviews-breakdown-col">
              <span className="reviews-col-label">{item.label}</span>
              <span className="reviews-col-value">{item.value.toFixed(1)}</span>
              <div className="reviews-col-icon" aria-hidden="true">
                <IconComponent size={24} strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="reviews-topics-strip" role="toolbar" aria-label="Review topics">
        {reviewTopics.map((t) => (
          <button
            type="button"
            key={t.label}
            className={
              'reviews-topic-pill' + (selectedTopic === t.label ? ' reviews-topic-pill--active' : '')
            }
            onClick={() => setSelectedTopic(selectedTopic === t.label ? null : t.label)}
            aria-pressed={selectedTopic === t.label}
          >
            <span aria-hidden="true">{t.emoji}</span>
            <span>{t.label}</span>
            <span className="reviews-topic-count">{t.count}</span>
          </button>
        ))}
      </div>

      <div className="reviews-grid">
        {visibleReviews.map((r, i) => {
          const isLong = r.text.length > 180;
          const expanded = expandedReviews[i];
          return (
            <article className="review-card" key={i}>
              <div className="review-card-header">
                <div className="review-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h3 className="review-author">{r.name}</h3>
                  <p className="review-tenure">{r.tenure}</p>
                </div>
              </div>
              <div className="review-meta">
                <span className="review-stars" aria-label={`${r.rating} out of 5 stars`}>
                  {'★'.repeat(r.rating)}
                </span>
                <span className="review-meta-dot">·</span>
                <span className="review-date">{r.date}</span>
              </div>
              <p className={'review-text' + (isLong && !expanded ? ' review-text--clamped' : '')}>
                {r.text}
              </p>
              {isLong && (
                <button
                  type="button"
                  className="review-toggle"
                  onClick={() => toggleReview(i)}
                  aria-label={expanded ? `Show less review by ${r.name}` : `Show more review by ${r.name}`}
                >
                  {expanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </article>
          );
        })}
      </div>

      {!showAll && filteredReviews.length > 6 && (
        <button
          type="button"
          className="reviews-show-all"
          onClick={() => setShowAll(true)}
        >
          Show all {reviewCount} reviews
        </button>
      )}
    </section>
  );
}
