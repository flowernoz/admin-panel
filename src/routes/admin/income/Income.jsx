import Statistics from "../statistics/Statistics";
import "./Income.css";
function Income() {
  let data = [50, 60, 47, 27, 38, 89, 100];
  return (
    <div className="income admin__pages">
      <Statistics title={"Tushum"} dataNumber={data} />
    </div>
  );
}

export default Income;
