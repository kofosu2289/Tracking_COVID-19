import React from "react";
import Header from "./components/Header";
import GlobalChartContainer from "./containers/GlobalChartContainer";
import TopCardsContainer from "./containers/TopCardsContainer";
import USChartContainer from "./containers/USChartContainer";
import CanadaChartContainer from "./containers/CanadaChartContainer";
import AustraliaChartContainer from "./containers/AustraliaChartContainer";
import NorthAmericaChartContainer from "./containers/NorthAmericaChartContainer";
import SouthAmericaChartContainer from "./containers/SouthAmericaChartContainer";
import EuropeChartContainer from "./containers/EuropeChartContainer";
import AfricaChartContainer from "./containers/AfricaChartContainer";
import AsiaChartContainer from "./containers/AsiaChartContainer";
import OceaniaChartContainer from "./containers/OceaniaChartContainer";
import About from "./components/About";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div>
          <TopCardsContainer />
          <GlobalChartContainer />
          <USChartContainer />
          <CanadaChartContainer />
          <AustraliaChartContainer />
          <NorthAmericaChartContainer />
          <SouthAmericaChartContainer />
          <EuropeChartContainer />
          <AfricaChartContainer />
          <AsiaChartContainer />
          <OceaniaChartContainer />
        </div>
        <div>
          <div className="other-data-container">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
