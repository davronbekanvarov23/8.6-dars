import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function BarChart() {
  const [data, setData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((countries) => {
        const names = countries
          .sort((a, b) => b.population - a.population)
          .slice(0, 10)
          .map((country) => {
            return country.name.common;
          });
        const populations = countries
          .sort((a, b) => b.population - a.population)
          .slice(0, 10)
          .map((country) => {
            return country.population;
          });
        setData({
          series: [
            {
              data: populations,
            },
          ],
          options: {
            ...data.options,
            xaxis: { categories: names },
          },
        });
      });
  }, []);

  return (
    <div>
      <div id="chart">
        <h2>Population Statistic:</h2>
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="bar"
          height={400}
          width={800}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default BarChart;
