import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import AustraliaChart from "../components/AustraliaChart";
import { apiBaseLink, apiLinkPrefixForProvincesAndStates } from "../globals";


const AustraliaChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForProvincesAndStates}AUS`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <AustraliaChart data={data} />}
    </>
  );
};

export default AustraliaChartContainer;
