import React from "react";
import Styles from "./styles.module.scss";
import { panelistData } from "./PanelistData";
import Card from "@/app/component/Card";

const PanelistList = () => {
  return (
    <div className={Styles["panelist__wrapper"]}>
      <div className={Styles["panelist__content"]}>
        <div className={Styles["panelist__content--title"]}>
          <h1>The Panelists</h1>
          <p>Experienced tech leaders sharing insights and perspectives</p>
        </div>
      </div>
      <div className={Styles["panelist__cards"]}>
        {panelistData.map((volunteer, index) => (
          <Card key={index} data={volunteer} title={"organizer"} />
        ))}
      </div>
    </div>
  );
};

export default PanelistList;
