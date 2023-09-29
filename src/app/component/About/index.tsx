/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from "react";
import Pills from "../Pills";
import Styles from "./styles.module.scss";
import Button from "../Button";

import { motion } from "framer-motion";

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

  useEffect(() => {
    const randomColorArray = Array.from({ length: skills.length }, () => {
      const randomIndex = Math.floor(Math.random() * colorVariables.length);
      return colorVariables[randomIndex];
    });

    setRandomColors(randomColorArray);
  }, []);

  const sponsorsPage = () => {
    var anchor = document.createElement('a');
    anchor.target = "_blank";
    anchor.href = "https://drive.google.com/drive/folders/15Hhrb7A_fypcxiIOuvneVgehYxwSh2rh?usp=drive_link";
    anchor.click();
  }

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
        <Button onClick={() => sponsorsPage()}>Become a Sponsor</Button>
      </section>
      <section className={Styles["container__pills"]} ref={constraintsRef}>
        {skills.map((data, idx) => (
          <motion.div
            key={idx}
            className={Styles["container__pills--el"]}
            drag
            dragConstraints={constraintsRef}
          >
            <Pills text={data} bgColor={`var(${randomColors[idx]})`} />
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default About;
