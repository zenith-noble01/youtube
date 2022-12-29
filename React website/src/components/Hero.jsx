import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import "../styles/hero.scss";
import Button from "./Button";

const Hero = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "-50%" },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="app__hero" id="home">
      <motion.div
        initial="hidden"
        animate={control}
        variants={list}
        ref={ref}
        className="hero__text"
      >
        <motion.h1 variants={item}>Make Your Business</motion.h1>
        <motion.h1 variants={item}>More Powerfull</motion.h1>
      </motion.div>
      <div className="ticks__container">
        <p>
          <span>
            <TiTick />
          </span>
          Lifetime Support
        </p>
        <p>
          <span>
            <TiTick />
          </span>
          No NCC Register
        </p>
      </div>

      <div className="input__container">
        <input type="text" placeholder="input your email" />
        <Button text="Try for free" />
      </div>
    </div>
  );
};

export default Hero;
