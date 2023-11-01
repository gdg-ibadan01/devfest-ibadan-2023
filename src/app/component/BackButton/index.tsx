import React from 'react'
import Styles from './styles.module.scss'

const BackButton = () => {
  return (
    <div className={Styles.container}>
        <a href="/" className={Styles.link}>Back to Homepage</a>
    </div>
  )
}

export default BackButton