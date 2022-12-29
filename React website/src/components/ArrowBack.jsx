import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import "../styles/arrowback.scss";

const ArrowBack = () => {
  const [isActive, setIsActive] = useState(false);

  function ShowArrow() {
    if (window.scrollY >= 300) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  window.addEventListener("scroll", ShowArrow);
  return (
    <div className={isActive ? "app__arrowback active" : "app__arrowback"}>
      <a href="#home">
        <BsArrowUp />
      </a>
    </div>
  );
};

export default ArrowBack;
