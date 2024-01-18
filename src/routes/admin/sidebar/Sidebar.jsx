import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import logoutImg from "../../../assets/admin/log_out.png";
import "./Sidebar.css";
import { useState } from "react";
import ModalBar from "./ModalBar";
function Sidebar({ logout }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="admin__sidebar">
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
