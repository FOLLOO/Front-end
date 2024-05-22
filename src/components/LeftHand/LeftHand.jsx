'use client'

import React, {useEffect, useRef, useState} from 'react';

import './LeftHand.css';

import arrow_icon from '../../asserts/icons/arrow_down.svg';
import Image from "next/image";

import MadiumCard from "../user_profile/mediumCard/madiumCard";
import LittleCard from "../../components/user_profile/littleCard/littleCard";
import BlueButton from "../buttons/BlueButton/BlueButton";
import SecondBlueButton from "../../components/buttons/SecondBlueButton/SecondBlueButton";
import Link from "next/link";

import TransprentWhiteButton from "@/components/buttons/TransprentWhiteButton/TransprentWhiteButton";
import {useAuth} from "@/context/AuthContext";
import {useParams} from "next/navigation";
import axios from "axios";

function LeftHand({
                      posts_page = false,
                      post_page = false ,
                      avtor_page = false,
                      me_page = false,
                      create_post = false,
                      user_post_id,
                       DATA,
                  }) {

    const choiceRef = useRef(null)
    const [role, setRole] = useState()
    const {user, loading} = useAuth()

    const [avtors, setAvtors] = useState([])
    const [avtor, setAvtor] = useState([])
    // const [DATA, setDATA] = useState([]);
    const {id} = useParams()

    const [open, setOpen] = useState(false)
    const [choiceTitle, setChoiceTitle] = useState('Сначала старые')

    useEffect(() => {
        const roli = localStorage.getItem('role')
        setRole(roli);
    }, [role]);

    const getAvtor = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get((`http://localhost:4000/api/avtor/${id}`), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAvtor(response.data);
                // console.log(data)

            } catch (err) {
                // console.log(err);
                // console.log('id',id)
                console.log('Ошбика при получении постов автора');
            }
        }
    }

    const getAvtors = async () => {
        const token = localStorage.getItem('token');

        try{
            const response = await axios.get((`http://localhost:4000/api/`), )

            if (response.status === 200){
                setAvtors(response.data)
            }
            else{
                setAvtors(null)
            }
        }catch (err){}
    }

    useEffect(() => {
        if (posts_page){
            getAvtors();
        }
        if (post_page){
            // getAvtor();
        }
    }, []);

    console.log('avtor', avtor)
    return (
        <div >
        {posts_page === true ?

            <div className='main align_center gap20' >

            {/*<div className="filter">*/}
            {/*    <div className="ads_filter_select" ref={choiceRef}>*/}
            {/*        <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>*/}
            {/*            {choiceTitle}*/}
            {/*            <Image src={arrow_icon} alt=""/>*/}
            {/*        </div>*/}
            {/*        <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('old')*/}
            {/*                setChoiceTitle('Сначала старые')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>Сначала старые*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('new')*/}
            {/*                setChoiceTitle('Сначала новые')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>Сначала новые*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('views_down')*/}
            {/*                setChoiceTitle('По просмотрам ↑')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>По просмотрам ↑*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('views_up')*/}
            {/*                setChoiceTitle('По просмотрам ↓')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>По просмотрам ↓*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="filter">*/}
            {/*    <div className="ads_filter_select" ref={choiceRef}>*/}
            {/*        <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>*/}
            {/*            {choiceTitle}*/}
            {/*            <Image src={arrow_icon} alt=""/>*/}
            {/*        </div>*/}
            {/*        <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('old')*/}
            {/*                setChoiceTitle('Сначала старые')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>Сначала старые*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('new')*/}
            {/*                setChoiceTitle('Сначала новые')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>Сначала новые*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('views_down')*/}
            {/*                setChoiceTitle('По просмотрам ↑')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>По просмотрам ↑*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('views_up')*/}
            {/*                setChoiceTitle('По просмотрам ↓')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>По просмотрам ↓*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="filter">*/}
            {/*    <div className="ads_filter_select" ref={choiceRef}>*/}
            {/*        <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>*/}
            {/*            {choiceTitle}*/}
            {/*            <Image src={arrow_icon} alt=""/>*/}
            {/*        </div>*/}
            {/*        <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('old')*/}
            {/*                setChoiceTitle('Сначала старые')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>Сначала старые*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('new')*/}
            {/*                setChoiceTitle('Сначала новые')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>Сначала новые*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('views_down')*/}
            {/*                setChoiceTitle('По просмотрам ↑')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>По просмотрам ↑*/}
            {/*            </div>*/}
            {/*            <div className='filter_select-item' onClick={() => {*/}
            {/*                setChoice('views_up')*/}
            {/*                setChoiceTitle('По просмотрам ↓')*/}
            {/*                setOpen(!open)*/}
            {/*            }}>По просмотрам ↓*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="big_title" >
                <h1>В тренде</h1>
            </div>
                {avtors?.length > 0 ?
                avtors?.filter(avtor => avtor?.role_id?.title === 'автор').slice(0, 4).map((avtor) => (
                    <>
                        <Link href={`/avtor/${avtor?._id}`}>
                    <LittleCard nickname={avtor.nickname}/>
                        </Link>
                    </>
                )) : 'Не дуалось найти'
                }
            </div>

        : post_page === true ?
                <div className='main gap40'>
                    <Link href={'/posts'}>
                    <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                    </Link>
                    <div className="title">
                        <h1>Дата публикации</h1>
                    </div>
                    <div className="value">
                        <h1>01/213/12</h1>
                    </div>
                    <div className="title">
                        <h1>Оценить</h1>
                    </div>
                    <div className="value">
                        {/*toDo: добавить кнопку лайк */}
                        <h1>Нравитсься</h1>
                    </div>
                    <div className="title">
                        <h1>Автор</h1>
                    </div>

                    <LittleCard/>
                    <button className="Sub">Подписаться</button>
                </div>
                :
                me_page ?
                    <>
                        <div className='main_big gap40'>
                            <Link href={'/posts'}>
                                <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                            </Link>
                            <div className="title">
                                <h1>Мой профиль</h1>
                            </div>
                            <LittleCard />
                            <div className="title">
                                <h1>Подписки</h1>
                            </div>
                            <LittleCard/>
                            <LittleCard/>
                            <LittleCard/>
                            <BlueButton text={'Посмотреть ещё'} styleee={{width: "100%", textAlign: 'center'}}/>
                                { role === 'пользователь' ?
                            <Link href={'me/update_to_avtor'}>
                            <SecondBlueButton text={'Стать автором'} styleee={{width: "100%", textAlign: 'center'}}/>
                            </Link> : null}
                        </div>
                    </>
                    : avtor_page ?
                        <>
                            <div className='main_big gap40'>
                                <Link href={'/posts'}>
                                    <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                                </Link>
                                <div className="title">
                                    <h1>Моя страница</h1>
                                </div>
                                <Link href={'/me'}>
                                    <LittleCard nickname={user?.nickname}/>
                                </Link>
                                <div className="title">
                                    <h1>Оплата</h1>
                                </div>
                                {/*{ avtor_data ?*/}
                                {/*<div className="money">*/}
                                {/*    <h1>*/}
                                {/*        {avtor_data?.cost ? new Intl.NumberFormat('ru', {*/}
                                {/*            style: 'currency',*/}
                                {/*            currency: 'RUB'*/}
                                {/*        }).format(avtor_data?.cost ) + ' в месяц' : '0₽ в месяц'}*/}
                                {/*    </h1>*/}
                                {/*    <h1>*/}
                                {/*        {avtor_data?.cost  ? new Intl.NumberFormat('ru', {*/}
                                {/*            style: 'currency',*/}
                                {/*            currency: 'RUB'*/}
                                {/*        }).format(avtor_data?.cost  * 12) + ' в год' : '0₽ в год'}*/}
                                {/*    </h1>*/}
                                {/*</div>*/}
                                {/*: null }*/}

                                {/*<div className="money">*/}
                                {/*    <h1>*/}
                                {/*        {user ? new Intl.NumberFormat('ru', {*/}
                                {/*            style: 'currency',*/}
                                {/*            currency: 'RUB'*/}
                                {/*        }).format(user.cost) + ' в месяц' : '0₽ в месяц'}*/}
                                {/*    </h1>*/}
                                {/*    <h1>*/}
                                {/*        {user ? new Intl.NumberFormat('ru', {*/}
                                {/*            style: 'currency',*/}
                                {/*            currency: 'RUB'*/}
                                {/*        }).format(user.cost * 12) + ' в год' : '0₽ в год'}*/}
                                {/*    </h1>*/}
                                {/*</div>*/}
                                {/*}*/}

                                <Link href={'/me/update_to_avtor'}>
                                    <BlueButton text={'Изменить'} styleee={{width: "100%", textAlign: 'center'}}/>
                                </Link>
                            </div>
                        </>
                        : create_post ?
                            <div className='main_big gap40'>
                                <Link href={'/posts'}>
                                    <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                                </Link>
                                <div className="title">
                                    <h1>Моя страница</h1>
                                </div>
                                <Link href={'/me'}>
                                    <LittleCard nickname={user?.nickname}/>
                                </Link>
                                {/*<div className="title">*/}
                                {/*    <h1>Опубликовать</h1>*/}
                                {/*</div>*/}

                                <div className="money">
                                    <h1>
                                        {user ? new Intl.NumberFormat('ru', {
                                            style: 'currency',
                                            currency: 'RUB'
                                        }).format(user.cost) + ' в месяц' : '0₽ в месяц'}
                                    </h1>
                                    <h1>
                                        {user ? new Intl.NumberFormat('ru', {
                                            style: 'currency',
                                            currency: 'RUB'
                                        }).format(user.cost * 12) + ' в год' : '0₽ в год'}
                                    </h1>
                                </div>
                            </div>

                            : null}
        </div>

    );
}

export default LeftHand;