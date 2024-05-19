import React from 'react';

import styles from './WorkWithUs.module.css';
import UserCard from '../user_profile/mediumCard/madiumCard';
import SecondBlueButton from "../buttons/SecondBlueButton/SecondBlueButton";





function WorkWithUs(props) {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1 >Зарабатывают с нами</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.firstContent}>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>

                </div>
                <div className={styles.secondContent}>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
            </div>
            <div className={styles.button}>
                <SecondBlueButton text={'Смотреть ещё...'}/>
            </div>
        </div>
    );
}

export default WorkWithUs;