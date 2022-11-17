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

const CanadaChart = props => {
  const {data} = props;
  const canadaData = data.map(province => ({
    name: `${province.province}`,
    Total: `${province.confirmed}`,
    Deaths: `${province.deaths == null ? 0 : province.deaths}`,
    Recoveries: `${
      province.recovered == null ? 0 : province.recovered
    }`
  }));
  return (
    <div className='global-chart-container'>
      <h3>Canada Statistics By Province</h3>
      <div className='global-chart'>
        <ResponsiveContainer width={'98%'} height={500}>
          <BarChart
            width={800}
            height={500}
            data={canadaData}
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

export default CanadaChart;