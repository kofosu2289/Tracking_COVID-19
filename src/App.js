import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GlobalChart from './components/GlobalChart';
import TopCards from './components/TopCards';
import PieChartComponent from './components/PieChart';
import RadialChart from './components/RadialChart';
import USChart from './components/USChart';

import './App.css';

function App() {
	const [global, setGlobal] = useState([]);
	const [usa, setUsa] = useState([]);
	useEffect(() => {
		axios
			.get(`https://api.covid19api.com/summary`)
			.then(response => {
				setGlobal(response.data.Countries);
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
	}, []);

  return (
    <div className="App">
      <Header />
			<div className='body'>
				<div>
					<TopCards global={global} />
					<GlobalChart global={global} />
					<USChart usa={usa} />
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
