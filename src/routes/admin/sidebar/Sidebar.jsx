import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import logoutImg from "../../../assets/admin/log_out.png";
import "./Sidebar.css";
import { useState } from "react";
import ModalBar from "./ModalBar";
import { toast, ToastContainer } from "react-toastify";
function Sidebar() {
  const [openModal, setOpenModal] = useState(false);
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
    <div className="admin__sidebar">
      <ToastContainer />
      {openModal && <ModalBar setOpenModal={setOpenModal} />}
      <div className="sidebar__logo">
        <div></div>
        <Link to={"/"}>Frosh</Link>
      </div>
      <span>Menu</span>
      <div className="sidebar__links">
        <NavLink to={"/admin/foydalanuvchilar"}>Foydalanuvchilar</NavLink>
        <NavLink to={"/admin/e'lonlar"}>E’lonlar</NavLink>
        <NavLink to={"/admin/tushum"}>Tushum</NavLink>
        <NavLink to={"/admin/rassilka"}>Sms rassilka</NavLink>
      </div>
      <div className="navbar__btns">
        <button
          onClick={() => setOpenModal(!openModal)}
          className="modalBar__btn"
        >
          {!openModal ? <HiBars3 /> : <MdClose />}
        </button>
        <img
          className="logoutImg"
          onClick={logout}
          src={logoutImg}
          alt="logout"
          title="logout"
        />
      </div>
    </div>
  );
}

export default Sidebar;
