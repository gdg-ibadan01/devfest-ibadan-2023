"use client"
import React from 'react'
import BackButton from '../component/BackButton'
import Header from '../component/Header'
import Styles from './styles.module.scss'
import VolunteerForm from './VolunteerForm/VolunteerForm'
import Footer from '../component/Footer'


const page = () => {
  return (
    <div className={Styles.container}>
        <Header />
        <div className={Styles.content}>
          <BackButton />
          <VolunteerForm />
        </div>
        <Footer />
    </div>
  )
}

export default page