import Statistics from "../statistics/Statistics";
import "./Announcement.css";
function Announcement() {
  let data = [20, 30, 57, 27, 78, 29, 40];

  return (
    <div className="announcement admin__pages">
      <Statistics title={"E'lonlar"} dataNumber={data} />
    </div>
  );
}

export default Announcement;
