import Styles from "./styles.module.scss";

const EventDate = ({ devfestHeroEnter, devfestLeave }: {devfestHeroEnter: any, devfestLeave: any}) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper} onMouseEnter={devfestHeroEnter} onMouseLeave={devfestLeave}>
        <p> December 3rd 2024 - December 3rd 2024 </p>
        <p>ICC UI Second Gate - ICC UI Second Gate</p>
      </div>
    </div>
  );
};

export default EventDate;
