import React from 'react'
import styles from './TransprentWhiteButton.module.css'
function TransprentWhiteButton ({text}) {


  return (
    <div>
      <button className={styles.button}> {text ? text : 'Еще немного кнопок'}</button>
    </div>
  )
}

export default TransprentWhiteButton