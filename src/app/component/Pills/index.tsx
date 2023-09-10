import { FC } from "react";
import Styles from "./styles.module.scss";

interface iPills {
  text: string;
  bgColor?: string;
  padding?: string;
}

const Pills: FC<iPills> = ({ text, bgColor, padding }) => {
  return (
    <div
      className={Styles.container}
      style={{ background: bgColor, padding: padding }}
    >
      <p>{text || "NFT ARTIST"}</p>
    </div>
  );
};

export default Pills;
