import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import GlobalChart from './components/GlobalChart';
import GlobalChartContainer from './containers/GlobalChartContainer';
import TopCardsContainer from './containers/TopCardsContainer';
import PieChartComponent from './components/PieChart';
import RadialChart from './components/RadialChart';
import USChartContainer from './containers/USChartContainer';
import CanadaChartContainer from './containers/CanadaChartContainer';
import AustraliaChartContainer from './containers/AustraliaChartContainer';
import NorthAmericaChartContainer from './containers/NorthAmericaChartContainer';
import SouthAmericaChartContainer from './containers/SouthAmericaChartContainer';
import EuropeChartContainer from './containers/EuropeChartContainer';
// import AfricaChart from './components/AfricaChart';
// import AustraliaChart from './components/AustraliaChart';
// import CanadaChart from './components/CanadaChart';
// import EuropeChart from './components/EuropeChart';
// import LatinAmericaChart from './components/LatinAmericaChart';
// import USChart from './components/USChart';
import About from './components/About';
import { getAusCan } from './helpers/fetchData';
// import { data } from './helpers/data';
import { useAxios } from 'use-axios-client';

import './App.css';

const App = () => {
	const [global, setGlobal] = useState([]);
  const [worldData, setWorldData] = useState([])
  const [australia, setAustralia] = useState([]);
  const [canada, setCanada] = useState([]);
  const [countries, setCountries] = useState([]);
  
	useEffect(() => {    
    getAusCan
      .then(response => {
        setAustralia(response.data.locations.slice(8, 17));
        setCanada(response.data.locations.slice(35, 46));
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
	}, []);

  return (
    <div className="App">
      <Header />
			<div className='body'>
				<div>
					<TopCardsContainer/>
          <GlobalChartContainer />
          <USChartContainer />
          <CanadaChartContainer />
          <AustraliaChartContainer />
          <NorthAmericaChartContainer />
          <SouthAmericaChartContainer />
          <EuropeChartContainer />
          
    
  
          {/* <AfricaChart africa={countries} />
          <EuropeChart europe={countries} />
          <LatinAmericaChart latinAmerica={countries} />  */}
    		</div>
        <div>
          <div className='other-data-container'>
            <div className='other-data'>
              <PieChartComponent global={global} />
              <RadialChart />
            </div>
            <About />
          </div>
        </div>
			</div>
		</div>
  );
}

export default App;