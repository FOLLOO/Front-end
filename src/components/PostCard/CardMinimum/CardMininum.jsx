import React from 'react';

import styles from './CardMinimum.module.css'
import Image from "next/image";

// import temp from '../../../asserts/temp2.jpg';
import temp from '../../../asserts/temp2.jpg';
import Link from "next/link";

function CardMininum({title, description, dataDate, cost, id}) {


    return (
        <Link href={`./posts/${id}`}>
            <div className={styles.main}>
                <div className={styles.image} >
                    <Image src={temp} alt={'img'} height={250} />
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
                            {dataDate? new Intl.DateTimeFormat(dataDate).format("ru-RU") : '01.02.2004'}
                        </div>
                        <div className={styles.money}>
                            {cost?  Number(cost).toLocaleString('ru-RU', {
                                style: 'currency',
                                currency: 'RUB',
                            }) + "/месяц" : "500$ per month"}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardMininum;