import React from 'react';

import styles from './WorkWithUs.module.css';
import UserCard from '../user_profile/mediumCard/madiumCard';
import SecondBlueButton from "../buttons/SecondBlueButton/SecondBlueButton";

import p1 from '@/asserts/tempProfile/1.jpg'
import p2 from '@/asserts/tempProfile/2.jpg'
import p3 from '@/asserts/tempProfile/3.jpg'
import p4 from '@/asserts/tempProfile/4.jpg'
import p5 from '@/asserts/tempProfile/5.jpg'
import p8 from '@/asserts/tempProfile/8.jpg'
import p7 from '@/asserts/tempProfile/7.jpg'
import Link from "next/link";



function WorkWithUs(props) {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1 >Зарабатывают с нами</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.firstContent}>
                    <UserCard image={p8} nickname={'Антон Антонов'} sub={10000}/>
                    <UserCard image={p1} nickname={'Егор Летов'} sub={4000}/>
                    <UserCard image={p2} nickname={'КиШ'} sub={60540000}/>
                    <UserCard image={p3} sub={45003} nickname={'КИНО'}/>
                    <UserCard image={p4} nickname={'Алла Петрова'} sub={60000}/>
                    <UserCard image={p5} nickname={'EoonGuy'} sub={12}/>
                    <UserCard image={p7} nickname={'FOLLFORY'} sub={193485}/>
                    <UserCard image={p8} nickname={'Антон Антонов'} sub={10000}/>
                    <UserCard image={p1} nickname={'Егор Летов'} sub={4000}/>

                </div>
                <div className={styles.secondContent}>
                    <UserCard image={p1} nickname={'Егор Летов'} sub={4000}/>
                    <UserCard image={p2} nickname={'КиШ'} sub={60540000}/>
                    <UserCard image={p3} sub={45003} nickname={'КИНО'}/>
                    <UserCard image={p7} nickname={'FOLLFORY'} sub={193485}/>
                    <UserCard image={p4} nickname={'Алла Петрова'} sub={60000}/>
                    <UserCard image={p8} nickname={'Антон Антонов'} sub={10000}/>
                    <UserCard image={p3} sub={45003} nickname={'КИНО'}/>
                    <UserCard image={p1} nickname={'Егор Летов'} sub={4000}/>
                    <UserCard image={p4} nickname={'Алла Петрова'} sub={60000}/>
                </div>
            </div>
            <div className={styles.button}>
                <Link href="/posts">
                <SecondBlueButton text={'Смотреть ещё...'}/>
                </Link>
            </div>
        </div>
    );
}

export default WorkWithUs;