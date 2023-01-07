import React from "react";
import Chart from "react-apexcharts";
import "./ChartContainer.scss";

const LineChart = () => {
  const chartOptions = {
    series: [
      {
        name: "Online Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 60],
      },
      {
        name: "Store Customers",
        data: [40, 30, 70, 80, 40, 16, 40, 20],
      },
    ],
    options: {
      color: ["#ffca40", "#8f170ace"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
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
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <div className="lineChart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="line"
        height="100%"
      />
    </div>
  );
};

export default LineChart;
