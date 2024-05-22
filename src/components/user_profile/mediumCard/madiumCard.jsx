import React from 'react';
import styles from './madiumCard.module.css';
import Image from "next/image";

import photo from "../../../asserts/temp.jpg"


function MadiumCard({image, nickname, sub}) {



    return (
        <div>
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <Image src={image? image : photo} alt={'image'} className={styles.img}/>
                </div>
                <div className={styles.text}>
                    <div className={styles.nickname}>
                        <h1>{nickname ? nickname : null}</h1>
                    </div>
                    <div className={styles.subes}>
                        <h1>{sub? sub + ' Подписчиков' : null}</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MadiumCard;