import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { UserDistributionProps } from "./UserDistribution";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const DepositsBonusesChart: React.FC<UserDistributionProps> = ({ data }) => {
  const [chartValues, setChartValues] = useState<number[]>([]);

  const labels = [
    "totalDepositAmount",
    "totalAdminDepositAmount",
    "totalAdminBonusAmount",
  ];

  useEffect(() => {
    const filteredValues = labels.map((key) =>
      typeof data[key] === "number" ? data[key] : 0
    );
    setChartValues(filteredValues);
  }, [data]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Deposits & Bonuses",
        data: chartValues,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DepositsBonusesChart;
