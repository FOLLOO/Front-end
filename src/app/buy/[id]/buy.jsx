'use client'

import React, {useEffect, useState} from 'react';

import {createUserSubscription, getAvtorbyID} from "@/api/api";
import './buy.css';
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";


function Buy(props) {
    const [sellerId, setSellerId] = useState('');
    const [buyPeriod, setBuyPeriod] = useState('1');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const [cost, setCost] = useState(0);

    const {id} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); // Перенаправление на страницу логина, если токен отсутствует
            return;
        }
        try {
            const subscriptionData = { seller_id: id, buy_period: buyPeriod };
            await createUserSubscription(token, subscriptionData);
            router.push('/me/subs'); // Перенаправление на страницу подписок после создания
        } catch (err) {
            setError('Ошибка при создании подписки');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const getData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); // Перенаправление на страницу логина, если токен отсутствует
            return;
        }
        try {
            const data = await getAvtorbyID(token, id);
            setCost(data.cost);
            console.log(data);
        } catch (err) {
            setError('Ошибка при определении автора');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="buy-container-main">
            <form onSubmit={handleSubmit} className="buy_form">
            <h1>Оплата подписки</h1>
                <div className="container">
                    <div className="card">
                        <label>Card number:</label>
                        <input id="user" type="text" className="input cardnumber" placeholder="1234 5678 9101 1121" maxLength={19}
                               // pattern={"\d{4} \d{4} \d{4} \d{4}"}
                        />
                        <label>Name:</label>
                        <input className="input name" placeholder="NAME SURNAME" required/>
                        <label className="toleft">CCV:</label>
                        <input className="input toleft ccv" placeholder="321" maxLength={3}  required/>
                    </div>
                </div>
                <div>
                    <label>Период подписки (в месяцах):</label>
                    <select value={buyPeriod} onChange={(e) => setBuyPeriod(e.target.value)} required>
                        <option value="1">1 месяц</option>
                        <option value="3">3 месяца</option>
                        <option value="12">12 месяцев</option>
                    </select>
                </div>
                <div className="flex">
                <h1>К оплате:</h1>
                    <h3>{new Intl.NumberFormat('ru', {
                        style: 'currency',
                        currency: 'RUB'
                    }).format(cost * Number(buyPeriod))}</h3>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Загрузка...' : 'Подписаться'}
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Buy;