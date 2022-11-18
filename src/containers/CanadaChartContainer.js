import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import CanadaChart from "../components/CanadaChart";
import { apiBaseLink, apiLinkPrefixForProvincesAndStates } from "../globals";


const CanadaChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForProvincesAndStates}CAN`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <CanadaChart data={data} />}
    </>
  );
};

export default CanadaChartContainer;
