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
        position: "top",
        labels: {
          font: {
            size: 20,
          },
        },
      },
    },
  };
  document.body.style.width <= "730px"
    ? (ChartJS.defaults.font.size = 14)
    : (ChartJS.defaults.font.size = 16);

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
  return (
    <div className="statistics">
      <p className="statisticsTitle">{title}</p>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Statistics;
