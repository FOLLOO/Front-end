import React from 'react';
import styles from "./bigCard.module.css";
import Image from "next/image";
import photo from "../../../asserts/temp.jpg";
import temp from "../../../asserts/temp3.jpg";

function BigCard({title, description, image, post = false}) {


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.image} style={{background: `url(${temp})`}}>
                    <Image src={temp} alt={'img'}/>
                </div>
                {post === false ?
                <div className={styles.text}>
                    <div className={styles.flex}>
                        <div className={styles.title_text}>
                            <h1 className={styles.title}> {title} TITLE TEXT TITLE TEXTTITLE TEXTTITLE TEXTTITLE
                                TEXT </h1>
                            <h3 className={styles.avtor}> Автор </h3>
                        </div>
                        <div className={styles.money}>
                            <h2 className={styles.money_title}> $500 month</h2>
                        </div>
                    </div>
                    <p className={styles.description}>{description} Some text for uuuu</p>
                </div> : null}
            </div>
        </div>
    );
}

export default BigCard;