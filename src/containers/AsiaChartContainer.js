import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import AsiaChart from "../components/AsiaChart";
import { apiBaseLink, apiLinkPrefixForContinents} from "../globals";

const AsiaChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForContinents}asia`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <AsiaChart data={data} />}
    </>
  );
};

export default AsiaChartContainer;
