import React, { useState, useEffect } from "react";
import { useAxios } from "use-axios-client";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

const TopCards = () => {
  const { data, error, loading } = useAxios({
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  });

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>{error.message}</div>}
      {data && (
        <div className="cards">
          <div className="card">
            <h2>{Object.values(data)["0"].TotalCases.toLocaleString()}</h2>
            <p>CONFIRMED CASES</p>
          </div>
          <div className="card">
            <h2 className="new-case-numbers">
              {Object.values(data)["0"].NewCases.toLocaleString()}
            </h2>
            <p>NEW CASES</p>
          </div>
          <div className="card">
            <h2 className="death-numbers">
              {Object.values(data)["0"].TotalDeaths.toLocaleString()}
            </h2>
            <p>DEATHS</p>
          </div>
          <div className="card">
            <h2 className="recovered-numbers">
              {Number(Object.values(data)["0"].TotalRecovered).toLocaleString()}
            </h2>
            <p>RECOVERED</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TopCards;
