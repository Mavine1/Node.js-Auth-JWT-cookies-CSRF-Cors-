import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Our App</h2>
      <p>Please login or register to continue</p>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <span style={{ margin: "0 10px" }}></span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}