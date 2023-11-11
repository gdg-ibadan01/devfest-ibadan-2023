import Image, { StaticImageData } from "next/image";
import Styles from "./styles.module.scss";
import TwitterIcon from "../../../assets/svgs/twitter.svg";
import LinkedinIcon from "../../../assets/svgs/linkedin.svg";

import { FC } from "react";

interface cardInterface {
  data: {
    name: string;
    role: string;
    company: string;
    color: string;
    image: StaticImageData;
    twitterUrl?: string;
    linkedinUrl?: string;
    height?: string;
  };
  title: string;
}

const Card: FC<cardInterface> = ({ data, title }) => {
  const { name, role, company, color, image, twitterUrl, linkedinUrl, height } =
    data;

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
          <div
            className={Styles["organizer--card-image"]}
            style={{ marginTop: "auto" }}
          >
            <Image
              src={image}
              alt={`${name} headshot`}
              style={{
                objectFit: "cover",
                height: `${height}px`,
                // height: "100%",
                width: "100%",
              }}
              // className={Styles["organizer--image"]}
            />

            {/* <Image src={image} alt={`${name} headshot`} className={Styles["organizer--image"]} /> */}
          </div>
          <div className={Styles["organizer--card-profile"]}>
            <h3>{name}</h3>
            <p>{`${role}, ${company}`}</p>
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
