import React from 'react'
import ColumnInformation from './ColumnInformation/ColumnInformation'

import first from '../../asserts/howItWork/01.svg'
import second from '../../asserts/howItWork/02.svg'
import third from '../../asserts/howItWork/03.svg'

import styles from './HowItWork.module.css'

function HowItWork (props) {

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Как это работает?</h1>
      <div className={styles.flex}>
        <ColumnInformation title={'01'}
                           image={first}
                           header={'Регистрация аккаунта'}
                           text={'Шаг 1. Зарегистрируйте аккаунт автора. И заполните его описанием и/или контентом'}/>
        <ColumnInformation title={'02'}
                           image={second}
                           header={'Привлечение пользователей'}
                           text={'Шаг 2. Расскажите своим подписчикам, что вы теперь есть на Abzac'}/>
        <ColumnInformation title={'03'}
                           image={third}
                           header={'Будь активным!'}
                           text={'Шаг 3. Будьте активны и прислушивайтесь к вашим подписчикам'}/>
      </div>
    </div>
  )
}

export default HowItWork