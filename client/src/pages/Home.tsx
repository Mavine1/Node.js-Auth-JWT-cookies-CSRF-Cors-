import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Home() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 38; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.4,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 153, 34, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div style={styles.root}>
      {/* Animated canvas background */}
      <canvas ref={particlesRef} style={styles.canvas} />

      {/* Decorative blobs */}
      <div style={styles.blobTopRight} />
      <div style={styles.blobBottomLeft} />

      {/* Nav */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <span style={styles.logoHex}>⬡</span>
          <span style={styles.logoText}>AuthNode</span>
        </div>
        <div style={styles.navLinks}>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#stack" style={styles.navLink}>Stack</a>
          <Link to="/login" style={styles.navCta}>Sign In</Link>
        </div>
      </nav>

      {/* Hero */}
      <main style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          Production-ready · Open Source
        </div>

        <h1 style={styles.h1}>
          Secure Auth,<br />
          <span style={styles.h1Accent}>Node.js Native.</span>
        </h1>

        <p style={styles.subtitle}>
          A full-stack JWT authentication system built with Express, React & MongoDB.
          Battle-tested patterns: HTTP-only cookies, rate limiting, bcrypt hashing,
          and hardened security headers — ready to ship.
        </p>

        <div style={styles.ctaRow}>
          <Link to="/register" style={styles.btnPrimary}>
            Create Account
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 8 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/login" style={styles.btnGhost}>
            Sign In
          </Link>
        </div>

        <div style={styles.trustRow}>
          {["JWT Tokens", "HTTP-only Cookies", "bcrypt Hashing", "Rate Limiting"].map((t) => (
            <span key={t} style={styles.trustPill}>
              <span style={styles.trustCheck}>✓</span> {t}
            </span>
          ))}
        </div>
      </main>

      {/* Features */}
      <section id="features" style={styles.section}>
        <p style={styles.sectionLabel}>What's included</p>
        <h2 style={styles.sectionTitle}>Everything auth needs</h2>
        <div style={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" style={styles.section}>
        <p style={styles.sectionLabel}>Technology stack</p>
        <h2 style={styles.sectionTitle}>Built on proven tools</h2>
        <div style={styles.stackGrid}>
          {stack.map((s) => (
            <div key={s.name} style={styles.stackCard}>
              <span style={styles.stackName}>{s.name}</span>
              <span style={styles.stackRole}>{s.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={styles.ctaBanner}>
        <h2 style={styles.ctaBannerTitle}>Ready to get started?</h2>
        <p style={styles.ctaBannerSub}>Create your account and explore the auth system hands-on.</p>
        <div style={styles.ctaRow}>
          <Link to="/register" style={styles.btnPrimary}>Create Account</Link>
          <Link to="/login" style={styles.btnBannerGhost}>Already have one? Sign In</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={styles.footerLogo}>⬡ AuthNode</span>
        <span style={styles.footerMuted}>Built with Node.js · Express · React · MongoDB</span>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "🔐",
    title: "JWT Authentication",
    desc: "Stateless, signed tokens with configurable expiry. Access tokens + refresh token rotation keep sessions secure.",
  },
  {
    icon: "🍪",
    title: "HTTP-only Cookies",
    desc: "Tokens stored in HTTP-only cookies prevent XSS access. SameSite and Secure flags protect against CSRF.",
  },
  {
    icon: "🔒",
    title: "Password Hashing",
    desc: "bcrypt with configurable salt rounds ensures passwords are never stored in plain text.",
  },
  {
    icon: "🛡️",
    title: "Security Headers",
    desc: "Helmet.js sets Content-Security-Policy, HSTS, X-Frame-Options and more out of the box.",
  },
  {
    icon: "⏱️",
    title: "Rate Limiting",
    desc: "express-rate-limit throttles brute-force attempts on login and registration endpoints.",
  },
  {
    icon: "🐳",
    title: "Docker Ready",
    desc: "Containerized with Docker Compose. Deploy to Google Cloud Run or any container platform in minutes.",
  },
];

const stack = [
  { name: "Express.js", role: "REST API framework" },
  { name: "MongoDB", role: "Database + Mongoose ODM" },
  { name: "JWT", role: "Token-based authentication" },
  { name: "bcrypt", role: "Password hashing" },
  { name: "Helmet", role: "Security headers" },
  { name: "React", role: "Frontend UI" },
  { name: "express-rate-limit", role: "Request throttling" },
  { name: "cookie-parser", role: "Cookie parsing" },
];

const GREEN = {
  50: "#EAF3DE",
  100: "#C0DD97",
  200: "#97C459",
  400: "#639922",
  600: "#3B6D11",
  800: "#27500A",
  900: "#173404",
};

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0d1a07",
    color: "#e8f5d4",
    fontFamily: "'Sora', 'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  blobTopRight: {
    position: "absolute",
    top: "-120px",
    right: "-160px",
    width: "520px",
    height: "520px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,109,17,0.28) 0%, transparent 70%)",
    zIndex: 0,
    pointerEvents: "none",
  },
  blobBottomLeft: {
    position: "absolute",
    bottom: "80px",
    left: "-200px",
    width: "480px",
    height: "480px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,153,34,0.18) 0%, transparent 70%)",
    zIndex: 0,
    pointerEvents: "none",
  },

  /* Nav */
  nav: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 48px",
    borderBottom: `1px solid rgba(99,153,34,0.15)`,
  },
  logo: { display: "flex", alignItems: "center", gap: 10 },
  logoHex: { fontSize: 26, color: GREEN[200], lineHeight: 1 },
  logoText: { fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: GREEN[50] },
  navLinks: { display: "flex", alignItems: "center", gap: 32 },
  navLink: {
    color: GREEN[100],
    textDecoration: "none",
    fontSize: 14,
    opacity: 0.8,
    transition: "opacity .2s",
  },
  navCta: {
    padding: "8px 20px",
    borderRadius: 8,
    border: `1.5px solid ${GREEN[400]}`,
    color: GREEN[200],
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    transition: "background .2s",
  },

  /* Hero */
  hero: {
    position: "relative",
    zIndex: 10,
    maxWidth: 760,
    margin: "0 auto",
    padding: "100px 24px 80px",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(59,109,17,0.25)",
    border: `1px solid rgba(99,153,34,0.35)`,
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: 12,
    color: GREEN[200],
    letterSpacing: "0.04em",
    marginBottom: 32,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: GREEN[200],
    display: "inline-block",
    boxShadow: `0 0 6px ${GREEN[200]}`,
  },
  h1: {
    fontSize: "clamp(42px, 6vw, 72px)",
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    color: GREEN[50],
    margin: "0 0 8px",
  },
  h1Accent: {
    color: GREEN[200],
    fontStyle: "italic",
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 1.7,
    color: "rgba(192,221,151,0.75)",
    maxWidth: 580,
    margin: "24px auto 40px",
  },
  ctaRow: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 32,
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 28px",
    background: GREEN[400],
    color: GREEN[900],
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: "-0.01em",
    border: "none",
    cursor: "pointer",
    transition: "background .2s, transform .15s",
  },
  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 28px",
    background: "transparent",
    color: GREEN[200],
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    border: `1.5px solid rgba(99,153,34,0.45)`,
    transition: "border-color .2s, background .2s",
  },
  btnBannerGhost: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 28px",
    background: "transparent",
    color: GREEN[100],
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    border: `1.5px solid rgba(192,221,151,0.35)`,
  },
  trustRow: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  trustPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: "rgba(192,221,151,0.6)",
    background: "rgba(59,109,17,0.15)",
    border: `1px solid rgba(99,153,34,0.2)`,
    borderRadius: 100,
    padding: "4px 12px",
  },
  trustCheck: { color: GREEN[200], fontWeight: 700 },

  /* Sections */
  section: {
    position: "relative",
    zIndex: 10,
    maxWidth: 1080,
    margin: "0 auto",
    padding: "80px 32px",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: GREEN[400],
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    color: GREEN[50],
    margin: "0 0 48px",
  },

  /* Feature grid */
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  featureCard: {
    background: "rgba(23,52,4,0.6)",
    border: `1px solid rgba(99,153,34,0.2)`,
    borderRadius: 16,
    padding: "28px 28px 24px",
    backdropFilter: "blur(8px)",
    transition: "border-color .2s",
  },
  featureIcon: { fontSize: 28, marginBottom: 16 },
  featureTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: GREEN[100],
    margin: "0 0 10px",
    letterSpacing: "-0.01em",
  },
  featureDesc: {
    fontSize: 14,
    lineHeight: 1.65,
    color: "rgba(192,221,151,0.6)",
    margin: 0,
  },

  /* Stack grid */
  stackGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 12,
  },
  stackCard: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    background: "rgba(23,52,4,0.5)",
    border: `1px solid rgba(99,153,34,0.18)`,
    borderRadius: 12,
    padding: "18px 20px",
  },
  stackName: {
    fontSize: 15,
    fontWeight: 700,
    color: GREEN[200],
    letterSpacing: "-0.01em",
  },
  stackRole: {
    fontSize: 13,
    color: "rgba(192,221,151,0.5)",
  },

  /* CTA Banner */
  ctaBanner: {
    position: "relative",
    zIndex: 10,
    margin: "0 32px 80px",
    maxWidth: 1016,
    marginLeft: "auto",
    marginRight: "auto",
    background: "linear-gradient(135deg, rgba(59,109,17,0.4) 0%, rgba(23,52,4,0.8) 100%)",
    border: `1px solid rgba(99,153,34,0.3)`,
    borderRadius: 24,
    padding: "64px 48px",
    textAlign: "center",
  },
  ctaBannerTitle: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 800,
    color: GREEN[50],
    margin: "0 0 12px",
    letterSpacing: "-0.03em",
  },
  ctaBannerSub: {
    fontSize: 16,
    color: "rgba(192,221,151,0.65)",
    margin: "0 0 36px",
  },

  /* Footer */
  footer: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 48px",
    borderTop: `1px solid rgba(99,153,34,0.12)`,
    flexWrap: "wrap",
    gap: 12,
  },
  footerLogo: { fontSize: 14, fontWeight: 700, color: GREEN[400] },
  footerMuted: { fontSize: 13, color: "rgba(192,221,151,0.35)" },
};