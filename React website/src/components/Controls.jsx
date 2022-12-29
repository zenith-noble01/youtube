import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../styles/controls.scss";
import { controls } from "../data/dummy";

const Controls = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Control in one place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, quod ipsum deserunt cum deleniti vero nihil ducimus id
            suscipit aut!
          </p>
          <button>Start 14 days trial</button>
        </div>
        <div className="control__content">
          {controls.map((control, index) => (
            <div className="control" key={index}>
              <div className="control__icon">
                <control.icon />
              </div>
              <div className="control__text-content">
                <p>{control.name}</p>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates, vero!
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Controls;
