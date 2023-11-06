"use client"
import React from 'react'
import BackButton from '../component/BackButton'
import Styles from './styles.module.scss'
import VolunteerForm from './VolunteerForm/VolunteerForm'
import Footer from '../component/Footer'
import TextCarousel from '../component/Carousel/TextCarousel'


const page = () => {
  return (
    <div className={Styles.container}>
        <TextCarousel />
        <div className={Styles.content}>
          <BackButton />
          <VolunteerForm />
        </div>
        <Footer />
    </div>
  )
}

export default page