import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .home-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            padding: 2rem;
          }

          .auth-card {
            max-width: 1200px;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(2px);
            border-radius: 2rem;
            box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25), 0 8px 18px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            transition: transform 0.2s ease;
          }

          .card-content {
            padding: 3rem 2.5rem;
          }

          @media (max-width: 768px) {
            .card-content {
              padding: 2rem 1.5rem;
            }
          }

          .hero-section {
            text-align: center;
            margin-bottom: 2.5rem;
          }

          .logo-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #2c5e2e20;
            padding: 0.5rem 1rem;
            border-radius: 100px;
            margin-bottom: 1.5rem;
            gap: 0.5rem;
          }

          .logo-badge span {
            font-weight: 600;
            color: #1b4d1f;
            letter-spacing: 0.3px;
          }

          .node-icon {
            font-size: 1.4rem;
          }

          h1 {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #1f5e2a, #3c9e48);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }

          @media (max-width: 640px) {
            h1 {
              font-size: 2rem;
            }
          }

          .tagline {
            font-size: 1.2rem;
            color: #2d4a2e;
            max-width: 650px;
            margin: 0 auto;
            line-height: 1.5;
            font-weight: 500;
          }

          .description {
            background: #f4fbf4;
            border-left: 5px solid #3c9e48;
            padding: 1.2rem 1.8rem;
            border-radius: 1.2rem;
            margin: 2rem 0;
            color: #1e3a24;
            font-size: 1rem;
            line-height: 1.6;
            box-shadow: 0 1px 2px rgba(0,0,0,0.03);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin: 2.5rem 0;
          }

          .feature-item {
            background: #fefefe;
            padding: 1.2rem 1rem;
            border-radius: 1.2rem;
            box-shadow: 0 4px 12px rgba(0, 32, 0, 0.05);
            transition: all 0.2s ease;
            border: 1px solid #daf0dc;
          }

          .feature-item:hover {
            transform: translateY(-3px);
            border-color: #8bc34a;
            box-shadow: 0 12px 20px -12px rgba(60, 158, 72, 0.2);
          }

          .feature-icon {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            display: inline-block;
          }

          .feature-item h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1e4620;
            margin-bottom: 0.5rem;
          }

          .feature-item p {
            font-size: 0.85rem;
            color: #3c5e3a;
            line-height: 1.4;
          }

          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.7rem;
            margin: 2rem 0 1.8rem;
          }

          .tech-badge {
            background: #eef5ea;
            padding: 0.3rem 1rem;
            border-radius: 40px;
            font-size: 0.8rem;
            font-weight: 500;
            color: #246b2e;
            letter-spacing: 0.2px;
            border: 1px solid #b9dcb5;
          }

          .button-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.2rem;
            margin-top: 1rem;
          }

          .btn {
            padding: 0.9rem 2.2rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            border: none;
            font-family: inherit;
          }

          .btn-primary {
            background: #2c7a2e;
            color: white;
            box-shadow: 0 4px 10px rgba(44, 122, 46, 0.25);
          }

          .btn-primary:hover {
            background: #1e5f21;
            transform: scale(1.02);
            box-shadow: 0 8px 18px rgba(44, 122, 46, 0.35);
          }

          .btn-secondary {
            background: transparent;
            color: #2c7a2e;
            border: 2px solid #2c7a2e;
          }

          .btn-secondary:hover {
            background: #e9f5e6;
            transform: scale(1.02);
            border-color: #1e5f21;
            color: #1e5f21;
          }

          hr {
            margin: 1.5rem 0 1rem;
            border: 0;
            height: 1px;
            background: linear-gradient(to right, #cfe9cf, transparent);
          }

          .footer-note {
            text-align: center;
            font-size: 0.8rem;
            color: #578b55;
            margin-top: 1.8rem;
          }

          @media (max-width: 480px) {
            .btn {
              padding: 0.7rem 1.5rem;
              width: 100%;
            }
            .button-group {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}
      </style>

      <div className="home-page">
        <div className="auth-card">
          <div className="card-content">
            <div className="hero-section">
              <div className="logo-badge">
                <span className="node-icon">🌿</span>
                <span>Node.js • JWT • Express</span>
              </div>
              <h1>Node.js Auth <span style={{color:'#2c7a2e'}}>JWT</span> System</h1>
              <p className="tagline">
                Secure, production-ready authentication with JWT & HTTP-only cookies
              </p>
            </div>

            <div className="description">
              <strong>🔐 Production-ready full-stack authentication app</strong> built with Node.js, Express, React, and MongoDB.  
              This project demonstrates industry‑grade patterns: <strong>JWT tokens, HTTP‑only cookies, bcrypt hashing, rate limiting, Helmet security headers</strong> and a clean architecture ready for Cloud Run & Docker.
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h3>JWT + Cookies</h3>
                <p>Secure token storage using HTTP-only cookies, mitigating XSS attacks.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <h3>Security First</h3>
                <p>Helmet, rate limiting, input sanitization & password hashing with bcrypt.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📦</div>
                <h3>Docker Ready</h3>
                <p>Containerized for easy deployment on Google Cloud Run or any platform.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>MVC Architecture</h3>
                <p>Organized codebase with Mongoose models, controllers, and middleware.</p>
              </div>
            </div>

            <div className="tech-stack">
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">MongoDB + Mongoose</span>
              <span className="tech-badge">JWT (jsonwebtoken)</span>
              <span className="tech-badge">bcrypt</span>
              <span className="tech-badge">cookie-parser</span>
              <span className="tech-badge">Helmet.js</span>
              <span className="tech-badge">express-rate-limit</span>
            </div>

            <div className="button-group">
              <Link to="/login" className="btn btn-primary">
                Log in → 
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Create account
              </Link>
            </div>

            <hr />
            <div className="footer-note">
              🌱 Complete authentication flow — register, login, protected routes, logout & session management.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}