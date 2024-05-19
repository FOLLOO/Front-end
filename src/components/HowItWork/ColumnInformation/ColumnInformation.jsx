import React from 'react'
import styles from './ColumnInformation.module.css'
import Image from "next/image";
function ColumnInformation ({title, header, text, image}) {

  return (
    <div className={styles.flex}>
      <div className={styles.title}>{title}</div>
      <div className={styles.header}>{header}</div>
      <div className={styles.text}>{text}</div>
      <Image src={image} alt={'img'}></Image>
    </div>
  )
}

export default ColumnInformation