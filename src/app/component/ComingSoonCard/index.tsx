import Image from 'next/image'
import Styles from  './styles.module.scss'
import RedImage from '../../../assets/imgs/coming-soon/red.png'
import BlueImage from '../../../assets/imgs/coming-soon/blue.png'
import GreenImage from '../../../assets/imgs/coming-soon/green.png'
import YellowImage from '../../../assets/imgs/coming-soon/yellow.png'

import { FC } from 'react'

interface cardInterface {
  color: string
}

const ComingSoonCard: FC<cardInterface> = ({ color }) => {
  return (
    <div className={Styles.cardContainer}>
      <Image 
        src={color === 'red' 
        ? RedImage : color === 'blue' 
        ? BlueImage : color === 'green' 
        ? GreenImage : YellowImage
        } 
        alt='coming soon image' 
        className={Styles.cardImage} 
      />
    </div>
  )
}

export default ComingSoonCard