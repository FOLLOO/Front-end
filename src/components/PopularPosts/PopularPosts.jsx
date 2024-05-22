import React from 'react'

import styles from './PopularPosts.module.css'
import CardMedium from '../PostCard/CardMedium/CardMedium'
import TransprentWhiteButton from '../buttons/TransprentWhiteButton/TransprentWhiteButton'


import dog from '@/asserts/tempPost/dog.jpeg'
import cat from '@/asserts/tempPost/cat.jpeg'
import human from '@/asserts/tempPost/human.jpeg'
import Link from "next/link";

function PopularPosts (props) {
  return (
      <div className={styles.background}>
        <div className={styles.main}>
          <h1 className={styles.title}> Популярное </h1>
          <div className={styles.popular_cards}>
            <div className={styles.grid}>
              <Link href={'/login'}>

              <CardMedium
                  imager={cat}
                  title={'Добро пожаловать в наше сообщество!'}
                  description={'Мы рады приветствовать вас на нашей платформе. Присоединяйтесь к нам, чтобы получить доступ к уникальному контенту, эксклюзивным предложениям и стать частью нашего растущего сообщества!'}/>
              </Link>
              <Link href={'/login'}>
              <CardMedium
                  imager={human}
                  description={' Исследуйте множество возможностей, которые предлагает наша платформа. От образовательных материалов до развлекательного контента - у нас есть все, что вам нужно для развития и отдыха.'}
                  title={'Откройте для себя новые возможности'} />
              </Link>
                <Link href={'/login'}>
                <CardMedium
                  imager={dog}
                  title={'Эксклюзивные предложения только для вас'}
              description={'Не упустите шанс получить эксклюзивные предложения и бонусы, доступные только для наших пользователей. Оставайтесь с нами и наслаждайтесь привилегиями, которые мы приготовили для вас.'}
              />
                </Link>
            </div>
          </div>
          <div className={styles.flex}>
            <Link href={'/posts'}>
          <TransprentWhiteButton text={'Показать еще...'}/>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default PopularPosts