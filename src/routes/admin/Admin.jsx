import "./Admin.css";
import Sidebar from "./sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import logoutImg from "../../assets/admin/log_out.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Admin() {
  let navigate = useNavigate();
  function logout() {
    let confirmation = window.confirm("Do you really want to log out?");
    if (confirmation) {
      localStorage.removeItem("admin");
      toast.success("Tizimdan muvaffaqiyatli chiqildi", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
      });
      setTimeout(() => navigate("/adminlogin"), 1500);
    }
  }
  return (
    <div className="admin">
      <ToastContainer />
      <Sidebar />
      <img
        onClick={logout}
        className="admin__logout"
        src={logoutImg}
        alt="logout"
        title="logout"
      />
      <Outlet />
    </div>
  );
}

export default Admin;
