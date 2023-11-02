import React from 'react'
import Styles from './styles.module.scss'
import Link from 'next/link'

const BackButton = () => {
  return (
    <div className={Styles.container}>
        <Link href='/' className={Styles.link}>Back to Homepage</Link>
    </div>
  )
}

export default BackButton