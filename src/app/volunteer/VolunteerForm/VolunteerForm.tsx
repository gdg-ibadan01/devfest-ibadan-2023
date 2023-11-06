import React from 'react'
import Styles from './styles.module.scss'

const VolunteerForm = () => {
  return (
      <div className={Styles.parentContainer}>
          <FormHeader />
          <div className={Styles.formContainer}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJTH6FxLc-ehff9cTIOQJjg7p33t8te9WNnSBjw-stKsAh8Q/viewform?embedded=true" className={Styles.form}>Loading…</iframe>
          </div>
      </div>
  )
}

export default VolunteerForm


export const FormHeader = () => {
    return (
        <div className={Styles.formHeaderContainer}>
            <h2 className={Styles.headerText}>Become a Volunteer</h2>
            <p className={Styles.headerSubText}>You are few miniutes away from appyling for the devfest Ibadan volunteer position</p>
        </div>
    );
}