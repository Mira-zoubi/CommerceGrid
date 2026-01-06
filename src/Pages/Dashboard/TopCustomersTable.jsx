// import { useContext } from "react";
// import { PagesContext } from "../PagesContext";
// import { Link } from "react-router-dom";

// function TopCustomersTable(){

//     const { CustomersArray}=useContext(PagesContext);

//     return (
//     <div className="RecentOrdersTableContainer">
//       <div className="RecentOrdersHeader">
//         <div>
//           <h2> Top Customers</h2>
//           <p className="subtitle">Latest Customers</p>
//         </div>
//       <Link to="/Customers" className="viewAll">
//       View All →
//       </Link>
//       </div>

//       <div className="OrdersList">
//         {CustomersArray.map((item) => (
//           <div key={item.id} className="OrderRow">
//             <div className="OrderLeft">
//               <div className="OrderId">
//                 ORD-{item.id}
               
//               </div>

//               <p className="OrderTitle">
//                 {item.name.first} × {item.gender}
//               </p>
//               <p className="OrderStore">
//                 <img  src={item.picture.thumbnail} alt="customer image"/>
//               </p>
//             </div>

            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default TopCustomersTable;