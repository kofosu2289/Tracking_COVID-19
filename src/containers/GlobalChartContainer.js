import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import GlobalChart from "../components/GlobalChart";
import { apiBaseLink, apiLinkPrefixForContinents} from "../globals";

const GlobalChartContainer = () => {
  const { data, error, loading } = useAxios({
    method: 'GET',
    url: `${apiLinkPrefixForContinents}countries`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': apiBaseLink
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <GlobalChart data={data} />}
    </>
  );
};

export default GlobalChartContainer;
