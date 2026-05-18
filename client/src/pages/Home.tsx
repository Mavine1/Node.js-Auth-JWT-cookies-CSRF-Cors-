import { Link } from "react-router-dom";

// Simple reusable SVG icons
const LockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.23858 2 7 4.23858 7 7V9H6C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9H17V7C17 4.23858 14.7614 2 12 2Z" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" fill="white"/>
    <path d="M12 15V17" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="15" r="1" fill="#4a7c2d" stroke="white" strokeWidth="0.5"/>
    <path d="M9 9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9H9Z" stroke="#4a7c2d" strokeWidth="1.5" fill="white"/>
  </svg>
);

const CookieIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#4a7c2d" strokeWidth="1.5" fill="white"/>
    <circle cx="9" cy="9" r="1.2" fill="#4a7c2d"/>
    <circle cx="15" cy="10" r="1" fill="#4a7c2d"/>
    <circle cx="12" cy="15" r="1.4" fill="#4a7c2d"/>
    <path d="M8 16L16 8" stroke="#4a7c2d" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L5 6V11C5 16.5 12 21 12 21C12 21 19 16.5 19 11V6L12 3Z" stroke="#4a7c2d" strokeWidth="1.5" fill="white" strokeLinejoin="round"/>
    <path d="M12 8V12M12 16H12.01" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SpeedIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3L16 7L13 11" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3L5 7L8 11" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13L9 17L12 21" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="11" r="1.5" fill="#4a7c2d" stroke="white"/>
  </svg>
);

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="badge">
          <span className="badge-dot"></span>
          Secure & Modern
        </div>
        <h1>
          Welcome to <span className="accent">AuthFlow</span>
        </h1>
        <p className="subtitle">
          A lightweight, full‑stack authentication boilerplate with JWT,
          HTTP‑only cookies, and industry‑standard security – ready to ship.
        </p>
        <div className="cta-group">
          <Link to="/register" className="btn btn-primary">
            Create Account
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Sign In
          </Link>
        </div>
        <div className="trust-badges">
          <span>✓ JWT Tokens</span>
          <span>✓ HTTP‑only Cookies</span>
          <span>✓ bcrypt Hashing</span>
          <span>✓ Rate Limiting</span>
        </div>
      </section>

      {/* Feature Highlights – SVG icons, no emojis */}
      <section className="features">
        <h2>Everything you need</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon"><LockIcon /></div>
            <h3>JWT Auth</h3>
            <p>Stateless, signed tokens with refresh rotation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><CookieIcon /></div>
            <h3>Secure Cookies</h3>
            <p>HttpOnly, SameSite, Secure – XSS/CSRF resistant.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldIcon /></div>
            <h3>Helmet.js</h3>
            <p>Security headers hardened by default.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><SpeedIcon /></div>
            <h3>Rate Limiting</h3>
            <p>Brute‑force protection on login/register.</p>
          </div>
        </div>
      </section>

      {/* Footer – no navigation links */}
      <footer className="footer">
        <span>⬡ AuthFlow</span>
        <span>Express · React · MongoDB</span>
      </footer>
    </div>
  );
}