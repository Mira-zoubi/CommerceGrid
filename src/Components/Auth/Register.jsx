import { Link } from "react-router-dom";
import { useState } from "react";

import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="register-layout">

  
      <div className="register-left">

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
              Build Your <br />
              <span>Inventory Empire</span>
            </h1>
            <p>
              A premium platform to manage products, orders, and growth —
              built exclusively for beauty professionals.
            </p>
          </div>

        
          <div className="features">
            {[
              "10,000+ curated beauty products",
              "Luxury & global brand partnerships",
              "Smart inventory & analytics tools",
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">✦</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



          <div className="form-header">
            <h3>Create Account</h3>
            <p>Start selling smarter, not harder</p>
          </div>


            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>

            <button type="submit" className="submit-btn">
              Register →
            </button>
          </form>

          <p className="signin-text">

          </p>
        </div>
      </div>
    </div>
  );
}


