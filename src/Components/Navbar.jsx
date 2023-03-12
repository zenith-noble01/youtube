import React from "react";
import "../Styles/navbar.scss";
import { HiBell } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { user } from "../Images";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="left__navbar">
        <div className="name">
          <p>Home</p>
        </div>
        <ul>
          <li>Explore</li>
          <li>Community feed</li>
          <li>Mutual friends</li>
        </ul>
      </div>
      <div className="right__navbar">
        <ul>
          <li>
            <AiFillMessage />
          </li>
          <li>
            <HiBell />
          </li>
        </ul>
        <div className="userContent">
          <Link to="/profile/3333">
            <p>Code env</p>
            <img src={user} alt="codeMedia profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
