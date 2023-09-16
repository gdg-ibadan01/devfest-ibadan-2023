import { FC } from "react";
import Styles from "./styles.module.scss";

interface iPills {
  text: string;
  bgColor?: string;
  padding?: string;
  url?: string;
  handleRoute?: () => void;
}

const Pills: FC<iPills> = ({ text, bgColor, padding, handleRoute }) => {
  return (
    <div
      className={Styles.container}
      style={{ background: bgColor, padding: padding }}
      onClick={handleRoute}
    >
      <p>{text || "NFT ARTIST"}</p>
    </div>
  );
};

export default Pills;
