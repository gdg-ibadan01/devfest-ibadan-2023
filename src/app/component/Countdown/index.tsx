import Styles from "./styles.module.scss";
import EventDate from "../EventDate";

const Countdown = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles["container__title"]}>
        Tick-Tock: The wait is almost over
      </h1>
      <div className={Styles["container__countdown"]}>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>04</h1>
          <p>Months</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>00</h1>
          <p>Days</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>01</h1>
          <p>Hours</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>03</h1>
          <p>Minutes</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>04</h1>
          <p>Seconds</p>
        </span>
      </div>
      <EventDate />
    </div>
  );
};

export default Countdown;
