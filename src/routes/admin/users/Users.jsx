import Statistics from "../statistics/Statistics";
import "./Users.css";
function Users() {
  let data = [40, 20, 37, 27, 58, 79, 60];
  return (
    <div className="users">
      <Statistics title={"Foydalanuvchilar"} dataNumber={data} />
    </div>
  );
}

export default Users;
