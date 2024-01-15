import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AdminLogin from "../routes/admin/adminLogin/AdminLogin";

export const AdminController = () => {
  const location = useLocation();
  let admin = localStorage.getItem("admin");
  if (admin.length) return <Outlet />;
  else return <Navigate to={"/adminlogin"} state={{ from: location }} />;
};
