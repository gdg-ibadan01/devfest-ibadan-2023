import React from 'react'
import Styles from './styles.module.scss'
import LinkedinIcon from '../../../assets/svgs/linkedin.svg'
import TwitterIcon from '../../../assets/svgs/twitter.svg'
import InstagramIcon from '../../../assets/svgs/instagram.svg'
import Image, {StaticImageData} from 'next/image'
import Button from '../Button'


interface SpeakerInfoProps {
  data: {
    name: string,
    image: StaticImageData,
    role: string,
    company: string,
    color: string,
  }
}

const SpeakerInfo: React.FC<SpeakerInfoProps> = ({data}) => {
  return (
    <section className={Styles.speaker__info}>
      <div className={Styles.speaker__header}>
        <h2>About the Speaker</h2>
      </div>
      <div className={Styles.speaker__content}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper volutpat sit vel sed nam nisi amet. In condimentum libero faucibus id tincidunt. Tellus hac id mi senectus vel libero. Fringilla aliquet dictum volutpat ultricies nunc sit. Eget mi consectetur purus enim semper sed pretium integer. Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor .Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor. sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper volutpat sit vel sed nam nisi amet. In condimentum libero faucibus id tincidunt. Tellus hac id mi senectus vel libero. Fringilla aliquet dictum volutpat ultricies nunc sit. Eget mi consectetur purus enim semper sed pretium integer. Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor .Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor. sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor
        </p>
      </div>
      <div className={Styles.social__icons__container}>
        <a href=""><Image src={LinkedinIcon} alt='linkedin icon' /></a>
        <a href=""><Image src={TwitterIcon} alt='Twitter icon' /></a>
      </div>
      <section className={Styles.speaker__talk__details}>
        <div className={Styles.agenda}>
          <h2>Agenda</h2>
          <div>
            <p>8:00AM to 9:00AM Dec 3rd 2023</p>
          </div>
        </div>
        <div className={Styles.topic}>
          <h2>Topic: Cloud computing & Virtualisation. </h2>
        </div>
        <div>
          <Button bgColor='#4285F4'>Download Slide</Button>
        </div>
      </section>
    </section>
  )
}

export default SpeakerInfo