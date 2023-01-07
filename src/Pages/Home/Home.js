import React from "react";
import "./Home.scss";
import { ChartContainer, Header, HomeCount, Table } from "../../Components";

const Home = () => {
  return (
    <div className="outlet app__home">
      <Header title="Dashboard" />
      <HomeCount />
      <ChartContainer />
      <Table />
    </div>
  );
};

export default Home;
