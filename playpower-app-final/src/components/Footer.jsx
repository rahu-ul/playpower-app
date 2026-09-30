import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footer-inner">
        <div className="footer-columns">
          <div>
            <h4>Support</h4>
            <a href="#help">Help Centre</a>
            <a href="#safety">Safety information</a>
            <a href="#cancellation">Cancellation options</a>
          </div>
          <div>
            <h4>Hosting</h4>
            <a href="#host">Try hosting</a>
            <a href="#resources">Hosting resources</a>
          </div>
          <div>
            <h4>Airbnb</h4>
            <a href="#newsroom">Newsroom</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 PlayPower reference build. Recreated for evaluation purposes.</span>
        </div>
      </div>
    </footer>
  );
}
