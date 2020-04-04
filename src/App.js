import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GlobalChart from './components/GlobalChart';
import TopCards from './components/TopCards';
import PieChartComponent from './components/PieChart';
import RadialChart from './components/RadialChart';

import './App.css';

function App() {
	const [global, setGlobal] = useState([]);
	useEffect(() => {
		axios
			.get(`https://api.covid19api.com/summary`)
			.then(response => {
				setGlobal(response.data.Countries);
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
    		</div>
				<div>
					<PieChartComponent global={global} />
					<RadialChart />
				</div>
			</div>
		</div>
  );
}

export default App;
