import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);

    if (data.user.role === "owner") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-layout">


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
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">✦</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

 
     <div className="login-right">
        <div className="form-wrapper">
          <div className="form-header">
            <h3>Sign In</h3>
            <p>Access your vendor dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
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
          </form>

          <p className="signin-text">
            Don’t have an account? <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;