import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

interface User {
  name: string;
  email: string;
  role: string;
}

// SVG icons
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" stroke="#4a7c2d" strokeWidth="1.5" fill="white"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
    <path d="M22 6L12 13L2 6" stroke="#4a7c2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RoleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4a7c2d" strokeWidth="1.5" strokeLinejoin="round" fill="white"/>
    <path d="M2 17L12 22L22 17" stroke="#4a7c2d" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="#4a7c2d" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 17L21 12L16 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [navigate]);

  async function handleLogout() {
    try {
      await api.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your account...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <span className="dashboard-logo">⬡</span>
          <h2>Welcome back, {user?.name}!</h2>
          <p className="dashboard-subtitle">Your account overview</p>
        </div>

        <div className="dashboard-info">
          <div className="info-row">
            <div className="info-icon"><UserIcon /></div>
            <div className="info-content">
              <span className="info-label">Full name</span>
              <span className="info-value">{user?.name}</span>
            </div>
          </div>

          <div className="info-row">
            <div className="info-icon"><EmailIcon /></div>
            <div className="info-content">
              <span className="info-label">Email address</span>
              <span className="info-value">{user?.email}</span>
            </div>
          </div>

          <div className="info-row">
            <div className="info-icon"><RoleIcon /></div>
            <div className="info-content">
              <span className="info-label">Role</span>
              <span className="info-value role-badge">{user?.role || "User"}</span>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-btn">
          <LogoutIcon />
          Sign Out
        </button>
      </div>
    </div>
  );
}