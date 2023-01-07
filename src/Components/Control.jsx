import React, { useEffect } from "react";
import { controls } from "../Data/dummy";
import "../Styles/control.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Control in one place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non esse
            eaque obcaecati repudiandae alias eveniet ea iure corrupti modi.
          </p>
          <button>Start 14 days trial</button>
        </div>
        <div className="control__content">
          {controls.map((control, index) => (
            <div className="control" key={index}>
              <div className="control__icon">
                <control.icon />
              </div>

              <div className="control__text__content">
                <p>{control.name}</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, quos.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
