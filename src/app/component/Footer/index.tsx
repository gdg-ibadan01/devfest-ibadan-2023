import Magnetic from "../Magnetic";
import { useRef } from "react";
import Pills from "../Pills";
import Styles from "./styles.module.scss";

import { motion } from "framer-motion";

const Footer = () => {
  const constraintsRef = useRef(null);

  return (
    <div className={Styles.container}>
      <header className={Styles["container__header"]}>
        <h1>Follow Us</h1>
        <ul className={Styles["container__header--links"]}>
          <Magnetic>
            <li>
              <a href="#">Speakers</a>
            </li>
          </Magnetic>
          <Magnetic>
            <li>
              <a href="#">Register</a>
            </li>
          </Magnetic>
          <Magnetic>
            <li>
              <a href="#">Sponsors</a>
            </li>
          </Magnetic>
          <Magnetic>
            <li>
              <a href="#">Volunteers</a>
            </li>
          </Magnetic>
        </ul>
      </header>
      <footer className={Styles["container__footer"]} >
        <aside className={Styles["container__footer--socials"]} ref={constraintsRef}>
          <motion.section drag dragConstraints={constraintsRef}>
            <Pills text="TWITTER" bgColor="var(--success)" />
          </motion.section>
          <motion.section drag dragConstraints={constraintsRef}>
            <Pills text="FACEBOOK" bgColor="var(--warning)" />
          </motion.section>
          <motion.section drag dragConstraints={constraintsRef}>
            <Pills text="INSTAGRAM" bgColor="var(--danger)" />
          </motion.section>
        </aside>
        <aside className={Styles["container__footer--copyright"]}>
          <p>&copy; gdgibadan2023</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
