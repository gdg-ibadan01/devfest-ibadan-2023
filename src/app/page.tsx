"use client";

import TextCarousel from "./component/Carousel/TextCarousel";
import LogosCarousel from "./component/Carousel/LogosCarousel";
import DevfestHero from "./component/DevfestHero";
import About from "./component/About";

const Home = () => {
  return (
    <div className="container">
      <TextCarousel />
      <DevfestHero />
      <LogosCarousel />
      <About />
    </div>
  );
};

export default Home;
