import { useContext } from "react";
import { PagesContext } from "../PagesContext";
import { Link } from "react-router-dom";
import "./TablesStyle.css";

function TopCustomersTable() {
  const { CustomersArray} = useContext(PagesContext);

  return (
    <div className="TableContainer AnimatedBorder">
      <div className="Header">
        <div>
          <h2>Top Customers</h2>
          <p className="subtitle">Top company customers</p>
        </div>

        <Link to="/Customers" className="viewAll">
          View All →
        </Link>
      </div>

      <div className="List">
        {CustomersArray.map((item) => (
          <div key={item.login.uuid} className="Row">
            
            <div className="Left">
              <p className="Title">
                {item.name.first} {item.name.last}
              </p>

              <p className="Store">
                {item.location.city}, {item.location.country}
              </p>
            </div>

            <img
              src={item.picture.thumbnail}
              alt="customer"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%"
              }}
            />
          </div>
        )).slice(0,4)}
      </div>
    </div>
  );
}

export default TopCustomersTable;