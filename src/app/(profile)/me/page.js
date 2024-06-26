'use client'


import React, {useEffect, useState} from 'react';
import styles from "@/app/posts/posts.module.css";
import LeftHand from "@/components/LeftHand/LeftHand";
import {useRouter} from "next/navigation";
import { useAuth } from '@/context/AuthContext';
import {getLikedPosts, getUserSubscriptions} from "@/api/api";
import Link from "next/link";
import SecondBlueButton from "@/components/buttons/SecondBlueButton/SecondBlueButton";
import LittleCard from "@/components/user_profile/littleCard/littleCard";
import BlueButton from "@/components/buttons/BlueButton/BlueButton";

function Page(props) {

    const { user } = useAuth()

    const [data , setData] = useState([]);
    const [role, setRole] = useState("");
    const [open, setOpen] = useState(false);

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [subscriptions, setSubscriptions] = useState([])

    const router = useRouter()


    const getPosts = async () => {
        const token = localStorage.getItem('token');
        try {
            const data = await getLikedPosts(token);
            setPosts(data);
        } catch (err) {
            setError('Error performing search');
        }
    }

    useEffect(()  => {
        getPosts()
    }, []);

    useEffect(() => {
        // console.log(role); // Выводит обновленные данные после перерендеринга
        // console.log(data); // Выводит обновленные данные после перерендеринга
        // Выводит обновленные данные после перерендеринга
    }, [data, role]);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login'); // Перенаправление на страницу логина, если токен отсутствует
                return;
            }

            try {
                const data = await getUserSubscriptions(token);
                setSubscriptions(data);
            } catch (err) {
                setError('Ошибка при получении подписок');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, [router]);

    useEffect(() => {

    }, [user])
    console.log(posts)

    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <>
                    <div className='main_big gap40'>
                        <Link href={'/posts'}>
                            <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                        </Link>
                        <div className="title">
                            <h1>Мой профиль</h1>
                        </div>
                        <LittleCard nickname={user?.nickname}/>
                        <div className="title">
                            <h1>Подписки</h1>
                        </div>
                        {subscriptions.length > 0 ? (
                            subscriptions.slice(0, 4).map((subscription) => (
                                <div key={subscription._id} className={styles.card}>
                                    <Link href={`/avtor/${subscription.seller_id._id}`}>
                                        <LittleCard nickname={subscription.seller_id.nickname} key={subscription.seller_id.nickname} />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>У вас нет активных подписок.</p>
                        )}
                        <Link href={'/me/subs'}>
                        <BlueButton text={'Посмотреть ещё'} styleee={{width: "100%", textAlign: 'center'}}/>
                        </Link>
                        { role === 'пользователь' ?
                            <Link href={'/me/update_to_avtor'}>
                                <SecondBlueButton text={'Стать автором'} styleee={{width: "100%", textAlign: 'center'}}/>
                            </Link> : null}
                    </div>
                </>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Понравившиеся посты</h1>
                    </div>
                    <div className={styles.grid2}>
                    {posts.length > 0 ? posts.filter(post => post?.like === true ).map((post) => (
                        // <BigCard title={post.title} />
                        // <BigCard title={post.post_id?.title} view={post.post_id?.view}/>
                        <Link href={`/avtor/${post.post_id?.user_id}`}>
                            <div className={styles.big_card}>
                                <div>
                                <h2>{post.post_id?.title}</h2>
                                <p>Просмотры: {post.post_id?.views}</p>
                                <p>Описаине: {post.post_id?.description}</p>
                                </div>
                            </div>
                        </Link>
                    )) : <p >Пока что здесь ничего нет</p> }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;