import React from 'react';

import styles from './CardMinimum.module.css'
import Image from "next/image";

// import temp from '../../../asserts/temp2.jpg';
import temp from '../../../asserts/temp2.jpg';
import Link from "next/link";

function CardMininum({title, description, dataDate, cost, id, imager}) {


    return (

            <div className={styles.main}>
                <div className={styles.image} >
                    <Image src={imager ? `http://localhost:4000${imager}` : temp} alt={'img'} width={580} height={250} />
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <h1>{title? title :'TILE some for me'}</h1>
                    </div>
                    <div className={styles.description}>
                        <h3>{description ? description : 'TILE some for me TILE some for me TILE some for me TILE some for me'}</h3>
                    </div>
                    <div className={styles.more_info}>
                        <div className={styles.date}>
                            {dataDate ? new Intl.DateTimeFormat('ru-RU').format(new Date(dataDate)) : ' '}
                        </div>
                        <div className={styles.money}>
                            {cost?  Number(cost).toLocaleString('ru-RU', {
                                style: 'currency',
                                currency: 'RUB',
                            }) + "/месяц" : " "}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CardMininum;