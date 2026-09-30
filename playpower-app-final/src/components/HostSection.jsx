import { Cake, GraduationCap, ShieldCheck, Star } from 'lucide-react';
import { listingInfo } from '../data/listing';
import './HostSection.css';

export default function HostSection() {
  const { host } = listingInfo;

  return (
    <section className="host-section" aria-label="Host profile">
      <h2>Meet your host</h2>
      <div className="host-section-content">
        <div className="host-card">
          <div className="host-card-profile">
            <div className="host-card-identity">
              <div className="host-card-avatar" aria-hidden="true">
                <span>MIRASHYA</span>
                <small>HOMES</small>
                <div className="host-card-badge" aria-label="Superhost badge">
                  <Star size={12} fill="#fff" color="#fff" />
                </div>
              </div>
              <div className="host-card-name-block">
                <h3 className="host-card-name">{host.name}</h3>
                <span className="host-card-subtitle">Host</span>
              </div>
            </div>

            <div className="host-card-stats-grid">
              <div className="host-card-stat">
                <strong>{host.reviewCount.toLocaleString('en-IN')}</strong>
                <span>Reviews</span>
              </div>
              <div className="host-card-stat">
                <strong>{host.rating.toFixed(2)}★</strong>
                <span>Rating</span>
              </div>
              <div className="host-card-stat">
                <strong>{host.yearsHosting}</strong>
                <span>Years hosting</span>
              </div>
            </div>
          </div>
        </div>

        <div className="host-section-details">
          <div className="host-cohosts-section">
            <h4>Co-hosts</h4>
            <div className="host-cohosts">
              {host.coHosts.map((name) => (
                <div className="host-cohost" key={name}>
                  <div className="host-cohost-avatar" aria-hidden="true">
                    {name.charAt(0)}
                  </div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="host-response-block">
            <h4>Host details</h4>
            <p>Response rate: {host.responseRate}</p>
            <p>Responds {host.responseTime}</p>
          </div>

          <button type="button" className="host-message-btn">
            Message host
          </button>

          <div className="host-security-note">
            <ShieldCheck size={24} strokeWidth={1.5} />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>

      <div className="host-section-facts">
        <div className="host-info-item">
          <Cake size={24} strokeWidth={1.5} />
          <span>{host.bornIn}</span>
        </div>
        <div className="host-info-item">
          <GraduationCap size={24} strokeWidth={1.5} />
          <span>Where I went to school: {host.education}</span>
        </div>
      </div>
    </section>
  );
}
