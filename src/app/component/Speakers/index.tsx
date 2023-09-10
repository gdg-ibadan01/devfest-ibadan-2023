import Styles from "./styles.module.scss";

import Card from "../Card";
import Speaker1 from "../../../assets/imgs/speakers/speaker1.png";
import Speaker2 from "../../../assets/imgs/speakers/speaker2.png";
import Speaker3 from "../../../assets/imgs/speakers/speaker3.png";
import Speaker4 from "../../../assets/imgs/speakers/speaker4.png";

const Speakers = () => {
    const speakers = [
        {
            name: "KHAN DANIELS",
            color: "var(--primary)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker1
        },
        {
            name: "KHAN DANIELS",
            color: "var(--warning)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker2
        },
        {
            name: "KHAN DANIELS",
            color: "var(--danger)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker3
        },
        {
            name: "KHAN DANIELS",
            color: "var(--success)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker4
        },
        {
            name: "KHAN DANIELS",
            color: "var(--primary)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker1
        },
        {
            name: "KHAN DANIELS",
            color: "var(--warning)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker2
        },
        {
            name: "KHAN DANIELS",
            color: "var(--danger)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker3
        },
        {
            name: "KHAN DANIELS",
            color: "var(--success)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker4
        },
        {
            name: "KHAN DANIELS",
            color: "var(--primary)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker1
        },
        {
            name: "KHAN DANIELS",
            color: "var(--warning)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker2
        },
        {
            name: "KHAN DANIELS",
            color: "var(--danger)",
            role: "Product Designer",
            company: "Heyfood",
            image: Speaker3
        },
    ]
    const organizers = [
        {
            name: "TIAMIYU ABIDEMI",
            color: "var(--primary)",
            role: "GDG Ibadan Lead",
            company: "Aiti",
            image: Speaker1
        },
        {
            name: "JOSHUA OLAJIDE",
            color: "var(--warning)",
            role: "GDG Ibadan Co-Lead",
            company: "ARM GROUP",
            image: Speaker2
        },
        {
            name: "BASHEEROH AKINPELU",
            color: "var(--danger)",
            role: "",
            company: "WTM Ibadan Lead",
            image: Speaker3
        },
        {
            name: "Wuraola Akinlade",
            color: "var(--success)",
            role: "WTM Ibadan Co-Lead",
            company: "",
            image: Speaker4
        },
        {
            name: "TOBI OLADUNJOYE",
            color: "var(--primary)",
            role: "GDG Ibadan Design Lead",
            company: "",
            image: Speaker1
        },
    ]
    return (
        <>
            <div className={Styles["container"]}>
                <div className={Styles["speakers__wrapper"]}>
                    <div className={`${Styles.curve} ${Styles.left}`}></div>
                    <div className={`${Styles.curve} ${Styles.right}`}></div>
                    <div className={Styles["speakers__content"]}>
                        <div className={Styles["speakers__content--title"]}>
                            <h1>Event Speakers</h1>
                        </div>
                    </div>
                    <div className={Styles["speakers__cards"]}>
                        {speakers.map((speaker, index) => (
                            <Card key={index} data={speaker} title={"speaker"} />
                        ))}
                        <div className={`${Styles["speaker--card"]} ${Styles.big} ${Styles.bas}`} >
                            <span className="__icon wh-48">
                                <i className="plus--icon"></i>
                            </span>
                            <h3>BECOME A SPEAKER</h3>
                        </div>
                    </div>

                </div>
                <div className={Styles["organizers__wrapper"]}>
                    <div className={Styles["organizers__content"]}>
                        <div className={Styles["organizers__content--title"]}>
                            <h1>The organisers</h1>
                            <p>The Special Event Company Team</p>
                        </div>
                    </div>
                    <div className={Styles["organizers__cards"]}>
                    {organizers.map((organizer, index) => (
                        <Card key={index} data={organizer} title={"organizer"} />
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speakers;