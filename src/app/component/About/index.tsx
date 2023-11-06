/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from "react";
import Pills from "../Pills";
import Styles from "./styles.module.scss";
import Button from "../Button";

import { motion, useMotionValue } from "framer-motion";

const colorVariables = ["--primary", "--warning", "--success", "--danger"];

const skills = [
  "BUSINESS ANALYST",
  "DATA SCIENTIST",
  "SOFTWARE DEVELOPER",
  "CLOUD ARCHITECT",
  "PRODUCTS MANAGERS",
  "TECHNICAL WRITER",
  "PRODUCT DESIGNER",
  "CYBER SECURITY",
  "AUDITORS",
  "UX RESEARCHERS",
  "CYBER SECURITY",
];

const About = () => {
  const [randomColors, setRandomColors] = useState<string[]>([]);
  const constraintsRef = useRef(null);
  const rotation = useMotionValue(-10);

  useEffect(() => {
    const randomColorArray = Array.from({ length: skills.length }, () => {
      const randomIndex = Math.floor(Math.random() * colorVariables.length);
      return colorVariables[randomIndex];
    });

    setRandomColors(randomColorArray);
  }, []);

  return (
    <div className={Styles["container"]}>
      <section className={Styles["container__text"]}>
        <h1>What is devfest?</h1>
        <p>
          DevFest is an annual decentralized tech conference hosted by the
          Google Developer Groups (GDG) community. GDGs host these events around
          the globe. DevFest 2023 marked the 12th year of DevFest and represents
          the beginning of the second decade of the GDG community. Through
          DevFest, you can continue to explore how Google's suite of developer
          tools can expand the impact of local tech professionals and developers
          like you around the world. Whether you're passionate about finding new
          opportunities, elevating your knowledge on the latest Google developer
          tools, or exploring how to use Google technologies to generate social
          and economic impact, DevFest offers an amazing platform for developers
          to connect locally, learn, and build on Google's tools.
        </p>
        <a href="mailto:info@gdgibadan.com">
          <Button>Become a Sponsor</Button>
        </a>
      </section>
      <section className={Styles["container__pills"]} ref={constraintsRef}>
        {skills.map((data, idx) => (
          <div key={idx} className={Styles["container__pills--el"]}>
            <motion.div drag dragConstraints={constraintsRef}>
              <Pills text={data} bgColor={`var(${randomColors[idx]})`} />
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
