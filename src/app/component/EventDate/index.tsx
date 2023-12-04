import Ticker from "framer-motion-ticker";
import Styles from "./styles.module.scss";
import Button from "../Button";
import Link from "next/link";

const EventDate = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Ticker duration={60}>
          <p> December 2nd 2023 - December 2rd 2023 &nbsp; </p>
          <p> December 2nd 2023 - December 2nd 2023 &nbsp; </p>
        </Ticker>
        <Ticker duration={30}>
          <p>
            Kakanfo Inn & Conference Center - Kakanfo Inn & Conference Center
            &nbsp;
          </p>
          <p>
            Kakanfo Inn & Conference Center - Kakanfo Inn & Conference Center
            &nbsp;
          </p>
        </Ticker>
      </div>
      {/* <div className={Styles.actionBtnsContainer}>
        <a href="mailto:info@gdgibadan.com">
          <Button bgColor="#4285F4"> Become a Sponsor </Button>
        </a>
        <Link href="/volunteer">
          <Button bgColor="#F9AB00"> Become a volunteer </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default EventDate;
