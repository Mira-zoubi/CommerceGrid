import App from "../../App";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Inventory from "../../Pages/Inventory/Inventory";
import Orders from "../../Pages/Orders/Orders";
import Customers from "../../Pages/Customers/Customers";
import AramexDetails from "../../Pages/AramexDetailsPage/AramexDetails";
import AppleDetails from "../../Pages/AppleDetailsPage/AppleDetails";
import AmazonDetails from "../../Pages/AmazonDetailsPage/AmazonDetails";
import ViewAramexProducts from "../../Pages/AramexDetailsPage/ViewAramexProducts";
import DefaultAramexPage from "../../Pages/AramexDetailsPage/DefaultAramexPage";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "inventory",
        element: <Inventory />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "customers",
        element: <Customers />
      },
      {
        path:"/AramexDetails",
        element: <AramexDetails/>,
        children: [
          {
            index:true,
            element:<DefaultAramexPage/>
          },
          {
            path:"ViewProducts",
            element:<ViewAramexProducts/>
          }
        ]
      },
      {
        path:"/AppleDetails",
        element: <AppleDetails/>
      },
      {
        path:"/AmazonDetails",
        element: <AmazonDetails/>
      },
   
    ]
  }
];

export default routes;
