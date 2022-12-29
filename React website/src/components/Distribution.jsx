import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../images";

const Distribution = () => {
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
    <div className="app__distribution">
      <motion.div
        ref={ref}
        animate={control}
        variants={list1}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">
          <div className="distribtion__text">
            <h1>D'task also works on your phone.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              quam earum impedit veritatis fugit perferendis nesciunt libero eum
              unde consequuntur. Veniam, eaque! Nulla aut perferendis dolore
              possimus atque optio suscipit.
            </p>
          </div>
          <div className="distribution__buttons">
            <button>
              <BsApple /> Download App
            </button>
            <button>
              <IoLogoGooglePlaystore /> Download App
            </button>
          </div>
        </motion.div>

        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
