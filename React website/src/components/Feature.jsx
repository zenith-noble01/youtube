import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/feature.scss";
import { feature } from "../images";
import { features } from "../data/dummy";
import { TiTick } from "react-icons/ti";
import Controls from "./Controls";

const Feature = () => {
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
    <div className="app__feature">
      <motion.div
        ref={ref}
        animate={control}
        variants={list1}
        className="feature__container"
      >
        <motion.div variants={item1} className="left__feature">
          <img src={feature} alt="" />
        </motion.div>
        <motion.div variants={item2} className="right__feature">
          <div className="right__text">
            <h1>
              Feature to help <br /> your team succeed
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              rem laudantium unde architecto, laborum quos accusamus quae nisi
              obcaecati magni fugiat expedita voluptate deserunt repellat. Minus
              aliquid architecto repudiandae repellendus.
            </p>
          </div>

          <div className="feature__content">
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <TiTick />
                <div className="feature__text">
                  <p>{feature}</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, porro.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Controls />
    </div>
  );
};

export default Feature;
