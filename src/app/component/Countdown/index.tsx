"use client";

import { useState, useEffect } from "react";
import Styles from "./styles.module.scss";
import EventDate from "../EventDate";

const Countdown = () => {
  // Define the target date (December 2nd, 2023)
  const targetDate = new Date("2023-12-02T00:00:00Z").getTime();

  // Initialize state variables for the countdown values
  const [months, setMonths] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        setMonths(0);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const oneSecond = 1000;
        const oneMinute = oneSecond * 60;
        const oneHour = oneMinute * 60;
        const oneDay = oneHour * 24;
        const oneMonth = oneDay * 30;

        setMonths(Math.floor(timeDifference / oneMonth));
        setDays(Math.floor((timeDifference % oneMonth) / oneDay));
        setHours(Math.floor((timeDifference % oneDay) / oneHour));
        setMinutes(Math.floor((timeDifference % oneHour) / oneMinute));
        setSeconds(Math.floor((timeDifference % oneMinute) / oneSecond));
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div className={Styles.container}>
      <h1 className={Styles["container__title"]}>
        {"The Countdown"}
      </h1>
      <div className={Styles["container__countdown"]}>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>{months.toString().padStart(2, "0")}</h1>
          <p>Months</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>{days.toString().padStart(2, "0")}</h1>
          <p>Days</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>{hours.toString().padStart(2, "0")}</h1>
          <p>Hours</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>{minutes.toString().padStart(2, "0")}</h1>
          <p>Minutes</p>
        </span>
        <span className={Styles["container__countdown--wrapper"]}>
          <h1>{seconds.toString().padStart(2, "0")}</h1>
          <p>Seconds</p>
        </span>
      </div>
      <EventDate />
    </div>
  );
};

export default Countdown;
