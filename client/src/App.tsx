import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import api from "./api";
import "./App.css";

function Navigation() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await api.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default function App() {
  return (
    <div>
      <h1>Security Course Starter App</h1>

      <Navigation />

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}