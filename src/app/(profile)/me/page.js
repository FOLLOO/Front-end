'use client'


import React, {useEffect, useState} from 'react';
import styles from "@/app/posts/posts.module.css";
import LeftHand from "@/components/LeftHand/LeftHand";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import CardMininum from "@/components/PostCard/CardMinimum/CardMininum";
import axios from "axios";
import {useRouter} from "next/navigation";

function Page(props) {

    const [data , setData] = useState([]);
    const [role, setRole] = useState("");
    const [open, setOpen] = useState(false);

    const router = useRouter()

    const checkAuth = async (token) => {
        // const token = localStorage.getItem('token');
        if (token) {
            const response = await axios.get('http://localhost:4000/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data) {
                setData(response.data);
                // console.log("data set");
            } else {
                setData([]); // Установка пустого массива в случае отсутствия данных
                // console.log("data is no set");
            }
        }
    }
    useEffect(() => {
        // console.log(role); // Выводит обновленные данные после перерендеринга
        // console.log(data); // Выводит обновленные данные после перерендеринга
        // Выводит обновленные данные после перерендеринга
    }, [data, role]);


    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand me_page={true}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Понравившиеся посты</h1>
                    </div>
                    <BigCard />
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                </div>

            </div>
        </div>
    );
}

export default Page;