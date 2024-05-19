'use client'

import React, {useEffect, useState} from 'react';


import styles from "./posts.module.css"

import LeftHand from "../../components/LeftHand/LeftHand";
import BigCard from "../../components/PostCard/bigCard/bigCard";
import CardMininum from "../../components/PostCard/CardMinimum/CardMininum";
import {useRouter} from "next/navigation";
import axios from "axios";

function PostsPage(props) {

    const [jwt, setJWT] = useState(null);
    const router = useRouter()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const getData = async (token) => {
        try {
            const response = await axios.get('http://localhost:4000/posts', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data && response.data.length > 0) {
                setData(response.data);
                // console.log("data set");
            } else {
                setData([]); // Установка пустого массива в случае отсутствия данных
                // console.log("data is no set");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getData(token);
        } else {
            router.push('/login');
        }
    }, []);

    useEffect(() => {
        // console.log('data is set'); // Выводит обновленные данные после перерендеринга
    }, [data]);

    return (
        <div className={styles.page}>
            {/*<Header/>*/}
                <div className={styles.main}>
                    <div className={styles.flex}>
                        <LeftHand posts_page={true}/>
                        <div>
                            <BigCard/>
                            <div className={styles.another_flex}>
                                {data.length > 0? data.map((post) => (
                                    <CardMininum title={post.title} description={post.description} cost={post.cost} id={post._id} />
                                )) :
                                    <>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                <CardMininum/>
                                    </>
                                }
                            </div>
                            <BigCard/>
                        </div>

                    </div>
                </div>
            {/*<Footer/>*/}
        </div>
    );
}

export default PostsPage;