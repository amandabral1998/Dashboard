import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { UserDistributionProps } from "./UserDistribution";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ActiveUsersDistribution: React.FC<UserDistributionProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<number[]>([]);

  const labels = [
    "dailyActiveUsers",
    "weeklyActiveUsers",
    "monthlyActiveUsers",
  ];

  useEffect(() => {
    const modifiedData = Object.entries(data)
      .filter(([key]) => labels.includes(key)) // Filter only required keys
      .map(([, value]) => (typeof value === "number" ? value : 0)); // Extract values

    setFilteredData(modifiedData);
  }, [data]); // Re-run when `data` changes

  const chartData = {
    labels,
    datasets: [
      {
        label: "Active Users Distribution",
        data: filteredData, // Use dynamic data
        backgroundColor: ["#FF5733", "#36A2EB", "#8DFF33"],
        hoverBackgroundColor: ["#D35400", "#1F618D", "#58D68D"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ActiveUsersDistribution;
