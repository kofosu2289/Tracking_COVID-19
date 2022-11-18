import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer
} from 'recharts';

import '../App.css'

const OceaniaChart = props => {
  const { data } = props
  const filteredData = data.filter((country) => country.Country !== 'Australia')  
  const oceaniaData = filteredData.map(country => ({
    name: `${country.Country}`,
    Total: `${country.TotalCases}`,
    Deaths: `${country.TotalDeaths == null ? 0 : country.TotalDeaths}`,
    Recoveries: `${country.TotalRecovered == null ? 0 : country.TotalRecovered}`
  }));
  return (
    <div className='global-chart-container'>
      <h3>Oceania Statistics By Country</h3>
      <div className='global-chart'>
        <ResponsiveContainer width={'98%'} height={500}>
          <BarChart
            data={oceaniaData}
            margin={{
              top: 5,
              right: 30,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <Tooltip />
            <Legend />
            <Bar dataKey='Total' fill='#64DD9C' />
            <Bar dataKey='Deaths' fill='#F65064' />
            <Bar dataKey='Recoveries' fill='#449BE2' />
            <Brush
              dataKey='name'
              height={20}
              stroke='gray'
              startIndex={0}
              endIndex={7}
            ></Brush>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OceaniaChart;