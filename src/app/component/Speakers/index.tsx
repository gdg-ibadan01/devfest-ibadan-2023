import { FC } from "react";
import Styles from "./styles.module.scss";
import Card from "../Card";
import Speaker1 from "@/assets/imgs/speakers/speaker1.png";
import Speaker2 from "@/assets/imgs/speakers/speaker2.png";
import Speaker3 from "@/assets/imgs/speakers/speaker3.png";
import Speaker4 from "@/assets/imgs/speakers/speaker4.png";
import Speaker5 from "@/assets/imgs/speakers/speaker5.png";

import Speaker11 from "@/assets/imgs/speakers/speaker11.png";
import Speaker21 from "@/assets/imgs/speakers/speaker21.png";
import Speaker31 from "@/assets/imgs/speakers/speaker31.png";
import Speaker41 from "@/assets/imgs/speakers/speaker41.png";
import ComingSoonCard from "../ComingSoonCard";
import Agenda from "../Agenda";
import Button from "../Button";
import Image from "next/image";
import GreenDevfest from "@/assets/imgs/devfest/green-devfest.png";
import BlueDevfest from "@/assets/imgs/devfest/blue-devfest.png";
import YellowDevfest from "@/assets/imgs/devfest/yellow-devfest.png";
import RedDevfest from "@/assets/imgs/devfest/red-devfest.png";

interface iSpeaker {
  entered?: () => void;
  leave?: () => void;
}

const Speakers: FC<iSpeaker> = ({ entered, leave }) => {
  const speakers = [
    {
      name: "KHAN DANIELS",
      color: "var(--primary)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker11,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--warning)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker21,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--danger)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker31,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--success)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker41,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--warning)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker11,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--primary)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker21,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--success)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker31,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--danger)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker41,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--danger)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker11,
    },
    {
      name: "KHAN DANIELS",
      color: "var(--warning)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker21,
    },
    // {
    //   name: "KHAN DANIELS",
    //   color: "var(--primary)",
    //   role: "Product Designer",
    //   company: "Heyfood",
    //   image: Speaker31,
    // },
  ];
  const organizers = [
    {
      name: "ABIDEMI TIAMiYU",
      color: "var(--primary)",
      role: "GDG Ibadan Lead",
      company: "Aiti",
      image: Speaker1,
      twitterUrl: "https://twitter.com/Eeskay01",
      linkedinUrl: "https://www.linkedin.com/in/tiamiyu-sikiru-abidemi/",
    },
    {
      name: "JOSHUA OLAJIDE",
      color: "var(--warning)",
      role: "GDG Ibadan Co-Lead",
      company: "ARM GROUP",
      image: Speaker2,
      twitterUrl: "https://twitter.com/olatojosh",
      linkedinUrl: "https://www.linkedin.com/in/joshtom/",
    },
    {
      name: "BASHEEROH AKINPELU",
      color: "var(--danger)",
      role: "WTM Ibadan Lead",
      company: "",
      image: Speaker3,
      twitterUrl: "https://x.com/basheeroha?s=11&t=Jc4DmAKHJZJreybAmBsz5A",
      linkedinUrl: "https://www.linkedin.com/in/basheeroh-akinpelu-74923a198",
    },
    {
      name: "Wuraola Akinlade",
      color: "var(--success)",
      role: "WTM Ibadan Co-Lead",
      company: "",
      image: Speaker4,
      twitterUrl: "https://twitter.com/wuraolakinlade",
      linkedinUrl: "https://www.linkedin.com/in/odunayo-akinlade/",
      height: "300",
    },
    {
      name: "TOBI OLADUNJOYE",
      color: "var(--primary)",
      role: "GDG Ibadan Design Lead",
      company: "",
      image: Speaker5,
      twitterUrl: "https://twitter.com/teathobi",
      linkedinUrl: "https://www.linkedin.com/in/teathobi",
    },
  ];

  const comingSoon = [
    {
      color: 'blue'
    },
    {
      color: 'yellow'
    },
    {
      color: 'green'
    },
    {
      color: 'red'
    },
    {
      color: 'green'
    },
    {
      color: 'red'
    },
    {
      color: 'blue'
    },
    {
      color: 'yellow'
    },
    {
      color: 'blue'
    },
    {
      color: 'yellow'
    },
    {
      color: 'green'
    },
  ]

  const devfestImages = [
    {
      image: BlueDevfest,
    },
    {
      image: RedDevfest,
    },
    {
      image: YellowDevfest,
    },
    {
      image: GreenDevfest,
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
            {comingSoon.map((item, index) => (
              <ComingSoonCard key={index} color={item.color} />
            ))}
            {/* {speakers.map((speaker, index) => (
              <Card key={index} data={speaker} title={"speaker"} />
            ))} */}
            <a
              href="https://sessionize.com/devfest-ibadan-2023/"
              target="_blank"
            >
              <div
                className={`${Styles["speaker--card"]} ${Styles.big} ${Styles.bas}`}
              >
                <span className="__icon wh-48">
                  <i className="plus--icon"></i>
                </span>
                <h3>BECOME A SPEAKER</h3>
              </div>
            </a>
          </div>
        </div>
        <div>
          <Agenda />
        </div>

        <div className={Styles["organizers__mainwrapper"]}>
          <div className={Styles["organizers__wrapper"]}>
            <div className={Styles["organizers__content"]}>
              <div className={Styles["organizers__content--title"]}>
                <h1>The organisers</h1>
                <p>Meet the Minds Behind the Magic</p>
              </div>
            </div>
            <div className={Styles["organizers__cards"]}>
              {organizers.map((organizer, index) => (
                <Card key={index} data={organizer} title={"organizer"} />
              ))}
            </div>
          </div>
        </div>

        <div className={Styles["volunteers__wrapper"]}>
          <div className={Styles["organizers__content"]}>
            <div className={Styles["organizers__content--title"]}>
              <h1>The Volunteers</h1>
              <p>Join like-minded developers from all levels in moving the tech community forward.</p>
            </div>
          </div>
          <div className={Styles["organizers__cards"]}>
            {speakers.map((organizer, index) => (
              <Card key={index} data={organizer} title={"organizer"} />
            ))}
          </div>
        </div>

        <div className={Styles.reminder__container}>
              <div className={Styles.reminder__heading}>
                <h2>Don’t forget why you are here</h2>
                <p>DevFest values inclusivity and diversity in knowledge and learning, to move the Tech community forward.</p>
              </div>
              <div className={Styles.devfest__images__container}>
                  {devfestImages.map((item, index) => <div key={index} className={Styles.devfest__image}><Image src={item.image} alt='devfest image' /></div>)}
              </div>
              <div className={Styles.button__container}>
                <Button bgColor='#4285F4'>
                  View photos from past event
                </Button>
              </div>
        </div>

      </div>
    </>
  );
};

export default Speakers;
