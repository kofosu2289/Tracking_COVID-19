import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import EuropeChart from "../components/EuropeChart";
import { apiBaseLink, apiLinkPrefixForContinents} from "../globals";

const EuropeChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForContinents}europe`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
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
