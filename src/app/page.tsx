/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
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
    <div ref={ref} id="hero">
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
      <DevfestHero devfestEnter={continueEnter} devfestLeave={continueLeave} />
      <LogosCarousel />
      <About />
      <Countdown />
      <Speakers />
      <Footer />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3ZTJL4VVVR"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3ZTJL4VVVR');`}
      </Script>
    </div>
  );
};

export default Home;
