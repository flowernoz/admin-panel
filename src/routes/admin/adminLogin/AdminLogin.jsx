import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./AdminLogin.css";
function AdminLogin() {
  const [phone, setPhone] = useState("+998");
  const validNumber = new RegExp("^[+0-9].{12}$");
  let navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (!validNumber.test(phone)) {
      return toast.error("Yaroqsiz ma'lumot kiritildi", {
        position: "top-center",
        autoClose: 1500,
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "fancy-progress-bar",
      });
    }
    localStorage.setItem("admin", phone);
    setTimeout(() => navigate("/admin"), 1500);
    toast.success("Tizimga muvaffaqiyatli kirildi!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
    });
  }
  return (
    <div className="admin__login">
      <ToastContainer />
      <form className="admin__login__form">
        <p>Admin panel</p>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
        />
        <span>
          Kod kelmadimi? <button>Qayta yuborish</button>
        </span>
        <button onClick={submit} className="admin__login__btn" type="submit">
          Kirish
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
