import { FC } from "react";
import Styles from "./styles.module.scss";

interface BreakoutSessionInterface {
  data: {
    hallonetopic: string;
    halltwotopic: string;
    hallthreetopic: string;
  };
}

const BreakoutSession: FC<BreakoutSessionInterface> = ({ data }) => {
  const { hallonetopic, hallthreetopic, halltwotopic } = data;
  return (
    <div className={Styles.container}>
      <section id="halls" className={Styles["container__section"]}>
        <p>{hallonetopic}</p>
        <span id={Styles["hall1"]}>Hall&nbsp;1</span>
      </section>
      <section id="halls" className={Styles["container__section"]}>
        <p>{halltwotopic}</p>
        <span id={Styles["hall2"]}>Hall&nbsp;2</span>
      </section>
      <section id="halls" className={Styles["container__section"]}>
        <p>{hallthreetopic}</p>
        <span id={Styles["hall3"]}>Hall&nbsp;3</span>
      </section>
    </div>
  );
};

export default BreakoutSession;
