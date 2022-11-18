import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import NorthAmericaChart from "../components/NorthAmericaChart";
import { apiBaseLink, apiLinkPrefixForContinents} from "../globals";

const NorthAmericaChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForContinents}northamerica`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <NorthAmericaChart data={data} />}
    </>
  );
};

export default NorthAmericaChartContainer;
