import React from 'react'
import styles from './blueButton.module.css'
const BlueButton = ({text}) => {
  return (
    <div>
      <button className={styles.button}> {text ? text : 'Немного кнопок'}</button>
    </div>
  )
}

export default BlueButton