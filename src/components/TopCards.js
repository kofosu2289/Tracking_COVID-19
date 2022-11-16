import React from "react";

import '../App.css';


const TopCards = (props) => {
  const { data } = props;
  return (
    <>
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
    </>
  );
};

export default TopCards;
