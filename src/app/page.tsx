"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TextCarousel from "./component/Carousel/TextCarousel";
import LogosCarousel from "./component/Carousel/LogosCarousel";
import DevfestHero from "./component/DevfestHero";
import "./page.css";
import { useToggle } from "./hooks/useToggle";

const Home = () => {
  const router = useRouter();
  const handleClick = () => router.push("/about");
  const [isVisible, setIsVisible] = useToggle(false);
  return (
    <div className="container">
      <TextCarousel/>
      <DevfestHero />
      <LogosCarousel/>
    </div>
  );
};

export default Home;
