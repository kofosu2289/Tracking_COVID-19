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

const GlobalChart = (props) => {
  const { data } = props;
  const globalData = data.map((country) => ({
    name: `${country.Country}`,
    Total: `${country.TotalCases}`,
    Deaths: `${country.TotalDeaths}`,
    Recoveries: `${country.TotalRecovered}`,
  }));
  return (
    <div className="global-chart-container">
      <h3>Global Statistics By Country</h3>
      <div className="global-chart">
        <ResponsiveContainer width={"98%"} height={500}>
          <BarChart
            width={800}
            height={500}
            data={globalData}
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
              endIndex={15}
            ></Brush>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GlobalChart;
