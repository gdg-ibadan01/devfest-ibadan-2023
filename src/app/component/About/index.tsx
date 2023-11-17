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
          DevFest, an annual decentralised tech conference, empowers digital creatives to unlock cutting-edge ideas, discover new interests, and network with like-minded techies. Hosted by the Google Developer Groups (GDG) community, DevFest celebrated its 12th year in 2023, marking the commencement of the second decade for GDG.
        </p>
        <p>
          DevFest, a catalyst for exploring Google's suite of developer tools, propels the impact of local tech professionals worldwide. Whether you seek new opportunities, aim to enhance your knowledge of the latest Google developer tools, or aspire to leverage Google technologies for social and economic impact, DevFest provides an unparalleled platform for developers to connect locally, learn, and innovate.

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
