import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import SouthAmericaChart from "../components/SouthAmericaChart";
import { apiBaseLink, apiLinkPrefixForContinents} from "../globals";

const SouthAmericaChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForContinents}southamerica`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <SouthAmericaChart data={data} />}
    </>
  );
};

export default SouthAmericaChartContainer;
