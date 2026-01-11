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
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../Auth/Cart";

import ViewAmazonProducts from "../../Pages/AmazonDetailsPage/ViewAmazonProducts";
import DefaultAmazonPage from "../../Pages/AmazonDetailsPage/DefaultAmazonPage";

import DefaultApplePage from "../../Pages/AppleDetailsPage/DefaultApplePage";
import ViewAppleProducts from "../../Pages/AppleDetailsPage/ViewAppleProducts";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../Auth/Cart";

import EmployeeRoute from "./EmployeeRoute";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      /* ================= SHARED ================= */
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "login",
        element: <Login />,
      },
       {
        path:"/Login",
        element: <Login/>
      },
       {
        path:"/Register",
        element: <Register/>
      },
       {
        path:"/Cart",
        element: <Cart/>
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      /* ================= EMPLOYEE ONLY ================= */

      {
        path: "AramexDetails",
        element: (
          <EmployeeRoute>
            <AramexDetails />
          </EmployeeRoute>
        ),
        children: [
          {
            index: true,
            element: <DefaultAramexPage />,
          },
          {
            path: "ViewProducts",
            element: <ViewAramexProducts />,
          },
        ],
      },

      {
        path: "AppleDetails",
        element: (
          <EmployeeRoute>
            <AppleDetails />
          </EmployeeRoute>
        ),
        children: [
          {
            index: true,
            element: <DefaultApplePage />,
          },
          {
            path: "ViewProducts",
            element: <ViewAppleProducts />,
          },
        ],
      },

      {
        path: "AmazonDetails",
        element: (
          <EmployeeRoute>
            <AmazonDetails />
          </EmployeeRoute>
        ),
        children: [
          {
            index: true,
            element: <DefaultAmazonPage />,
          },
          {
            path: "ViewProducts",
            element: <ViewAmazonProducts />,
          },
        ],
      },

];

export default routes;
