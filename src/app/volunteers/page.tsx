"use client"
import React from 'react'
import BackButton from '../component/BackButton'
import Styles from './styles.module.scss'
import Footer from '../component/Footer'
import TextCarousel from '../component/Carousel/TextCarousel'
import VolunteersList from './VolunteersList/VolunteersList'

const page = () => {
  return (
    <div className={Styles.container}>
        <TextCarousel />
        <div className={Styles.content}>
          <BackButton />
          <VolunteersList />
        </div>
        <Footer />
    </div>
  )
}

export default page