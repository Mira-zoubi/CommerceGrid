import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // ⛔ prevent page reload

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      // ✅ Redirect after login
      navigate("/");
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-layout">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="gradient-bg" />
        <div className="glow glow-top" />
        <div className="glow glow-bottom" />

        <div className="left-content">
          <div className="brand">
            <h2>
              Mira<span>Panel</span>
            </h2>
            <p>Vendor Hub</p>
            <span className="badge">✨ Trusted by 10,000+ Vendors</span>
          </div>

          <div className="hero">
            <h1>
              Welcome Back <br />
              <span>Vendor</span>
            </h1>
            <p>
              Log in to manage your inventory, track orders,
              and grow your business smarter.
            </p>
          </div>

          <div className="features">
            {[
              "Real-time inventory insights",
              "Order & revenue tracking",
              "Premium vendor dashboard",
            ].map((item) => (
              <div key={item} className="feature-card">
                <div className="feature-icon">✦</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="form-wrapper">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-header">
              <h3>Sign In</h3>
              <p>Access your vendor dashboard</p>
            </div>

            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Login →
            </button>

            <p className="signin-text">
              Don’t have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
