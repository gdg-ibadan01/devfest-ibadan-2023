import React, { useState } from 'react'
import Styles from './styles.module.scss'


interface TimeSlotsProps {
  slots: { time: string }[];
  activeSlot: number;
  setActiveSlot: (index: number) => void;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({slots, activeSlot, setActiveSlot}) => {

    const handleClick = (index: number) => {
        setActiveSlot(index)
    }

  return (
    <section className={Styles.parentContainer}>
        <div className={Styles.childContainer}>
        {slots.map((item, index) => {
          return (
            <div className={`${Styles.text__container} ${index === activeSlot ? Styles.active : ''}`} onClick={() => handleClick(index)} key={index}>
              <p className={Styles.text}>{item?.time}</p>
            </div>
          )
        })}
        </div>
    </section>
  )
}

export default TimeSlots