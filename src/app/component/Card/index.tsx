import Image, { StaticImageData } from "next/image";
import Styles from "./styles.module.scss";

import { FC } from "react";

interface cardInterface {
  data: {
    name: string;
    role: string;
    company: string;
    color: string;
    image: StaticImageData;
  };
  title: string;
}

const Card: FC<cardInterface> = ({ data, title }) => {
  const { name, role, company, color, image } = data;

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
        </div>
      )}

      {title === "organizer" && (
        <div
          className={`${Styles["speaker--card"]} ${Styles.medium}`}
          style={{ backgroundColor: "#E9ECED" }}
        >
          <div className={Styles["organizer--card-image"]}>
            <Image src={image} alt={`${name} headshot`} />
          </div>
          <div className={Styles["organizer--card-profile"]}>
            <h3>{name}</h3>
            <p>{`${role}, ${company}`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
