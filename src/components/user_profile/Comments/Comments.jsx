import React from 'react';
import ProfileWithOutBcg from "../ProfileWithOutBcg/ProfileWithOutBcg";

import styles from './comments.module.css'

function Comments(props) {
    return (
        <div className={styles.main}>
            <div className={styles.profile_inf}>
                <ProfileWithOutBcg/>
                <h1 className={styles.date}> 1 июня 2024 года</h1>
            </div>
            <div className={styles.content}>
                Contetnx alsdjfoasdkf jasdljfoajsdflk lsdjf
            </div>
        </div>
    );
}

export default Comments;