import Styles from "./styles.module.scss";
import Image from "next/image";
import Ticker from "framer-motion-ticker";

import cardifyLogo from "../../../assets/imgs/cardify.png";
import codemagicLogo from "../../../assets/imgs/codemagic.svg";
import aitiLogo from "../../../assets/imgs/aiti.png";
import googleLogo from "../../../assets/imgs/google.png";
import blockchainLogo from "../../../assets/imgs/blockchain.png";
import integraflowLogo from "../../../assets/imgs/integraflow.png";

const LogosCarousel = () => {
  return (
    <>
      <div className={Styles["devfest__carousel__wrapper"]}>
        <div className={Styles["devfest__carousel"]}>
          <Ticker duration={30}>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={cardifyLogo}
                alt="cardify logo"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={codemagicLogo}
                alt="Codemagic logo"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={aitiLogo}
                alt="Aiti logo"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={googleLogo}
                alt="Google logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className={Styles["logo__carousel"]}>
              <Image
                src={blockchainLogo}
                alt="Blockchain logo"
                style={{ width: "150px", height: "150px" }}
              />
            </div>

            <div className={Styles["logo__carousel"]}>
              <Image
                src={integraflowLogo}
                alt="Integral Flow logo"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          </Ticker>
        </div>
      </div>
    </>
  );
};

export default LogosCarousel;
