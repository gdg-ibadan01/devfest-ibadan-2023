"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./page.css";
import { useToggle } from "./hooks/useToggle";

const Home = () => {
  const router = useRouter();
  const handleClick = () => router.push("/about");
  const [isVisible, setIsVisible] = useToggle(false);
  return (
    <div className="container">
      {isVisible ? (
        <motion.div
          className="box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ) : (
        <div className="box"></div>
      )}
      <h1>DEVFEST 2023</h1>
      <button onClick={handleClick}>About Page</button>
      <button onClick={setIsVisible}>
        {isVisible ? "STOP ANIMATION" : "ANIMATE"}{" "}
      </button>
    </div>
  );
};

export default Home;
