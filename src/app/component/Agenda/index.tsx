import React, { useState } from "react";
import Styles from "./styles.module.scss";
import TimeSlots from "./TimeSlots";
import Button from "../Button";
import BreakoutSession from "../BreakoutSession";

const Agenda = () => {
  const [activeSlot, setActiveSlot] = useState(0);
  const breakoutSession1 = {
    hallonetopic: "Open source: SDK, a way to get started - Talabi Opemipo",
    halltwotopic:
      "From code to market: how to build something people want - Arinze Onye",
    hallthreetopic:
      "Decoding Deep Learning: Does Big Data Always Matter? - Ibrahim Olagoke",
  };

  const breakoutSession2 = {
    hallonetopic:
      "Adversarial nibbler: improving the safety of generative AI models - Laju Etchie",
    halltwotopic:
      "Automate your mobile guild process with GitHub Action and Firebase App Distribution - Sodiq Ogunyeiwa",
    hallthreetopic:
      "Building trust: how to thorough testing enhances customer confidence - Fiyinfolu Adeyemi",
  };

  const breakoutSession3 = {
    hallonetopic: "From websites to dApps: JavaScript in Web3 - Idris Olubisi",
    halltwotopic:
      "Severless Superpowers with Google Cloud Functions - Yusuf Adeyemo",
    hallthreetopic: "The future of AR design - David Ajayi",
  };

  const breakoutSession4 = {
    hallonetopic:
      "Mastering UI Verification: Flutter Widget Testing Explained - Jamiu Okanlawon",
    halltwotopic:
      "Elevating your development workflow with Vertex AI: Exploring Prompt Engineering and LLMs - Seunfunmi Adegoke",
    hallthreetopic: "Building a NOM package in 2023 - and beyond - Caleb Olojo",
  };

  const breakoutSession5 = {
    hallonetopic:
      "Embracing the journey: evolving as frontend engineers - Seyi Oluwadare x Collins Enebeli ",
    halltwotopic:
      "DIY Startups: exploring creativity in venture creation - Udokanma Georgewil",
    hallthreetopic:
      "Supercharge your marketing operations with Bard AI - Toluwanimi Olubanke",
  };

  const slots = [
    {
      time: "8:00am - 9:00am",
      title: "Registration & Settling In",
      details: "",
    },
    {
      time: "9:00am - 9:15am",
      title: "Introduction",
      details: "",
    },
    {
      time: "9:15am- 9:30am",
      title: "Lightning talk",
      details:
        "The art of interaction: Navigating tech team dynamics - Ernest Owojori",
    },
    {
      time: "9:35am - 9:50am",
      title: "Lightning talk",
      details:
        "Bridging the gap between code and docs for technical writers - Damilola Ezekiel",
    },
    {
      time: "9:55am- 10:10am",
      title: "Lightning talk",
      details:
        "Becoming a world class developer: break through your comfort zone and reach your full potential - John O. Ajeigbe",
    },
    {
      time: "10:10am - 10:20am",
      title: "Game",
      details: "Game (Tongue Twister/ Chinese whisper ) (David X Shalom) ",
    },
    {
      time: "10:25am - 10:30am",
      title: "Sponsor 1",
      details: "Exhibition of Sponsor product",
    },
    {
      time: "10:35am- 11:05am",
      title: "1st Panel session",
      details:
        "Mastering Scale: Discovering and amplifying your company's unique levers of growth",
    },
    {
      time: "11:10am - 11:30am",
      title: "1st Keynote session",
      details: "Sodiq Akinjobi",
    },
    {
      time: "11:30am - 11:50am",
      title: "1st Breakout session (Presentation)",
      details: <BreakoutSession data={breakoutSession1} />,
    },
    {
      time: "11:55am - 12:20pm",
      title: "2nd Breakout session (Workshops)",
      details: <BreakoutSession data={breakoutSession2} />,
    },
    {
      time: "12:25am - 12:50pm",
      title: "3rd Breakout session (Workshops)",
      details: <BreakoutSession data={breakoutSession3} />,
    },
    {
      time: "12:55am - 1:20pm",
      title: "4th Breakout session (Workshops)",
      details: <BreakoutSession data={breakoutSession4} />,
    },
    {
      time: "1:25am - 1:45pm",
      title: "5th Breakout session (Presentation)",
      details: <BreakoutSession data={breakoutSession5} />,
    },
    {
      time: "1:50pm - 2:00pm",
      title: "Speed Networking - Shalom",
    },
    {
      time: "2:05pm - 2:25pm",
      title: "Lunch / Pictures",
    },
    {
      time: "2:30pm - 2:40pm",
      title: "Game",
      details: "Don’t answer yes or no / Put a finger down -  David x Toun",
    },
    {
      time: "2:40pm - 2:55pm",
      title: "Sponsor 2, 3 & 4",
    },
    {
      time: "3:00pm - 3:15pm",
      title: "Lightning talk",
      details: "The role of product design in Web3 adoption - Omomame Imafidon",
    },
    {
      time: "3:20pm - 3:40pm",
      title: "2nd keynote session",
      details: "The role of product design in Web3 adoption - Omomame Imafidon",
    },
    {
      time: "3:45pm - 4:15pm",
      title: "2nd panel session",
    },
    {
      time: "4:20pm - 4:30pm",
      title: "Event closure",
    },
  ];
  return (
    <div className={Styles.container}>
      <section className={Styles.content}>
        <div className={Styles["content__header"]}>
          <h2>The Agenda</h2>
          <p>Detailed schedule for the event</p>
        </div>
        <TimeSlots
          slots={slots}
          activeSlot={activeSlot}
          setActiveSlot={setActiveSlot}
        />
        <div className={Styles.break_out}>
          <h2>{slots[activeSlot]?.title}</h2>
          <>{slots[activeSlot]?.details}</>
        </div>
        {/* <Button bgColor="#4285F4">Get a Ticket</Button> */}
      </section>
    </div>
  );
};

export default Agenda;
