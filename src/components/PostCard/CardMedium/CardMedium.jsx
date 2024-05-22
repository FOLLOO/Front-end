import React from 'react'

import styles from './CardMedium.module.css'
import Image from "next/image";

import  temp from "../../../asserts/temp.jpg";



function CardMedium ({title, description, imager}) {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.image} style={{backgroundImage: `url(${temp})`}}>
          <Image src={imager ? imager : temp } alt={'img'}  className={styles.img} />
        </div>
        <div className={styles.text}>
          <div className={styles.flex}>
            <div className={styles.title_text}>
              <h1 className={styles.title}> {title} TITLE TEXT TITLE TEXTTITLE TEXTTITLE TEXTTITLE TEXT </h1>
              <h3 className={styles.avtor}>  Администратор </h3>
            </div>
            {/*<div className={styles.money}>*/}
            {/*  <h2 className={styles.money_title}> $500 month</h2>*/}
            {/*</div>*/}
          </div>
          <p className={styles.description}>{description} Some text for uuuu</p>
        </div>
      </div>
    </div>
  )
}

export default CardMedium