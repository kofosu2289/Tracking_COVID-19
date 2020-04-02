import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GlobalCard from './components/GlobalCard';

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
			<GlobalCard global={global} />
    </div>
  );
}

export default App;
