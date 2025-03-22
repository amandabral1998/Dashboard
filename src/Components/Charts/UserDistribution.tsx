import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export interface UserDistributionProps {
  data: any;
}

const UserDistribution: React.FC<UserDistributionProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<number[]>([]);

  const labels = [
    "todaysUserAddition",
    "lastSevenDaysUserAddition",
    "lastThirtyDaysUsersAddition",
  ];

  useEffect(() => {
    const modifiedData = Object.entries(data)
      .filter(([key]) => labels.includes(key))
      .map(([, value]) => (typeof value === "number" ? value : 0));

    setFilteredData(modifiedData);
  }, [data]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "New Users Distribution",
        data: filteredData,
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#2A89D1", "#E74C3C", "#F4D03F"],
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

export default UserDistribution;
