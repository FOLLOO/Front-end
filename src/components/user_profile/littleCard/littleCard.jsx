import React from 'react';

import styles from './littleCard.module.css';
import Image from "next/image";

import photo from "../../../asserts/temp.jpg"


function LittleCard({image, nickname, sub, }) {

    // console.log(nickname)


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <Image src={photo} alt={'image'}/>
                </div>
                <div className={styles.text}>
                    <div className={styles.nickname}>
                        <h1>{nickname}</h1>
                    </div>
                    <div className={styles.subes}>
                        <h1>Subes</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LittleCard;