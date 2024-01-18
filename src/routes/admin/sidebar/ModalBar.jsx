import { NavLink } from "react-router-dom";
import "./ModalBar.css";
function ModalBar() {
  return (
    <div className="modalBar">
      <NavLink to={"/admin/foydalanuvchilar"}>Foydalanuvchilar</NavLink>
      <NavLink to={"/admin/e'lonlar"}>E’lonlar</NavLink>
      <NavLink to={"/admin/tushum"}>Tushum</NavLink>
      <NavLink to={"/admin/rassilka"}>Sms rassilka</NavLink>
    </div>
  );
}

export default ModalBar;
