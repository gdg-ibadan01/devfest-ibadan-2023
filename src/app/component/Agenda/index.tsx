import React from 'react'
import Styles from './styles.module.scss'
import TimeSlots from './TimeSlots'
import Button from '../Button'

const Agenda = () => {
  return (
    <div className={Styles.container}>
        <section className={Styles.content}>
            <div>
                <h2>The Agenda</h2>
                <p>Detailed schedule for the event</p>
            </div>
            <TimeSlots />
            <div className={Styles.break_out}>
                <h2>BREAK OUT SESSION</h2>
            </div>
            <div><Button children='Get a Ticket' bgColor='#4285F4' /></div>
        </section>
    </div>
  )
}

export default Agenda