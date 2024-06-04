'use client'

import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";


import styles from "./posts.module.css"

import LeftHand from "../../components/LeftHand/LeftHand";
import BigCard from "../../components/PostCard/bigCard/bigCard";
import CardMininum from "../../components/PostCard/CardMinimum/CardMininum";

import abstract from "@/asserts/abstract.png"
import {useAuth} from "@/context/AuthContext";

function PostsPage(props) {

    const [jwt, setJWT] = useState(null);
    const {user} = useAuth()
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
                // console.log("data set", data);
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
        // console.log('data is set', data); // Выводит обновленные данные после перерендеринга
    }, [data]);

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }
    // console.log(data)
        return (
            <div className={styles.page}>
                {/*<Header/>*/}
                <div className={styles.main}>
                    <div className={styles.flex}>
                        <LeftHand posts_page={true}/>
                        <div>
                            <Link href="/">
                            <BigCard image={abstract ? abstract : null}
                                title={'О приложении'}
                                description={'Инофрмация про данный сайт!'}/>
                            </Link>
                            <div className={styles.another_flex}>
                                {data.length > 0 ? data.map((post) => (
                                    <div style={post.banned ? {display: "none"} :  {display: "block"} }>
                                        <Link href={post.subs ? `./posts/${post._id}` : user?.role_id?.title === 'админ' ? `./posts/${post._id}` : `./avtor/${post.user_id}` }>
                                        <CardMininum title={post.title} description={post.description} cost={post.cost}
                                                     id={post._id}
                                                     imager={post?.contents[0]?.image}
                                        />
                                        </Link>
                                    </div>
                                    )) :
                                    <>
                                        Пока что здесь ничего нет :(
                                    </>
                                }
                            </div>
                        </div>

                    </div>
                </div>
                {/*<Footer/>*/}
            </div>
        );
    }


export default PostsPage;