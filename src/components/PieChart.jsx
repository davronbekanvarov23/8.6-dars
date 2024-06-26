import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function PieChart() {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((countries) => {
        const names = countries
          .sort((a, b) => b.area - a.area)
          .slice(0, 5)
          .map((country) => {
            return country.name.common;
          });
        const areas = countries
          .sort((a, b) => b.area - a.area)
          .slice(0, 5)
          .map((country) => {
            return country.area;
          });

        setData({
          series: areas,
          options: { ...data.options, labels: names },
        });
      });
  }, []);
  return (
    <div >
      <div id="chart">
        <h2>Area statistic:</h2>
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default PieChart;
