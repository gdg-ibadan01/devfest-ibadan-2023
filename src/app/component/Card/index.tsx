import Image, { StaticImageData } from "next/image";
import Styles from "./styles.module.scss";
import TwitterIcon from "../../../assets/svgs/twitter.svg";
import LinkedinIcon from "../../../assets/svgs/linkedin.svg";

import { FC } from "react";

export interface cardInterface {
  data: {
    name: string;
    role: string;
    company: string;
    color: string;
    image: StaticImageData;
    twitterUrl?: string;
    linkedinUrl?: string;
    height?: string;
    margin?: string;
    objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  };
  title: string;
}

const Card: FC<cardInterface> = ({ data, title }) => {
  const {
    name,
    role,
    company,
    color,
    image,
    twitterUrl,
    linkedinUrl,
    height,
    objectFit,
    margin,
  } = data;

  return (
    <>
      {title === "speaker" && (
        <div
          className={`${Styles["speaker--card"]} ${Styles.big}`}
          style={{ backgroundColor: color }}
        >
          <div className={Styles["speaker--card-image"]}>
            <Image src={image} alt={`${name} headshot`} />
          </div>
          <div className={Styles["speaker--card-profile"]}>
            <h3>{name}</h3>
            <p>{`${role}, ${company}`}</p>
          </div>
          <div className={Styles["speaker--card-socials"]}>
            <div className={Styles["socials"]}>
              <a href="!#" className={Styles["social"]}>
                <Image src={TwitterIcon} alt="Twitter Icon" />
              </a>
              <a href="!#" className={Styles["social"]}>
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </a>
            </div>
          </div>
        </div>
      )}

      {title === "organizer" && (
        <div
          className={`${Styles["speaker--card"]} ${Styles.medium}`}
          style={{
            backgroundColor: "#E9ECED",
            display: "flex",
          }}
        >
          <div className={Styles["organizer--card-image"]}>
            <Image
              src={image}
              alt={`${name} headshot`}
              style={{
                objectFit: `${objectFit || "cover"}`,
                height: `${height ? height + "px" : "100%"}`,
                width: "100%",
                margin: `${margin ? margin : "0"}`,
              }}
              // className={Styles["organizer--image"]}
            />
          </div>
          <div className={Styles["organizer--card-profile"]}>
            <h3>{name}</h3>
            <p>{`${role}${company !== "" ? "," : ""} ${company}`}</p>
          </div>
          <div className={Styles["organizer--card-socials"]}>
            <div className={Styles["socials"]}>
              <a href={twitterUrl} className={Styles["social"]} target="_blank">
                <Image src={TwitterIcon} alt="Twitter Icon" />
              </a>
              <a
                href={linkedinUrl}
                className={Styles["social"]}
                target="_blank"
              >
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
