"use client";

import { motion } from "framer-motion";
import TextCarousel from "./component/Carousel/TextCarousel";
import LogosCarousel from "./component/Carousel/LogosCarousel";
import DevfestHero from "./component/DevfestHero";
import About from "./component/About";
import Countdown from "./component/Countdown";
import Footer from "./component/Footer";
import useCustomCursor from "./hooks/useCustomCusor";

const Home = () => {
  const {
    cursorText,
    cursorVariant,
    devfestHeroEnter,
    devfestHeroLeave,
    ref,
    variants,
    spring,
  } = useCustomCursor();

  return (
    <div className="container" ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      <TextCarousel />
      <DevfestHero
        devfestHeroEnter={devfestHeroEnter}
        devfestHeroLeave={devfestHeroLeave}
      />
      <LogosCarousel />
      <About />
      <Countdown />
      <Footer />
    </div>
  );
};

export default Home;
