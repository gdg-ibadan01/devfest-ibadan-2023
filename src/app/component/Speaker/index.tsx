import React, {useState, useEffect} from 'react'
import SpeakerImageCard from './SpeakerImageCard'
import SpeakerInfo from './SpeakerInfo'
import { useParams } from 'next/navigation'
import Styles from './styles.module.scss'
import { speakerDetails } from '../speakerDetails'

const Index: React.FC = () => {
    const { speakerName } = useParams();
    const [speakerDetail, setSpeakerDetail] = useState<any>([]);

  useEffect(() => {
    if (speakerName) {
      const normalizedSpeakerName =
        typeof speakerName === 'string'
          ? speakerName.replace(/-/g, '')
          : Array.isArray(speakerName)
            ? speakerName[0].replace(/-/g, '')
            : '';

      const newSpeakerDetail = speakerDetails?.find(
        (speaker) => speaker.name.toLowerCase().split(' ').join('') === normalizedSpeakerName
      );

      setSpeakerDetail(newSpeakerDetail || []);
    }
  }, [speakerName]);

  return (
    <div className={Styles.speaker__info__container}>
        <SpeakerImageCard data={speakerDetail} />
        <SpeakerInfo data={speakerDetail} />
    </div>
  )
}

export default Index