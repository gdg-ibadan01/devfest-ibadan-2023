"use client";
import Styles from "./styles.module.scss";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideUp, textSlideUp } from "./animate";
import GdgIbadanLogo from "@/assets/svgs/gdg-ibadan-logo.svg";
import Image from "next/image";

const words = ["BACK", "BIGGER", "BETTER"];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  //   const phrase = "The Biggest tech event is here again_";
  const phrase = "Ibadan KINI SOOOO!";
  const container = useRef(null);
  const isInView = useInView(container);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 2000 : 2000
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={Styles.container}
      ref={container}
    >
      {dimension.width > 0 && (
        <>
          <div className={Styles.body}>
            <div className={Styles.masktitle}>
              <motion.div
                initial="initial"
                variants={textSlideUp}
                animate={isInView ? "open" : "closed"}
                exit={"closed"}
              >
                <Image
                  src={GdgIbadanLogo}
                  alt="gdg ibadan"
                  style={{
                    objectFit: "contain",
                    height: "auto",
                    width: "auto",
                  }}
                />
              </motion.div>
            </div>
            <p>
              {phrase.split(" ").map((word, idx) => {
                return (
                  <span key={idx} className={Styles.mask}>
                    <motion.span
                      initial="initial"
                      variants={textSlideUp}
                      custom={idx}
                      animate={isInView ? "open" : "closed"}
                      key={idx}
                      exit={"closed"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
