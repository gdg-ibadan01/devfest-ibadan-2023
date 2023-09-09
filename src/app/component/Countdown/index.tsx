import Styles from "./styles.module.scss";
import EventDate from "../EventDate";

const Countdown = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles["container__title"]}>The Countdown</h1>
      <div className={Styles["container__countdown"]}>
        <span>
          <h1>04</h1>
          <p>Months</p>
        </span>
        <span>
          <h1>00</h1>
          <p>Days</p>
        </span>
        <span>
          <h1>01</h1>
          <p>Hours</p>
        </span>
        <span>
          <h1>03</h1>
          <p>Minutes</p>
        </span>
        <span>
          <h1>04</h1>
          <p>Seconds</p>
        </span>
      </div>
      <EventDate />
    </div>
  );
};

export default Countdown;
