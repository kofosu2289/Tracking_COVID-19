import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import GlobalChart from './components/GlobalChart';
import TopCards from './components/TopCards';
import PieChartComponent from './components/PieChart';
import RadialChart from './components/RadialChart';
// import AfricaChart from './components/AfricaChart';
// import AustraliaChart from './components/AustraliaChart';
// import CanadaChart from './components/CanadaChart';
// import EuropeChart from './components/EuropeChart';
// import LatinAmericaChart from './components/LatinAmericaChart';
// import USChart from './components/USChart';
import About from './components/About';
import { getUsa, getAusCan } from './helpers/fetchData';
// import { data } from './helpers/data';
import { useAxios } from 'use-axios-client';

import './App.css';

const App = () => {
	const [global, setGlobal] = useState([]);
  const [worldData, setWorldData] = useState([])
  const [usa, setUsa] = useState([]);
  const [australia, setAustralia] = useState([]);
  const [canada, setCanada] = useState([]);
  const [countries, setCountries] = useState([]);
  // const allOptions = {
  //   method: 'GET',
  //   url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
  //   headers: {
  //     'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
  //     'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  //   }
  // };

  // const asiaOptions = {
  //   method: 'GET',
  // url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
  // headers: {
  //   'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
  //   'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  // }
  // }

  // const africaOptions = {
  //   method: 'GET',
  //   url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa',
  //   headers: {
  //     'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
  //     'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  //   }
  // };
  
  // const allData = axios.request(allOptions).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  // const asiaData = axios.request(asiaOptions).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  // const africaData = axios.request(africaOptions).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  // console.log({allData})
  // console.log({asiaData})
  // console.log({africaData})

  // const options = {
  //   method: 'GET',
  //   url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Honduras/hnd',
  //   headers: {
  //     'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
  //     'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  //   }
  // };

  // const getHonduras = axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  // const fetchWorldData = () => {
  //   const { data } = useAxios({
  //   method: 'GET',
  //   url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries',
  //   headers: {
  //     'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
  //     'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  //   }
  // })
  
  // }
  // console.log(getHonduras)
	useEffect(() => {
		// getGlobal
		// 	.then(response => {
    //     setGlobal(response.data.Countries);
    //     setCountries(response.data.Countries);
		// 	})
		// 	.catch(error => {
		// 		console.log('The data was not returned', error);
		// 	});
    
    getUsa
			.then(response => {
				setUsa(response.data);
			})
			.catch(error => {
				console.log('The data was not returned', error);
      });

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
					<TopCards global={global} worldData={worldData}/>
					{/* <GlobalChart global={global} worldData={worldData} /> */}
          {/* <USChart usa={usa} />
          <AustraliaChart australia={australia} />
          <CanadaChart canada={canada} />
          <AfricaChart africa={countries} />
          <EuropeChart europe={countries} />
          <LatinAmericaChart latinAmerica={countries} /> */}
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