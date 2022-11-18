import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import EuropeChart from "../components/EuropeChart";

const EuropeChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <EuropeChart data={data} />}
    </>
  );
};

export default EuropeChartContainer;
