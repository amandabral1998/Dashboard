import { useEffect, useState } from "react";
import Card from "./Card";
import "./CardView.css";

interface CardViewProps {
  data: { [key: string]: string | number };
}

const CardView = ({ data }: CardViewProps) => {
  const apiLocalStorageResponse = JSON.parse(
    localStorage.getItem("apiResponse") || "{}"
  );
  const [filteredData, setFilteredData] = useState<[string, string | number][]>(
    []
  );

  useEffect(() => {
    const modifiedData = Object.entries(
      apiLocalStorageResponse ? apiLocalStorageResponse : data
    ).map(([key, value]) => {
      return key !== "withdrawData" && typeof value !== "object"
        ? [key, value]
        : null;
    });

    setFilteredData(
      modifiedData.filter(
        (item): item is [string, string | number] => item !== null
      )
    );
  }, []);

  return (
    <div className="cardView">
      {filteredData.map(([key, value]) => (
        <Card key={key} title={key} value={value} />
      ))}
    </div>
  );
};

export default CardView;
