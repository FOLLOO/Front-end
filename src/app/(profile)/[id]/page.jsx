'use client'

import React, {useEffect, useState} from 'react';

import {useAuth} from "@/context/AuthContext";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import styles from "@/app/posts/posts.module.css";

import LeftHand from "@/components/LeftHand/LeftHand";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import CardMininum from "@/components/PostCard/CardMinimum/CardMininum";
import axios from "axios";
import {useParams} from "next/navigation";
import Link from "next/link";
import SecondBlueButton from "@/components/buttons/SecondBlueButton/SecondBlueButton";


function Page(props) {

    const { user, setUser, loading } = useAuth();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    const {id} = useParams()
    // const navigationRouter = useNavigationRouter();


    const renderDescription = user ? parse(user.descriptions) : null;

    const getData = async () => {

        const token = localStorage.getItem('token');

        if (token) {
            try {
                const response = await axios.get((`http://localhost:4000/posts/avtor/${id}`), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
                // console.log(data)

            } catch (err) {
                // console.log(err);
                // console.log('id',id)
                console.log('Ошбика при получении постов автора');
            }
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        // console.log("loading");
    }, [user]);



    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand avtor_page={true}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Описание</h1>
                    </div>
                    <div className={styles.text}>
                        <p>
                            {user ? <div>{renderDescription}</div> : null}
                        </p>
                    </div>
                    <div className={styles.title}>
                        <h1>Контент</h1>
                    </div>
                    <Link href={`${id}/add_post`}>
                    <SecondBlueButton text={'Добавить'} styleee={{width: '100%', textAlign: 'center'}}/>
                    </Link>
                    {data.length > 0 ? data.map((post) => (
                        <Link href={`/posts/${post._id}`}>
                            <BigCard title={post.title} description={post.user_id.nickname}
                                     cost={post.user_id.cost}
                                     view={post?.views }
                                     date={post.createdAt}

                            />
                        </Link>
                        ))
                     : <BigCard/>}
                </div>

            </div>
        </div>
    );
}

export default Page;