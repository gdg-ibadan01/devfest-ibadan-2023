/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextCarousel from "./component/Carousel/TextCarousel";
import LogosCarousel from "./component/Carousel/LogosCarousel";
import DevfestHero from "./component/DevfestHero";
import About from "./component/About";
import Countdown from "./component/Countdown";
import Speakers from "./component/Speakers";
import Footer from "./component/Footer";
import useCustomCursor from "./hooks/useCustomCusor";
import Preloader from "./component/Preloader";

const Home = () => {
  const {
    cursorText,
    cursorVariant,
    continueEnter,
    continueLeave,
    viewEnter,
    viewLeave,
    ref,
    variants,
    spring,
  } = useCustomCursor();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      <TextCarousel />
      <DevfestHero devfestEnter={continueEnter} devfestLeave={continueLeave} />
      <LogosCarousel />
      <About />
      <Countdown />
      <Speakers />
      <Footer />
    </div>
  );
};

export default Home;
