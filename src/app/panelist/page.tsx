"use client";

import BackButton from "../component/BackButton";
import TextCarousel from "../component/Carousel/TextCarousel";
import Footer from "../component/Footer";
import PanelistList from "./PanelistList";
import Styles from "./styles.module.scss";

const Panelist = () => {
  return (
    <div className={Styles.container}>
      <TextCarousel />
      <div className={Styles["container__content"]}>
        <BackButton />
        <PanelistList />
      </div>
      <Footer />
    </div>
  );
};

export default Panelist;
