import React from "react";
import "../Styles/home.scss";
import {
  Navbar,
  Sidebar,
  FeedSidebar,
  HomeLoader,
  Posts,
  Share,
} from "../Components";

const Home = () => {
  return (
    <div className="app__home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <div className="home__content">
          <div className="posts__wrapper__container">
            <Share />
            <Posts />
          </div>
          <FeedSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
