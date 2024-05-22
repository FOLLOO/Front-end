'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/app/posts/posts.module.css";
import CardMininum from "@/components/PostCard/CardMinimum/CardMininum";
import axios from "axios";

import hola from '@/asserts/howItWork/HOLA.gif'
import Image from "next/image";

function Moderation({}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError("Unauthorized");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get("http://localhost:4000/posts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);

            } catch (err) {
                console.error("Ошибка при получении постов автора:", err);
                setError("Ошибка при получении постов автора");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
        console.log(data)

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>
                    Посты ожидающие модерацию
                </h1>
            </div>
            <div className={styles.grid}>
                {data.length > 0 && data.filter(post => post.banned).length > 0 ? data.filter(post => !post.banned).map((post) => (
                    <div>
                        <CardMininum
                            title={post.title}
                            description={post.description}
                            cost={post.cost}
                            id={post._id}
                            dataDate={post.createdAt}
                            imager={post?.contents[0]?.image}
                        />
                    </div>
                )) :
                    <>
                <Image src={hola} alt={'Nothing...'} style={{}} />
                <Image src={hola} alt={'Nothing...'} style={{}} />
                <Image src={hola} alt={'Nothing...'} style={{}} />

                        <Image src={hola} alt={'Nothing...'} style={{}} />
                        <Image src={hola} alt={'Nothing...'} style={{}} />
                        <Image src={hola} alt={'Nothing...'} style={{}} />
                    </>
                }
            </div>
        </div>

    );
}

export default Moderation;