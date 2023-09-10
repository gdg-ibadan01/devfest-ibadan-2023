import { FC } from "react";
import Styles from "./styles.module.scss";

interface iPills {
  text: string;
  bgColor?: string;
}

const Pills: FC<iPills> = ({ text, bgColor }) => {
  return (
    <div className={Styles.container} style={{ background: bgColor }}>
      <p>{text || "NFT ARTIST"}</p>
    </div>
  );
};

export default Pills;
