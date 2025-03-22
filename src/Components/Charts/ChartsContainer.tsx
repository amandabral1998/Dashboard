import UserDistribution from "./UserDistribution";
import useFetchData from "../../CustomHooks/FetchData";
import "./ChartsContainer.css";
import ActiveUsersDistribution from "./ActiveUserDistribution";
import DepositsBonusesChart from "./DepositBonusesChart";
import React from "react";

export interface ChartsContainerProps {
  theme: string;
}

const ChartsContainer: React.FC<ChartsContainerProps> = ({ theme }) => {
  const { apiResponse, error, loading } = useFetchData(
    "https://d29l1nxcqevrmo.cloudfront.net/dashboard"
  );

  if (loading) return <p className={`loading-text ${theme}`}>Loading Charts...</p>;
  if (error) return <p className={`error-text ${theme}`}>{error}</p>;

  return (
    <div className={`chartsContainer ${theme}`}>
      <h1 className="analyticsHeading">Analytics</h1>

      <div className="chartsList">
        <UserDistribution data={apiResponse} />
        <ActiveUsersDistribution data={apiResponse} />
        <DepositsBonusesChart data={apiResponse} />
      </div>
    </div>
  );
};

export default ChartsContainer;
