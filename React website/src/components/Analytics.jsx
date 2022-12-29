import React, { useEffect } from "react";
import "../styles/analytics.scss";
import { onephone } from "../images";
import { analytics } from "../data/dummy";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Analytics = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const list1 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: { opacity: 0, x: -100 },
  };
  const item2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list1}
        className="analytics__grouper"
      >
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1>Okay, Let's see D'task in numbers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              tenetur esse omnis deserunt ab quis amet, recusandae sequi
              inventore ut, voluptatibus iure tempore perferendis vero. Dicta
              numquam suscipit ipsum recusandae!
            </p>
          </div>
          <div className="left__analytics-container">
            {analytics.map((analytic, index) => (
              <div className="analytics__container" key={index}>
                <div className="anlytics__icon">{analytic.desc}</div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__analytics">
          <img src={onephone} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
