import React from 'react'

import styles from './YourTalantMoney.module.css'
import Image from 'next/image'
import BlueButton from '../buttons/BlueButton/BlueButton'
import SecondBlueButton from '../buttons/SecondBlueButton/SecondBlueButton'

import demo from '../../asserts/yourTalantImage/demo.png'
import video from '../../asserts/yourTalantImage/video.png'
import vote from '../../asserts/yourTalantImage/vote.png'
import stat from '../../asserts/yourTalantImage/stat.png'
import yourTalant from '../../asserts/yourTalantImage/yourTalant.png'
import Link from "next/link";



function YourTalantMoney (props) {

  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <h1>Твой талант стоит денег!</h1>
      </div>
      <div className={styles.flex}>
        <div className={styles.first_column}>
          <h1 className={styles.text_mini}>Лучший способ заработка и общения с <br/> аудиторией для авторов контента.</h1>

          <div className={styles.grid}>
            <div className={styles.col}>
              <div className={styles.row}>
                <Image src={video} alt={'video'} height={48} />
                <p>Выкладывай видео</p>
              </div>

              <div className={styles.row}>
                <Image src={demo} alt={'video'} height={48} />
                <p>Делись наработками</p>
              </div>

              <div className={styles.row}>
                <Image src={stat} alt={'video'} height={48} />
                <p>Стань на ступень выше!</p>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.row}>
                <Image src={vote} alt={'video'} height={48} />
                <p>Обозреваай новости</p>
              </div>
            </div>


          </div>
          <Link href={'/registration'}>

          <SecondBlueButton text={'Стать Автором'} styleee={{width: "700px", fontSize: 32, height: 55, textAlign: 'center', marginTop: 100}} />
          </Link>
        </div>
        <div className={styles.second_column}>
          <Image src={yourTalant} alt={"image"} width={960} />
        </div>
      </div>
    </div>
  )
}

export default YourTalantMoney