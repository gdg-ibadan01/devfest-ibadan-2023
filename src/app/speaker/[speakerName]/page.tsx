'use client'
import TextCarousel from '@/app/component/Carousel/TextCarousel'
import Image, {StaticImageData} from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, FC } from 'react'
import Styles from './styles.module.scss'
import BackButton from '@/app/component/BackButton'
import IndividualSpeaker from './components'
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