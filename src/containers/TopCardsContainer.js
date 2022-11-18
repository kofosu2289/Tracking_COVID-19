import React from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import TopCards from "../components/TopCards";
import { apiBaseLink, apiLinkPrefixForContinents} from "../globals";

const TopCardsContainer = () => {
  const { data, error, loading } = useAxios({
    method: "GET",
    url: `${apiLinkPrefixForContinents}world`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host":
        apiBaseLink,
    },
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && <TopCards data={data} />}
    </>
  );
};

export default TopCardsContainer;
