import Styles from "./styles.module.scss";
import Image from "next/image";
import Ticker from "framer-motion-ticker";

import lacaseraLogo from "../../../assets/imgs/lacasera.png";
import shiipLogo from "../../../assets/imgs/shiip.png";
import cardifyLogo from "../../../assets/imgs/cardify.png";
import altschoolLogo from "../../../assets/imgs/altschool.png";
import codemagicLogo from "../../../assets/imgs/codemagic.svg";
import aitiLogo from "../../../assets/imgs/aiti.png";
import googleLogo from "../../../assets/imgs/google.png";
// import ghLogo from "../../../assets/imgs/gh.svg";

const LogosCarousel = () => {
  return (
    <>
      <div className={Styles["devfest__carousel__wrapper"]}>
        <div className={Styles["devfest__carousel"]}>
          <Ticker duration={30}>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={lacaseraLogo}
                alt="Lacasera logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={shiipLogo}
                alt="Shiip logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={cardifyLogo}
                alt="cardify logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={altschoolLogo}
                alt="AltSchool logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={codemagicLogo}
                alt="Codemagic logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={aitiLogo}
                alt="Aiti logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={googleLogo}
                alt="Google logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </Ticker>
        </div>
      </div>
    </>
  );
};

export default LogosCarousel;
