import React from "react";
import "./ChartContainer.scss";
import Chart from "react-apexcharts";

const BarChart = () => {
  const chartData = {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        tooltip: {
          enabled: true,
        },
      },
    },
  };
  return (
    <div className="barChat">
      <Chart
        options={chartData.options}
        series={chartData.series}
        height="100%"
        type="bar"
      />
    </div>
  );
};

export default BarChart;
