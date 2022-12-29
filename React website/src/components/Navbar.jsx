import React, { useState } from "react";
import { routes } from "../data/dummy";
import "../styles/navbar.scss";

const Navbar = () => {
  const [color, setColor] = useState(false);

  function changeNavBackgroundColor() {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeNavBackgroundColor);
  return (
    <div className={color ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <p>D'task</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        <button
          style={{
            color: color ? "#0c1727" : "white",
          }}
        >
          Login
        </button>
        <button
          style={{
            background: color ? "#0c1727" : "white",
            color: color ? "white" : "#0c1727",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
