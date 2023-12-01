import Image, { StaticImageData } from "next/image";
import React from "react";
import Styles from "./styles.module.scss";
import Star from "../../../assets/svgs/bottom-star.svg";

interface SpeakerInfoProps {
  data: {
    name: string;
    image: StaticImageData;
    role: string;
    company: string;
    color: string;
  };
}

const SpeakerImageCard: React.FC<SpeakerInfoProps> = ({ data }) => {
  return (
    <div className={Styles.parent__container}>
      <div
        className={Styles.image__card__container}
        style={{
          backgroundColor: data.color,
        }}
      >
        <div className={Styles.image__container}>
          {/* {data.image && data.image.src && ( */}
          <Image
            src={data.image && data.image.src}
            alt={`${data.name}'s headshot`}
            className={Styles.image}
            width={100}
            height={100}
          />
          {/* )} */}
        </div>
        <div className={Styles.speaker__role}>
          <h2>{data.name}</h2>
          <p>
            {data.role}
            {data.company ? "," : null} {data.company}
          </p>
        </div>
      </div>
      <div className={Styles.star}>
        <Image src={Star} alt="star" />
      </div>
    </div>
  );
};

export default SpeakerImageCard;
