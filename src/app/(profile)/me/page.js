'use client'


import React, {useEffect, useState} from 'react';
import styles from "@/app/posts/posts.module.css";
import LeftHand from "@/components/LeftHand/LeftHand";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import CardMininum from "@/components/PostCard/CardMinimum/CardMininum";
import axios from "axios";
import {useRouter} from "next/navigation";
import { useAuth } from '@/context/AuthContext';

function Page(props) {

    const { user } = useAuth()

    const [data , setData] = useState([]);
    const [role, setRole] = useState("");
    const [open, setOpen] = useState(false);

    const router = useRouter()


    useEffect(() => {
        // console.log(role); // Выводит обновленные данные после перерендеринга
        // console.log(data); // Выводит обновленные данные после перерендеринга
        // Выводит обновленные данные после перерендеринга
    }, [data, role]);

    useEffect(() => {

    }, [user])
    // console.log(user)   

    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand me_page={true} nickname_avtort={user?.nickname}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Понравившиеся посты</h1>
                    </div>
                    {/* <BigCard />
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                    <BigCard/> */}

                    <p >Пока что здесь ничего нет</p>
                </div>

            </div>
        </div>
    );
}

export default Page;