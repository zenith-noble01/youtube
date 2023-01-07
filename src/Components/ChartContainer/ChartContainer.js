import React from "react";
import "./ChartContainer.scss";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const ChartContainer = () => {
  return (
    <div className="chartContainer">
      <LineChart />
      <BarChart />
    </div>
  );
};

export default ChartContainer;
