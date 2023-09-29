import Magnetic from "../Magnetic";
import { useRef } from "react";
import Pills from "../Pills";
import Styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const constraintsRef = useRef(null);

  const handleRoute = (url: string) => window.open(`${url}`, "_blank");

  return (
    <div className={Styles.container}>
      <header className={Styles["container__header"]}>
        <h1>Follow Us</h1>
        <ul className={Styles["container__header--links"]}>
          <Magnetic>
            <li>
              <a
                href="https://sessionize.com/devfest-ibadan-2023/"
                target="_blank"
              >
                Speakers
              </a>
            </li>
          </Magnetic>
          <Magnetic>
            <li>
              <a
                href="https://gdg.community.dev/events/details/google-gdg-ibadan-presents-devfest-ibadan-2023/"
                target="_blank"
              >
                Register
              </a>
            </li>
          </Magnetic>
          <Magnetic>
            <li>
              <a
                href="https://drive.google.com/drive/folders/15Hhrb7A_fypcxiIOuvneVgehYxwSh2rh?usp=drive_link"
                target="_blank"
              >
                Sponsors
              </a>
            </li>
          </Magnetic>
          <Magnetic>
            <li>
              <a href="#">Volunteers</a>
            </li>
          </Magnetic>
        </ul>
      </header>
      <footer className={Styles["container__footer"]}>
        <aside
          className={Styles["container__footer--socials"]}
          ref={constraintsRef}
        >
          <motion.section drag dragConstraints={constraintsRef}>
            <Pills
              text="TWITTER"
              bgColor="var(--success)"
              handleRoute={() => handleRoute("https://twitter.com/gdgibadan")}
            />
          </motion.section>
          <motion.section drag dragConstraints={constraintsRef}>
            <Pills
              text="FACEBOOK"
              bgColor="var(--warning)"
              handleRoute={() =>
                handleRoute("https://web.facebook.com/gdgibadan1/")
              }
            />
          </motion.section>
          <motion.section drag dragConstraints={constraintsRef}>
            <Pills
              text="INSTAGRAM"
              bgColor="var(--danger)"
              handleRoute={() =>
                handleRoute("https://www.instagram.com/gdgibadan/")
              }
            />
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
