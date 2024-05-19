import React from 'react'

import styles from './SecondBlueButton.module.css'
function SecondBlueButton ({text, styleee}) {


  return (
    <div>
      <button className={styles.button} style={styleee}>{text ? text : ''}</button>
    </div>
  )
}

export default SecondBlueButton