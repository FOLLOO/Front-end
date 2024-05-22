import React from 'react'
import styles from './blueButton.module.css'
const BlueButton = ({text, styleee, type}) => {
  return (
    <div>
      <button className={styles.button} style={styleee} type={type}> {text ? text : 'Немного кнопок'}</button>
    </div>
  )
}

export default BlueButton