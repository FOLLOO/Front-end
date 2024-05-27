'use client'
import React, { useEffect, useState } from 'react';
import { getUserSubscriptions } from '@/api/api';
import { useRouter } from "next/navigation";

import  styles from './subes.module.css';
import LittleCard from "@/components/user_profile/littleCard/littleCard";
import Link from "next/link";

import dayjs from 'dayjs';

const Subes = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

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

    const calculateTimeLeft = (startDate, period) => {
        const endDate = dayjs(startDate).add(period, 'month');
        const now = dayjs();
        const diff = endDate.diff(now, 'day');
        return diff > 0 ? `${diff} дней` : 'Подписка истекла';
    };


    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        // <div className={styles.container}>
        //     <div className={styles.box}>
        //         <h2>Ваши подписки</h2>
        //         {subscriptions.length > 0 ? (
        //             subscriptions.map((subscription) => (
        //                 <div key={subscription._id} className={styles.card} style={{marginTop: "2vh"}}>
        //                     <Link href={`/avtor/${subscription.seller_id._id}`}>
        //                         <LittleCard nickname={subscription.seller_id.nickname}
        //                                     key={subscription.seller_id.nickname}/>
        //                     </Link>
        //                     <p>Период: {subscription.buy_period} месяцев</p>
        //                     {/*<p>Дата подписки: {new Intl.DateTimeFormat('ru-RU').format(new Date(subscription.createdAt))}</p>*/}
        //                     <p>Дата подписки: {dayjs(subscription.createdAt).format('DD.MM.YYYY')}</p>
        //                     <p>Осталось: {calculateTimeLeft(subscription.createdAt, subscription.buy_period)}</p>
        //                 </div>
        //             ))
        //         ) : (
        //             <p>У вас нет активных подписок.</p>
        //         )}
        //     </div>
        // </div>
<div className={styles.main}>
        <div className={styles.container}>
            <h2>Ваши подписки</h2>
            {subscriptions.length > 0 ? (
                subscriptions.map((subscription) => (
                    <div key={subscription._id} className={styles.card} style={{marginTop: "2vh"}}>
                        <Link href={`/avtor/${subscription.seller_id._id}`}>
                            <LittleCard nickname={subscription.seller_id.nickname}
                                        key={subscription.seller_id.nickname}/>
                        </Link>
                        <p>Период: {subscription.buy_period} месяцев</p>
                        {/*<p>Дата подписки: {new Intl.DateTimeFormat('ru-RU').format(new Date(subscription.createdAt))}</p>*/}
                        <p>Дата подписки: {dayjs(subscription.createdAt).format('DD.MM.YYYY')}</p>
                        <p>Осталось: {calculateTimeLeft(subscription.createdAt, subscription.buy_period)}</p>
                    </div>
                ))
            ) : (
                <p>У вас нет активных подписок.</p>
            )}
        </div>
</div>
    );
};

export default Subes;