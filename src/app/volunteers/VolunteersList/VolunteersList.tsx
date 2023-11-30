import React from 'react'
import Styles from './styles.module.scss'
import { volunteersData } from './volunteersData'
import Card from '@/app/component/Card'

const VolunteersList = () => {
  return (
    <div className={Styles["volunteers__wrapper"]}>
      <div className={Styles["organizers__content"]}>
        <div className={Styles["organizers__content--title"]}>
          <h1>The Volunteers</h1>
          <p>
            Join like-minded developers from all levels in moving the tech
            community forward.
          </p>
        </div>
      </div>
      <div className={Styles["organizers__cards"]}>
        {volunteersData.map((volunteer, index) => (
          <Card key={index} data={volunteer} title={"organizer"} />
        ))}
      </div>
    </div>
  )
}

export default VolunteersList