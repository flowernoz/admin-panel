import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AdminController } from "./controller/AdminContoller";
import Admin from "./routes/admin/Admin";
import AdminLogin from "./routes/admin/adminLogin/AdminLogin";
import Announcement from "./routes/admin/announcements/Announcement";
import Income from "./routes/admin/income/Income";
import Rassilka from "./routes/admin/rassilka/Rassilka";
import Users from "./routes/admin/users/Users";
let admin = localStorage.getItem("admin");
function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Link to={admin ? "admin" : "/adminlogin"}>Admin-panel</Link>
          }
        />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminController />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/foydalanuvchilar" element={<Users />} />
            <Route path="/admin/e'lonlar" element={<Announcement />} />
            <Route path="/admin/tushum" element={<Income />} />
            <Route path="/admin/rassilka" element={<Rassilka />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
