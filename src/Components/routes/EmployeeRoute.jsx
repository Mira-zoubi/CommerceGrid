import { Navigate } from "react-router-dom";

const EmployeeRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but NOT employee
  if (role !== "employee") {
    return <Navigate to="/" replace />; // dashboard
  }

  // Employee → allow access
  return children;
};

export default EmployeeRoute;
