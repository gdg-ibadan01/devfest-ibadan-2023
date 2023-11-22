import Image from 'next/image'
import React from 'react'
import Styles from '../styles.module.scss'
import Star from '../../../../assets/svgs/bottom-star.svg'

const SpeakerImageCard = ({data}) => {
  
  return (
    <div className={Styles.parent__container}>
      <div 
        className={Styles.image__card__container} 
        style={{
          backgroundColor: data.color,
        }}
      >
          <div className={Styles.image__container} >
            <Image src={data.image} alt={`${data.name}'s headshot`} className={Styles.image} />
          </div>
          <div className={Styles.speaker__role}>
              <h2>{data.name}</h2>
              <p>Product Designer, Heyfood</p>
          </div>
      </div>
      <div className={Styles.star}>
        <Image src={Star} alt='star' />
      </div>
    </div>
  )
}

export default SpeakerImageCard