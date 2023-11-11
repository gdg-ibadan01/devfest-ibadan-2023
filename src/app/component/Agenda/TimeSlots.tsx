import React, { useState } from 'react'
import Styles from './styles.module.scss'

const TimeSlots = () => {
    const [activeSlot, setActiveSlot] = useState(1);
    const slots = [
        '9:00am- 10:00am', 
        '11am- 12:00am',
        '1pm- 1:30pm',
        '2pm- 1:30pm',
        '2:30am- 3:30pm',
        '2:30am- 3:30pm',
        '4:00pm- 4:30pm',
        '4:00pm- 4:30pm',
        '4:00pm- 4:30pm'
    ]

    const handleClick = (index: number) => {
        setActiveSlot(index)
    }

  return (
    <section className={Styles.parentContainer}>
        <div className={Styles.childContainer}>
              {slots.map((item, index) => <p key={index} className={`${Styles.text} ${index === activeSlot ? Styles.active : ''}`} onClick={() => handleClick(index)}>{item}</p>)}
        </div>
    </section>
  )
}

export default TimeSlots