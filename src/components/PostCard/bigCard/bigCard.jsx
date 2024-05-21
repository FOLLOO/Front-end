import React from 'react';
import styles from "./bigCard.module.css";
import Image from "next/image";
import photo from "../../../asserts/temp.jpg";
import temp from "../../../asserts/temp.jpg";

function BigCard({title,
                     description,
                     cost,
                     view,
                     date,
                     image,
                     post = false}) {


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.image} style={{background: `url(${temp})`}}>
                    <Image src={temp} alt={'img'} className={styles.img}/>
                </div>
                {post === false ?
                    <div className={styles.text}>
                        <div className={styles.flex}>
                            <div className={styles.title_text}>
                                <h1 className={styles.title}> {title ? title : ' '}  </h1>
                                <h3 className={styles.avtor}> {description ? description : ''} </h3>
                            </div>
                            <div className={styles.money}>
                                <h2 className={styles.money_title}>
                                    {cost ? new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format(cost) : '0₽ в месяц'}
                                </h2>
                            </div>
                        </div>
                    </div>

                    : null}

            </div>
            {date ?
            <div className={styles.folex}>
                <div className={styles.content_info}>
                    <h1>Просмотров</h1>
                    <p>{view ? view : ' '}</p>
                </div>
                <div className={styles.content_info}>
                    <h1>Дата публикации</h1>
                    <p>
                        {
                            date ? new Date(date).toLocaleString("ru-RU", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }) : ' '
                        }
                    </p>
                </div>
            </div> : null}
        </div>
    );
}

export default BigCard;