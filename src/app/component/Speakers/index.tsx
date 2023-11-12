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
import ope from "@/assets/imgs/speakers/ope.png";
import john from "@/assets/imgs/speakers/john.png";
import mubarak from "@/assets/imgs/speakers/mubarak.png";
import dammy from "@/assets/imgs/speakers/dammy.png";
import taiwo from "@/assets/imgs/speakers/taiwo.png";
import qudus from "@/assets/imgs/speakers/qudus.png";
import oyin from "@/assets/imgs/speakers/oyin.png";
import peter from "@/assets/imgs/speakers/peter.png";
import ava from '@/assets/imgs/speakers/ava.png'
import ComingSoonCard from "../ComingSoonCard";
import Agenda from "../Agenda";
import Button from "../Button";
import Image from "next/image";
import GreenDevfest from "@/assets/gifs/green-devfest.gif";
import BlueDevfest from "@/assets/gifs/blue-devfest.gif";
import YellowDevfest from "@/assets/gifs/yellow-devfest.gif";
import RedDevfest from "@/assets/gifs/red-devfest.gif";

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
      role: "Gdg Ibadan media and publicity Lead, WTM Ibadan Co-Lead",
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
    {
      name: "Akeem Qudus",
      color: "var(--primary)",
      role: "GDG Ibadan Co-Lead",
      company: "Huawei",
      image: qudus,
      twitterUrl: "https://x.com/holytechQudus",
      linkedinUrl: "https://www.linkedin.com/in/holytech",
    },
    {
      name: "Oyinkansola Awosan",
      color: "var(--warning)",
      role: "GDG Co-organizer and gbogbonise. 🙏🏾",
      company: "",
      image: oyin,
      twitterUrl: "http://twitter.com/tire_nii",
      linkedinUrl: "http://linkedin.com/in/oyinawosan",
    },
    {
      name: "Ipoola Peter",
      color: "var(--danger)",
      role: "GDG Co-organizer",
      company: "Fineswap",
      image: peter,
      twitterUrl: "https://x.com/Petersdy07",
      linkedinUrl: "https://www.linkedin.com/in/peter-ipoola",
    },
    {
      name: "John o. Ajeigbe",
      color: "var(--success)",
      role: "GDG Organizer",
      company: "AltSchool Africa",
      image: john,
      twitterUrl: "https://www.twitter.com/john_pels",
      linkedinUrl: "https://www.linkedin.com/in/ajeigbejohn",
      height: "300",
    },
    {
      name: "yusirat Alimi",
      color: "var(--primary)",
      role: "GDG Co-organizer",
      company: "",
      image: dammy,
      twitterUrl: "https://www.twitter.com/dammy_alimi",
      linkedinUrl: "https://www.linkedin.com/in/damilolaalimi",
    },
    {
      name: "Mubarak Adekunle",
      color: "var(--success)",
      role: "GDG Graphic Designer",
      company: "",
      image: mubarak,
      twitterUrl: "https://twitter.com/Mubarak_Osuolal",
      linkedinUrl: "https://www.linkedin.com/in/mubarak-adekunle-b8424b24a",
      height: "300",
    },
    {
      name: "Opeyemi Omole",
      color: "var(--primary)",
      role: "GDG Co-organizer (Social Media Manager) ",
      company: "",
      image: ope,
      twitterUrl: "https://x.com/opeomole/status/1673044119478841344?s=46",
      linkedinUrl: "https://www.linkedin.com/in/opeyemi-omole-951107144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Ajeigbe Taiwo Matthew",
      color: "var(--primary)",
      role: "GDG Designer",
      company: "",
      image: taiwo,
      twitterUrl: "https://twitter.com/_onnyx_?t=5iHic9wl2KLG3EXnYrDnxA&s=09",
      linkedinUrl: "https://www.linkedin.com/in/ajeigbe-taiwo-matthew-a61632219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Victoria Ayodeji",
      color: "var(--primary)",
      role: "GDG Co-orgainzer",
      company: "",
      image: ava,
      twitterUrl: "http://twitter.com/versatile_ava",
      linkedinUrl: "https://linkedin.com/in/victoria-7",
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

  const hosts = [
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
  ]

  const moderators = [
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
      color: "var(--primary)",
      role: "Product Designer",
      company: "Heyfood",
      image: Speaker11,
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
            {/* Hosts and moderators section */}
            <div className={Styles["moderatorsAndHosts__container"]}>
              <div className={Styles["hosts__container"]}>
                <div className={Styles["organizers__content"]}>
                  <div className={Styles["organizers__content--title"]}>
                    <h1>The Hosts</h1>
                    <p>From turning every event into a masterpiece of hospitality, meet the heartbeat behind the curtain, our exceptional host.</p>
                  </div>
                </div>
                <div className={Styles["organizers__cards"]}>
                  {hosts.map((organizer, index) => (
                    <Card key={index} data={organizer} title={"organizer"} />
                  ))}
                </div>
              </div>
              
              <div className={Styles["moderators__container"]}>
                <div className={Styles["organizers__content"]}>
                  <div className={Styles["organizers__content--title"]}>
                    <h1>The Moderators</h1>
                    <p>With a profound understanding of the tech landscape, meet the guiding voices steering our tech event, the brilliant moderators.</p>
                  </div>
                </div>
                <div className={Styles["organizers__cards"]}>
                  {moderators.map((organizer, index) => (
                    <Card key={index} data={organizer} title={"organizer"} />
                  ))}
                </div>
              </div>
            </div>
            {/* Hosts and moderators section */}
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
                  <p>View photos from past event</p>
                </Button>
              </div>
        </div>

      </div>
    </>
  );
};

export default Speakers;
