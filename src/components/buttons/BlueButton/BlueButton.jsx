import React from 'react'
import styles from './blueButton.module.css'
const BlueButton = ({text, styleee}) => {
  return (
    <div>
      <button className={styles.button} style={styleee}> {text ? text : 'Немного кнопок'}</button>
    </div>
  )
}

export default BlueButton