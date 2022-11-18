import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from "recharts";

import "../App.css";

const NorthAmericaChart = (props) => {
  // const data = props.usa.map(state => ({
  //   name: `${state.state}`,
  //   Total: `${state.cases}`,
  //   Deaths: `${state.deaths}`,
  //   Recoveries: `${state.cases - state.active}`
  // }));
  const { data } = props;
  const northAmericaData = data.map((country) => ({
    name: `${country.Country}`,
    Total: `${country.TotalCases}`,
    Deaths: `${country.TotalDeaths}`,
    Recoveries: `${Number(country.TotalRecovered)}`,
  }));

  return (
    <div className="global-chart-container">
      <h3>North America Statistics By Country</h3>
      <div className="global-chart">
        <ResponsiveContainer width={"98%"} height={500}>
          <BarChart
            width={800}
            height={500}
            data={northAmericaData}
            margin={{
              top: 5,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total" fill="#64DD9C" />
            <Bar dataKey="Deaths" fill="#F65064" />
            <Bar dataKey="Recoveries" fill="#449BE2" />
            <Brush
              dataKey="name"
              height={20}
              stroke="gray"
              startIndex={0}
              endIndex={7}
            ></Brush>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NorthAmericaChart;
