import React from "react";
import useFetchData from "../../CustomHooks/FetchData";
import CardView from "../Cards/CardView";
import "../Dashboard/Dashboard.css";
import { ChartsContainerProps } from "../Charts/ChartsContainer";

const Dashboard: React.FC<ChartsContainerProps> = ({ theme }) => {
  const { apiResponse, error, loading } = useFetchData(
    "https://d29l1nxcqevrmo.cloudfront.net/dashboard"
  );

  if (loading) return <p>Loading Dashboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`dashboardContainer ${theme}`}>
      <h1 className="dashboardHeading">Dashboard</h1>

      <div className="dashboardContent">
        <CardView data={apiResponse} />
      </div>
    </div>
  );
};

export default Dashboard;
