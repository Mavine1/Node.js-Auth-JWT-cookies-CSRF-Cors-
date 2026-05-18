import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="badge">
          <span className="badge-dot" /> ✨ Secure & Modern
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

      {/* Simple feature highlights */}
      <section className="features">
        <h2>Everything you need</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="emoji">🔐</div>
            <h3>JWT Auth</h3>
            <p>Stateless, signed tokens with refresh rotation.</p>
          </div>
          <div className="feature-card">
            <div className="emoji">🍪</div>
            <h3>Secure Cookies</h3>
            <p>HttpOnly, SameSite, Secure – XSS/CSRF resistant.</p>
          </div>
          <div className="feature-card">
            <div className="emoji">🛡️</div>
            <h3>Helmet.js</h3>
            <p>Security headers hardened by default.</p>
          </div>
          <div className="feature-card">
            <div className="emoji">⚡</div>
            <h3>Rate Limiting</h3>
            <p>Brute‑force protection on login/register.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>⬡ AuthFlow</span>
        <span>Express · React · MongoDB</span>
      </footer>
    </div>
  );
}