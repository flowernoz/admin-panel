import "./Statistics.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Statistics({ title, dataNumber }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,

    datasets: [
      {
        label: title,
        data: dataNumber,
        backgroundColor: "#0085AF",
        font: {
          size: 16,
        },
      },
    ],
  };
  const period = ["haftalik", "oylik", "yillik"];
  return (
    <div className="statistics">
      <p className="statisticsTitle">{title}</p>
      <div className="stat__details">
        <p>50000 UZS</p>
        <div className="period__btns">
          {period.map((i, inx) => (
            <button>{i}</button>
          ))}
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Statistics;
