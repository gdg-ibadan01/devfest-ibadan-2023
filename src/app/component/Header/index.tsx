import React from "react";
import Image from "next/image";
import Styles from "./styles.module.scss";
import arrowIcon from '../../../assets/svgs/diagonal-arrow.svg'

const Header = () => {
  const headerTexts = [1,2,3,4]
  return (
    <header className={Styles.container}>
      {headerTexts.map((item, index) => <HeaderItem key={index} />)}
    </header>
  );
};

export default Header;

export const HeaderItem = () => {
  return (
    <div className={Styles.headerItem}>
      <p className={Styles.headerText}>Devfest ibadan 2023// Dec Sat 9th</p>
      <Image src={arrowIcon} alt='diagonal arrow icon' className={Styles.headerIcon} />
    </div>
  );
}
