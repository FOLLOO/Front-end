import React from 'react';
import ProfileWithOutBcg from "../ProfileWithOutBcg/ProfileWithOutBcg";

import styles from './comments.module.css'

function Comments({comments, date, user}) {
    return (
        <div className={styles.main}>
            <div className={styles.profile_inf}>
                <ProfileWithOutBcg nickname={user}/>
                <h1 className={styles.date}>
                    {date ? new Intl.DateTimeFormat('ru-RU').format(new Date(date)) : ' '}
                </h1>
            </div>
            <div className={styles.content}>
                {comments? comments : null}
            </div>
        </div>
    );
}

export default Comments;