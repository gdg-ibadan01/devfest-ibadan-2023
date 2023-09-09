/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Pills from "../Pills";
import Styles from "./styles.module.scss";

const colorVariables = ["--primary", "--warning", "--success", "--danger"];

const skills = [
  "BUSINESS ANALYSIS",
  "DATA SCIENTIST",
  "SOFTWARE DEVELOPER",
  "NFT ARTIST",
  "PRODUCTS MANAGERS",
  "TECHNICAL WRITER",
  "GRAPHICS DESIGNER",
  "CYBER SECURITY",
  "AUDITORS",
  "UX RESEARCHERS",
  "CYBER SECURITY",
];

const About = () => {
  const [randomColors, setRandomColors] = useState<string[]>([]);

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
      </section>
      <section className={Styles["container__pills"]}>
        {skills.map((data, idx) => (
          <div key={idx} className={Styles["container__pills--el"]}>
            <Pills text={data} bgColor={`var(${randomColors[idx]})`} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
