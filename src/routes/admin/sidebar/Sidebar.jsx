import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="admin__sidebar">
      <div className="sidebar__logo">
        <div></div>
        <Link to={"/admin"}>Frosh</Link>
      </div>
      <span>Menu</span>
      <div className="sidebar__links">
        <NavLink to={"/admin/foydalanuvchilar"}>Foydalanuvchilar</NavLink>
        <NavLink to={"/admin/e'lonlar"}>E’lonlar</NavLink>
        <NavLink to={"/admin/tushum"}>Tushum</NavLink>
        <NavLink to={"/admin/rassilka"}>Sms rassilka</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
