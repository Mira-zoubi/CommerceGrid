import { useContext } from "react";
import { PagesContext } from "../PagesContext";
import { Link } from "react-router-dom";
import "./TablesStyle.css";

function RecentOrdersTable() {
  const { RecentOrders } = useContext(PagesContext);

  return (
    <div className="TableContainer AnimatedBorder ">
      <div className="Header">
        <div>
          <h2>Recent Orders</h2>
          <p className="subtitle">Latest transactions</p>
        </div>
      <Link to="/Orders" className="viewAll">
      View All →
      </Link>
      </div>

      <div className="List">
        {RecentOrders.map((item) => (
          <div key={item.id} className="Row">
            <div className="Left">
             

              <p className="Title">
                {item.title} × {item.quantity}
              </p>
              <p className="Store">
                {item.store}
              </p>
            </div>

            <div className="Price">
              ${item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrdersTable;