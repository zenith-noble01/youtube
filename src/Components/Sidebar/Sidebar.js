import React from "react";
import { AiTwotoneShop } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { routes, user } from "../../data/dummy";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="app__sidebar">
      <div className="sidebar__header">
        <AiTwotoneShop />
        <p>
          Burger<span>Min</span>
        </p>
      </div>
      <div className="sidebar__routes">
        <ul>
          {routes.map((route) => (
            <li key={route.icon}>
              <NavLink to={route.path}>
                <route.icon />
                <span>{route.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="user__profile__container">
          <div className="user__container">
            <img src={user} alt="" />
            <p>Thomas Edison</p>
          </div>
          <NavLink to="/settings" className="profile__link">
            Open Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
