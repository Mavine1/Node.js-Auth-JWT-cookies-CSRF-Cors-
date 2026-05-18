import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

interface User {
  name: string;
  email: string;
  role: string;
}

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name}!</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}