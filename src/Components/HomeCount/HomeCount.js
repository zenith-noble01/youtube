import React from "react";
import "./HomeCount.scss";
import {
  BsArrowUpRightCircleFill,
  BsArrowDownLeftCircleFill,
} from "react-icons/bs";

const HomeCount = () => {
  return (
    <div className="home__count">
      <div className="home__items">
        <div className="item__title">Total Menus</div>
        <div className="item__count">
          <p>124</p>
          <BsArrowUpRightCircleFill />
          <span>12.5%</span>
        </div>
      </div>
      <div className="home__items">
        <div className="item__title">Total Revenue</div>
        <div className="item__count">
          <p>$10</p>
          <BsArrowDownLeftCircleFill className="down" />
          <span>4%</span>
        </div>
      </div>
      <div className="home__items">
        <div className="item__title">Total Orders</div>
        <div className="item__count">
          <p>57</p>
          <BsArrowDownLeftCircleFill className="down" />
          <span>2.18%</span>
        </div>
      </div>
      <div className="home__items">
        <div className="item__title">Total Customers</div>
        <div className="item__count">
          <p>199</p>
          <BsArrowUpRightCircleFill />
          <span>32%</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCount;
