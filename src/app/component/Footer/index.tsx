import Pills from "../Pills";
import Styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <header className={Styles["container__header"]}>
        <h1>Follow Us</h1>
        <ul className={Styles["container__header--links"]}>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">Volunteers</a>
          </li>
        </ul>
      </header>
      <footer className={Styles["container__footer"]}>
        <aside className={Styles["container__footer--socials"]}>
          <section>
            <Pills text="TWITTER" bgColor="var(--success)" />
          </section>
          <section>
            <Pills text="FACEBOOK" bgColor="var(--warning)" />
          </section>
          <section>
            <Pills text="INSTAGRAM" bgColor="var(--danger)" />
          </section>
        </aside>
        <aside className={Styles["container__footer--copyright"]}>
          <p>&copy; gdgibadan2023</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
