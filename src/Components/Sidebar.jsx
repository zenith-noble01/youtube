import React from "react";
import "../Styles/sidebar.scss";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { sidebarRoutes } from "../Constants/dummy";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../redux/theme";

const Sidebar = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const handleChangeTheme = () => {
    dispatch(toogleTheme());
  };

  return (
    <div className="app__sidebar">
      <h2 className="sidebar__logo">
        <Link to="/">CodeMedia</Link>
      </h2>

      <div className="input__container">
        <BiSearch />
        <input type="text" placeholder="Explore Codemedia..." />
      </div>

      <ul className="sidebar__routes">
        {sidebarRoutes.map((route, index) => (
          <NavLink to={route.path} key={index}>
            <route.icon />
            {route.name}
          </NavLink>
        ))}
      </ul>

      <div className="sidebar__theming" onClick={handleChangeTheme}>
        <div className="theme">Theme: </div>
        <div className={`toogle__theme ${theme}`}>
          <div className="icon">
            {theme === "dark" ? <BiMoon /> : <BiSun />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
