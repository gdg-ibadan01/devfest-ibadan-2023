import React from "react";
import Styles from "./styles.module.scss";
import LinkedinIcon from "../../../assets/svgs/linkedin.svg";
import TwitterIcon from "../../../assets/svgs/twitter.svg";
import InstagramIcon from "../../../assets/svgs/instagram.svg";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";

export interface SpeakerInfoProps {
  data: {
    name: string;
    image: StaticImageData;
    role: string;
    company: string;
    color: string;
    about: any;
    linkedin: string;
    twitter: string;
    topic: string;
    slideLink: string;
    margin?: string;
  };
}

const SpeakerInfo: React.FC<SpeakerInfoProps> = ({ data }) => {
  return (
    <section className={Styles.speaker__info}>
      <div className={Styles.speaker__header}>
        <h2>About the Speaker</h2>
      </div>
      <div className={Styles.speaker__content}>
        <section dangerouslySetInnerHTML={{ __html: data.about }} />
      </div>
      <div className={Styles.social__icons__container}>
        <a href={data.linkedin}>
          <Image src={LinkedinIcon} alt="linkedin icon" />
        </a>
        <a href={data.twitter}>
          <Image src={TwitterIcon} alt="Twitter icon" />
        </a>
      </div>
      <section className={Styles.speaker__talk__details}>
        {/* <div className={Styles.agenda}>
          <h2>Agenda</h2>
          <div>
            <p>8:00AM to 9:00AM Dec 3rd 2023</p>
          </div>
        </div> */}
        <div className={Styles.topic}>
          <h2>Topic: {data.topic} </h2>
        </div>
        <div>
          <a href={data.slideLink} target="_blank">
            <Button bgColor="#4285F4">Download Slide</Button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default SpeakerInfo;
