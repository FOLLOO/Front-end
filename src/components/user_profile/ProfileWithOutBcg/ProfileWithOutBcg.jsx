import React from 'react';
import styles from "./ProfileWithOutBcg.module.css";
import Image from "next/image";
import photo from "../../../asserts/temp.jpg";

function ProfileWithOutBcg({header = false}) {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.avatar}>
                    <Image src={photo} alt={'image'}/>
                </div>
                <div className={styles.text}>
                    <div className={styles.nickname} style={header ? { color: "white"} : null}>
                        <h1>Nicname</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileWithOutBcg;