import React from 'react'
import Styles from  './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Speaker from "@/assets/imgs/speaker.png"
import Star from "@/assets/imgs/star.png"
// import TwitterIcon from "@/assets/svgs/twitter.svg";
import LinkedinIcon from "@/assets/svgs/linkedin.svg";
import { TwitterIcon, XIcon } from '@/icons';
import { LinkedInIcon } from '@/icons/linkedin-icon';
import Button from '../component/Button';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Speakers = () => {
  return (
    <>
    <Header />
    <div className={Styles.speakerContainer}>
        <div className={Styles.container}>
        <Link className={Styles.link} href={''}>Back to Homepage</Link>
        <div className={Styles.flexContainer}>
            <div className={Styles.imageFlex}>
                <Image src={Speaker} className={Styles.speakerImg} alt={''} />
                <Image src={Star} className={Styles.star} alt={''} />
            </div>
            <div className={Styles.aboutFlex}>
                <h2 className={Styles.heading}>About the Speaker</h2>
                <p className={Styles.details}>Lorem ipsum dolor sit amet consectetur. Semper volutpat sit vel sed nam nisi amet. In condimentum libero faucibus id tincidunt. Tellus hac id mi senectus vel libero. Fringilla aliquet dictum volutpat ultricies nunc sit. Eget mi consectetur purus enim semper sed pretium integer. Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor .Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor. sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor.</p>
                <p className={Styles.details2}>Lorem ipsum dolor sit amet consectetur. Semper volutpat sit vel sed nam nisi amet. In condimentum libero faucibus id tincidunt. Tellus hac id mi senectus vel libero. Fringilla aliquet dictum volutpat ultricies nunc sit. Eget mi consectetur purus enim semper sed pretium integer. Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor .Tellus duis neque urna pellentesque metus congue ac tristique. Fermentum sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor. sit orci libero enim tortor sit blandit. Parturient enim nunc felis porttitor.</p>
                
                </div>
                </div>


                <div className={Styles.float}>
                <div className={Styles.leftFloat}></div>
                <div className={Styles.rightFloat}>
                <div className={Styles.social}>
              <Link href="!#">
                <LinkedInIcon />
              </Link>
              <Link href="!#">
                <XIcon />
              </Link>
                <Link href="!#">
                    <TwitterIcon />
              </Link>
                </div>

                <div className={Styles.agendaContainer}>
                
                    <h2 className={Styles.title}>Agenda</h2>
                    <p className={Styles.time}>8:00AM to 9:00AM Dec 3rd 2023</p>
                </div>

                <div className={Styles.topicContainer}>
                    <p className={Styles.detail}>Topic: Cloud computing & Virtualisation. </p>
                    <Button>DOWNLOAD SLIDE</Button>
                </div>

                </div>

                </div>

            
        
        </div>
    </div>

    <Footer />
    </>
  )
}

export default Speakers;