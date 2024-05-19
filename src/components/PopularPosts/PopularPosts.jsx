import React from 'react'

import styles from './PopularPosts.module.css'
import CardMedium from '../PostCard/CardMedium/CardMedium'
import TransprentWhiteButton from '../buttons/TransprentWhiteButton/TransprentWhiteButton'


function PopularPosts (props) {
  return (
      <div className={styles.background}>
        <div className={styles.main}>
          <h1 className={styles.title}> Популярное </h1>
          <div className={styles.popular_cards}>
            <div className={styles.grid}>
              <CardMedium/>
              <CardMedium/>
              <CardMedium/>
            </div>
          </div>
          <div className={styles.flex}>
          <TransprentWhiteButton text={'Показать еще...'}/>
          </div>
        </div>
      </div>
  )
}

export default PopularPosts