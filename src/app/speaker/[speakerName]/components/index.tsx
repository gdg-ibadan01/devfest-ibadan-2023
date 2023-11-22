import React, {useState, useEffect} from 'react'
import SpeakerImageCard from './SpeakerImageCard'
import SpeakerInfo from './SpeakerInfo'
import { speakerDetails } from '@/app/component/speakerDetails'
import { useParams } from 'next/navigation'
import Styles from '../styles.module.scss'

const index = () => {
    const { speakerName } = useParams()
    const [speakerDetail, setSpeakerDetail] = useState([]);

    useEffect(() => {
        const newSpeakerDetail = speakerDetails?.find((speaker) => speaker.name.toLowerCase().split(' ').join('') === speakerName.replace(/-/g, ''));
        setSpeakerDetail(newSpeakerDetail);
    }, [speakerName])
  return (
    <div className={Styles.speaker__info__container}>
        <SpeakerImageCard data={speakerDetail} />
        <SpeakerInfo data={speakerDetail} />
    </div>
  )
}

export default index