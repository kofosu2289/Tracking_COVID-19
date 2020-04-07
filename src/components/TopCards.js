import React from 'react';

const TopCards = props => {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	let totalCaseNumbers = props.global.map(country =>
		parseInt(`${country.TotalConfirmed}`)
	);
	let totalCases = totalCaseNumbers.reduce(reducer, 0);
	let newTotalCases = totalCases.toLocaleString();

	let newCaseNumbers = props.global.map(country =>
		parseInt(`${country.NewConfirmed}`)
	);
	let newCases = newCaseNumbers.reduce(reducer, 0);
	let newNewCases = newCases.toLocaleString();

	let deaths = props.global.map(country => parseInt(`${country.TotalDeaths}`));
	let TotalDeaths = deaths.reduce(reducer, 0);
	let newTotalDeaths = TotalDeaths.toLocaleString();

	let recovered = props.global.map(country =>
		parseInt(`${country.TotalRecovered}`)
	);
	let TotalRecovered = recovered.reduce(reducer, 0);
	let newTotalRecovered  = TotalRecovered.toLocaleString();
	return (
		<div className='cards'>
			<div className='card'>
				<h2>{newTotalCases}</h2>
				<p>CONFIRMED CASES</p>
			</div>
			<div className='card'>
				<h2 className='new-case-numbers'>{newNewCases}</h2>
				<p>NEW CASES</p>
			</div>
			<div className='card'>
				<h2 className='death-numbers'>{newTotalDeaths}</h2>
				<p>DEATHS</p>
			</div>
			<div className='card'>
				<h2 className='recovered-numbers'>{newTotalRecovered}</h2>
				<p>RECOVERED</p>
			</div>
		</div>
	);
}

export default TopCards;