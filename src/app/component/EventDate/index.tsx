import Ticker from "framer-motion-ticker";
import Styles from "./styles.module.scss";

const EventDate = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Ticker duration={60}>
          <p> December 3rd 2024 - December 3rd 2023 &nbsp; </p>
          <p> December 3rd 2024 - December 3rd 2023 </p>
        </Ticker>
        <Ticker duration={30}>
          <p>ICC UI Second Gate - ICC UI Second Gate &nbsp;</p>
          <p>ICC UI Second Gate - ICC UI Second Gate</p>
        </Ticker>
      </div>
    </div>
  );
};

export default EventDate;
