import { Outlet, Link } from "react-router-dom";
import aramexLogo from "../../assets/aramex.png";
import "./AramexDetails.css";

function AramexDetails() {
  return (
    <div className="aramex-details">

      <div className="aramex-header">
        
        <div className="aramex-header-left">
          
          <div className="aramex-logo-box">
            <img
              src={aramexLogo}
              alt="Aramex Company Logo"
              className="aramex-logo"
            />
          </div>

          <div className="aramex-text">
            <h1>Aramex</h1>
            <p>Logistics and Delivery Services</p>
          </div>
        </div>

        <Link to="ViewProducts" className="aramex-view-btn">
          View Products
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default AramexDetails;
