import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

// SVG icons (same as before)
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
    <path d="M22 6L12 13L2 6" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.23858 2 7 4.23858 7 7V9H6C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9H17V7C17 4.23858 14.7614 2 12 2Z" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" fill="white"/>
    <circle cx="12" cy="15" r="1" fill="#4a7c2d" stroke="white" strokeWidth="0.5"/>
    <path d="M12 15V17" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await api.post("/auth/login", { email, password });
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 800);
    } catch {
      setMessage("Invalid email or password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <span className="login-logo">⬡</span>
          <h2>Welcome back</h2>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-icon"><EmailIcon /></div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="input-group">
            <div className="input-icon"><LockIcon /></div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {message && (
          <div className={`login-message ${message.includes("successful") ? "success" : "error"}`}>
            {message}
          </div>
        )}

        <div className="login-footer">
          <span>Don't have an account?</span>
          <Link to="/register" className="register-link">Create account</Link>
        </div>
      </div>
    </div>
  );
}