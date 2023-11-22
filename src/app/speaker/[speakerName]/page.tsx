'use client'
import TextCarousel from '@/app/component/Carousel/TextCarousel'
import React from 'react'
import Styles from './styles.module.scss'
import BackButton from '@/app/component/BackButton'
import IndividualSpeaker from '../../component/Speaker'
import Footer from '@/app/component/Footer'

const page = () => {
 
  

  return (
    <section className={Styles.container}>
      <TextCarousel />
        <div className={Styles.content}>
          <BackButton />
          <IndividualSpeaker />
        </div>
      <Footer />
    </section>
  )
}

export default page