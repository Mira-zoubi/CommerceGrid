import { useContext } from "react";
import { PagesContext } from "../PagesContext";
import { Link } from "react-router-dom";
import "./RecentOrdersTable.css";

function RecentOrdersTable() {
  const { RecentOrders } = useContext(PagesContext);

  return (
    <div className="RecentOrdersTableContainer AnimatedBorder ">
      <div className="RecentOrdersHeader">
        <div>
          <h2>Recent Orders</h2>
          <p className="subtitle">Latest transactions</p>
        </div>
      <Link to="/Orders" className="viewAll">
      View All →
      </Link>
      </div>

      <div className="OrdersList">
        {RecentOrders.map((item) => (
          <div key={item.id} className="OrderRow">
            <div className="OrderLeft">
              <div className="OrderId">
                ORD-{item.id}
                <span className={`Status ${item.status}`}>
                  {item.status}
                </span>
              </div>

              <p className="OrderTitle">
                {item.title} × {item.quantity}
              </p>
              <p className="OrderStore">
                {item.store}
              </p>
            </div>

            <div className="OrderPrice">
              ${item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentOrdersTable;