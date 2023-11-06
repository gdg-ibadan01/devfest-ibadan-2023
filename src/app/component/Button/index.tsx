import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import Styles from "./styles.module.scss";
import Magnetic from "../Magnetic";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  bgColor?: string;
}

const Button: FC<iButton> = ({ children, bgColor, ...props }) => {
  return (
    // <Magnetic>
      <div className={Styles.container}>
        <button
          {...props}
          className={Styles.button}
          style={{ backgroundColor: bgColor }}
        >
          {children}
        </button>
        <span></span>
      </div>
    // </Magnetic>
  );
};

export default Button;
