import { Outlet, Link } from "react-router-dom";
import appleLogo from "../../assets/apple.png";
import "../AramexDetailsPage/AramexDetails.css";


function AppleDetails() {
  return (
    <div className="aramex-details">

      <div className="aramex-header">
        
        <div className="aramex-header-left">
          
          <div className="aramex-logo-box">
            <img
              src={appleLogo}
              alt="Apple Company Logo"
              className="apple-logo"
            />
          </div>

          <div className="aramex-text">
            <h1>Apple</h1>
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

export default AppleDetails;
