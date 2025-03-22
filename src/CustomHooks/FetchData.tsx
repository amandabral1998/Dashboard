import axios from "axios";
import { useEffect, useState } from "react";

const maxRequest = 20;
const timeFrame = 120000;

const useFetchData = (url: string) => {
  const [apiResponse, setApiResponse] = useState({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const apiResponseData = localStorage.getItem("apiResponse");
  let apiDataCachedTime = parseInt(
    localStorage.getItem("apiDataCachedTime") || "0",
    10
  );

  const fetchData = async () => {
    let requestCounts = parseInt(
      localStorage.getItem("requestCounts") || "0",
      10
    );
    let firstTimeAPICall = parseInt(
      localStorage.getItem("firstTimeAPICall") || "0",
      10
    );
    const now = Date.now();

    if (!firstTimeAPICall || now - firstTimeAPICall > timeFrame) {
      requestCounts = 0;
      firstTimeAPICall = now;
      localStorage.setItem("firstTimeAPICall", firstTimeAPICall.toString());
      localStorage.setItem("requestCounts", requestCounts.toString());
    }

    if (requestCounts < maxRequest) {
      try {
        setLoading(true);
        const { data } = await axios.get(url);

        if (data) {
          setApiResponse(data.data);
          apiDataCachedTime = Date.now();
          localStorage.setItem(
            "apiDataCachedTime",
            apiDataCachedTime.toString()
          );
          localStorage.setItem("apiResponse", JSON.stringify(data.data));
        }

        requestCounts++;
        localStorage.setItem("requestCounts", requestCounts.toString());
      } catch (err) {
        setError("Error fetching data. Please try again later.");
        console.error("Error Fetching Data", err);
      } finally {
        setLoading(false);
      }
    } else {
      setError("API rate limit exceeded. Try again later.");
    }
  };

  useEffect(() => {
    if (apiResponseData && Date.now() - apiDataCachedTime < 6000) {
      setApiResponse(JSON.parse(apiResponseData));
    } else {
      fetchData();
    }
  }, []);

  return { apiResponse, error, loading };
};

export default useFetchData;
