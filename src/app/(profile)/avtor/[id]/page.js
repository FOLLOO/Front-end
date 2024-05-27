'use client'

import React, {useEffect, useRef, useState} from 'react';

import {useAuth} from "@/context/AuthContext";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import styles from "@/app/posts/posts.module.css";

import LeftHand from "@/components/LeftHand/LeftHand";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import axios from "axios";
import {useParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import hola from "@/asserts/howItWork/HOLA.gif";


function Page(props) {

    const { user, setUser, loading } = useAuth();
    const [data, setData] = useState([]);

    const [content, setContent] = useState([]);

    const {id} = useParams()

    const getData = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get((`http://localhost:4000/api/avtor/${id}`), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (err) {
                console.log('Ошбика при получении постов автора');
            }
        }
    }

    const getContetn = async () => {
        const token = localStorage.getItem('token');
        try{
            const response = await axios.get((`http://localhost:4000/posts/avtor/${id}`), {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setContent(response.data);
        }catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
        getContetn()
        // console.log(data.description)
    }, []);

    useEffect(() => {
        // console.log("loading");
    }, [user]);
    
    // console.log(content)

    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand avtor_page={true} avtor_cost={data?.cost} nickname_avtort={data?.nickname} avtor_id={data?._id} subscribe={content[0]?.subs} />
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Описание</h1>
                    </div>
                    <div className={styles.text}>
                        <p>
                            {data.descriptions ? <div>{parse(data?.descriptions)}</div> : null}
                        </p>
                    </div>
                    <div className={styles.title}>
                        <h1>Контент</h1>
                    </div>
                    {/*<Link href={`${id}/add_post`}>*/}
                    {/*    <SecondBlueButton text={'Добавить'} styleee={{width: '100%', textAlign: 'center'}}/>*/}
                    {/*</Link>*/}
                    {content.length > 0 ? content.map((post) => (
                            <Link href={post.subs ? `/posts/${post._id}` : ``}>
                                <BigCard title={post.title} description={post.user_id.nickname}
                                         cost={post.user[0]?.cost}
                                         imager={post.contents[0].image}
                                         view={post?.views }
                                         date={post.createdAt}
                                />
                            </Link>
                        ))
                        :
                        <Image src={hola} alt={'Nothing...'} width={700} />
                    }
                </div>

            </div>
        </div>
    );
}

export default Page;