import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GlobalChart from './components/GlobalChart';
import TopCards from './components/TopCards';
import PieChartComponent from './components/PieChart';
import RadialChart from './components/RadialChart';
import AfricaChart from './components/AfricaChart';
import AustraliaChart from './components/AustraliaChart';
import CanadaChart from './components/CanadaChart';
import EuropeChart from './components/EuropeChart';
import USChart from './components/USChart';

import './App.css';

function App() {
	const [global, setGlobal] = useState([]);
  const [usa, setUsa] = useState([]);
  const [australia, setAustralia] = useState([]);
  const [canada, setCanada] = useState([]);
  const [countries, setCountries] = useState([]);
	useEffect(() => {
		axios
			.get(`https://api.covid19api.com/summary`)
			.then(response => {
        setGlobal(response.data.Countries);
        setCountries(response.data.Countries);
			})
			.catch(error => {
				console.log('The data was not returned', error);
			});

		axios
			.get('https://corona.lmao.ninja/states')
			.then(response => {
				setUsa(response.data);
			})
			.catch(error => {
				console.log('The data was not returned', error);
      });

    axios
      .get(`http://covid19api.xapix.io/v2/locations`)
      .then(response => {
        console.log(response.data.locations);
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
					<TopCards global={global} />
					<GlobalChart global={global} />
          <USChart usa={usa} />
          <AustraliaChart australia={australia} />
          <CanadaChart canada={canada} />
          <AfricaChart africa={countries} />
          <EuropeChart europe={countries} />
    		</div>
				<div className='other-data'>
					<PieChartComponent global={global} />
					<RadialChart />
				</div>
			</div>
		</div>
  );
}

export default App;
