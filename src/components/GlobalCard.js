import React from 'react';
import '../App.css'

function GlobalCard(props) {
	console.log(props.global);
	return (
		<div>
			<div>
				<h1>Global</h1>
				<div>
					<table>
						<thead>
							<tr>
								<th>Country</th>
								<th>Total Cases</th>
								<th>New Cases</th>
								<th>Deaths</th>
								<th>Recoveries</th>
							</tr>
						</thead>
						<tbody>
							{props.global.map(country => (
								<tr>
									<td>{country.Country}</td>
									<td>{country.TotalConfirmed}</td>
									<td>{country.NewConfirmed}</td>
									<td>{country.TotalDeaths}</td>
									<td>{country.TotalRecovered}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default GlobalCard;
