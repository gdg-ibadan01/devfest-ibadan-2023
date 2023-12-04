/* eslint-disable react/no-unescaped-entities */
import Styles from "./styles.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp, appear, slideLeft } from "./animate";
import bottomLeftPicture from "../../../assets/imgs/bottom-left.png";
import topCenterPicture from "../../../assets/imgs/top-center.png";
import bottomRightPicture from "../../../assets/imgs/bottom-right.png";
import topRightPicture from "../../../assets/imgs/top-right.png";
import gdgIbadanLogo from "../../../assets/svgs/gdg-ibadan-logo.svg";
import Link from "next/link";

const DevfestHero = ({
  devfestEnter,
  devfestLeave,
}: {
  devfestEnter?: any;
  devfestLeave?: any;
}) => {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={Styles.landing}
    >
      <div className={Styles["devfesthero__wrapper"]}>
        <div className={Styles["nigeria__map"]}></div>
        <div
          className={`${Styles.bubble__picture__frame} ${Styles.bottom__left}`}
        >
          <motion.div variants={appear} initial="initial" animate="enter">
            <Image src={bottomLeftPicture} alt="devfest Ibadan past event" />
          </motion.div>
        </div>
        <div
          className={`${Styles.bubble__picture__frame} ${Styles.top__center}`}
        >
          <motion.div variants={appear} initial="initial" animate="enter">
            <Image src={topCenterPicture} alt="devfest Ibadan past event" />
          </motion.div>
        </div>
        <div
          className={`${Styles.bubble__picture__frame} ${Styles.bottom__right}`}
        >
          <motion.div variants={appear} initial="initial" animate="enter">
            <Image src={bottomRightPicture} alt="devfest Ibadan past event" />
          </motion.div>
        </div>
        <div
          className={`${Styles.bubble__picture__frame} ${Styles.top__right}`}
        >
          <motion.div variants={appear} initial="initial" animate="enter">
            <Image src={topRightPicture} alt="devfest Ibadan past event" />
          </motion.div>
        </div>
        <div className={Styles["devfesthero__container"]}>
          <div className={Styles["devfesthero"]}>
            <div className={Styles["logo__container"]}>
              <motion.div variants={slideUp} initial="initial" animate="enter">
                <Image src={gdgIbadanLogo} alt="GDG Ibadan Logo" />
              </motion.div>
            </div>
            <div className={Styles["content"]}>
              <div className={Styles["mask"]}>
                <motion.h1
                  variants={slideUp}
                  initial="initial"
                  animate="enter"
                  className={Styles["heading"]}
                >
                  The Most Anticipated
                </motion.h1>
                <motion.h1
                  variants={slideUp}
                  initial="initial"
                  animate="enter"
                  className={Styles["heading"]}
                >
                  Tech Gathering
                </motion.h1>
              </div>
              <div className={Styles["colored-texts-container"]}>
                <motion.h1
                  initial="initial"
                  animate={"enter"}
                  variants={slideLeft}
                  className={Styles["colored"]}
                >
                  <span className={Styles["primary"]}>D</span>
                  <span className={Styles["danger"]}>E</span>
                  <span className={Styles["warning"]}>V</span>
                  <span className={Styles["success"]}>F</span>
                  <span className={Styles["primary"]}>E</span>
                  <span className={Styles["warning"]}>S</span>
                  <span className={Styles["success"]}>T</span>
                  <span className={Styles["primary"]}>2</span>
                  <span className={Styles["danger"]}>0</span>
                  <span className={Styles["warning"]}>2</span>
                  <span className={Styles["success"]}>3</span>
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles["devfest__ctas__wrapper"]}>
        <div className={Styles["devfest__ctas"]}>
          <a
            className={`${Styles.devfest__cta} ${Styles.bas__warning}`}
            onMouseEnter={devfestEnter}
            onMouseLeave={devfestLeave}
            href="https://selar.co/m/gdg-ibadan1"
            target="_blank"
          >
            <h3>store</h3>
          </a>
          <Link
            className={`${Styles.devfest__cta} ${Styles.gt__primary}`}
            onMouseEnter={devfestEnter}
            onMouseLeave={devfestLeave}
            href="/panelist"
          >
            <h3>panelist'23</h3>
          </Link>
          <Link
            href="/volunteers"
            className={`${Styles.devfest__cta} ${Styles.bav__success}`}
            onMouseEnter={devfestEnter}
            onMouseLeave={devfestLeave}
          >
            <h3>volunteer'23</h3>
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default DevfestHero;
