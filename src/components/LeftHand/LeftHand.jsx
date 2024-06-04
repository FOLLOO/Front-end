'use client'

import React, {useEffect, useMemo, useRef, useState} from 'react';
import axios from "axios";
import Link from "next/link";

import './LeftHand.css';

import likedd from '@/asserts/icons/liked.png'
import noLiked from '@/asserts/icons/noLike.png'

import LittleCard from "../../components/user_profile/littleCard/littleCard";
import BlueButton from "../buttons/BlueButton/BlueButton";
import SecondBlueButton from "../../components/buttons/SecondBlueButton/SecondBlueButton";

import {useAuth} from "@/context/AuthContext";
import {useParams, useRouter} from "next/navigation";
import {isLiked, LikePost, dislikePost, likelikerequest} from "@/api/api";
import Image from "next/image";


function LeftHand({
                      posts_page = false,
                      post_page = false ,
                      avtor_page = false,
                      me_page = false,
                      create_post = false,
                      nickname_avtort,
                      avtor_id,
                      avtor_cost, post_date, subscribe = false, posts_id
                  }) {

    const choiceRef = useRef(null)
    const [role, setRole] = useState()
    const {user, loading, userSub} = useAuth()

    const [sub, setSub] = useState(false)

    const router = useRouter()

    const [avtors, setAvtors] = useState([])
    const [avtor, setAvtor] = useState([])
    const {id} = useParams()

    const [open, setOpen] = useState(false)
    const [choiceTitle, setChoiceTitle] = useState('Сначала старые')

    const [liked, setLiked] = useState([])

    useEffect(() => {
        const roli = localStorage.getItem('role')
        setRole(roli);
    }, [role]);

    const Subscribe = async () => {
        router.push(`/buy/${avtor_id}`)
   }

    const checkUserSubscriptions = async (userId, subscriptions) => {
        const userSubscriptions = subscriptions.filter(sub => sub.buyer_id === userId);
        // Устанавливаем sub в true, если длина массива userSubscriptions больше 0, иначе в false
        setSub(userSubscriptions.length > 0);
    };

    const getLike = async () => {
        const token = localStorage.getItem('token');
        if (!token){
            alert('вы не авторизированы!')
            router.push('/login');
        }
        try {
            const data = await isLiked(token, id);
                setLiked(data);
        } catch (err) {
            console.log(err)
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

    const getAvtor = async () => {
        const token = localStorage.getItem('token')
        try{

            const response = await axios.get((`http://localhost:4000/api/avtor/${id}`), {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            // console.log(response.data)
                setAvtor(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        // getAvtor();
        if (posts_page){
            getAvtors();
        }
        if (post_page){
            getLike()
        }
        if (avtor_page){
            getAvtor()
        }
    }, []);

    const likePost = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Вы не авторизованы!');
            router.push('/login');
            return;
        }
        try {
            const data = await LikePost(token, id);
            // Возможно, вам нужно обновить состояние компонента или выполнить другие действия после успешного лайка
            alert('Обновите страницу, вы удалили свой лайк! ')
            // router.push(`/posts/${id}`);
        } catch (err) {
            console.error('Ошибка при лайке поста:', err);
            // Здесь вы можете обработать ошибку, например, показать пользователю сообщение об ошибке
        }
    };

    const dislikePostt = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Вы не авторизованы!');
            router.push('/login');
            return;
        }
        try {
            const data = await dislikePost(token, id);
            // Возможно, вам нужно обновить состояние компонента или выполнить другие действия после успешного лайка
            alert('Обновите страницу, вы удалили свой лайк! ')
            // router.push(`/posts/${id}`);
        } catch (err) {
            console.error('Ошибка при лайке поста:', err);
            // Здесь вы можете обработать ошибку, например, показать пользователю сообщение об ошибке
        }
    };

    const likelike = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Вы не авторизованы!');
            router.push('/login');
            return;
        }
        try {
            const data = await likelikerequest(token, id);
            // Возможно, вам нужно обновить состояние компонента или выполнить другие действия после успешного лайка
            alert('Обновите страницу, вы удалили свой лайк! ')
            // router.push(`/posts/${id}`);

        } catch (err) {
            console.error('Ошибка при лайке поста:', err);
            // Здесь вы можете обработать ошибку, например, показать пользователю сообщение об ошибке
        }
    };


    const userSubscriptions = useMemo(() => {
        if (user && userSub) {
            return checkUserSubscriptions(user?._id, userSub);
        }
        return false;
    }, [user, userSub]);

    useEffect(() => {
        if (post_page && userSubscriptions !== sub) {
            setSub(userSubscriptions);
        }
    }, [post_page, userSubscriptions, sub]);

    useEffect(() => {

    }, [liked]);
    // console.log(liked);

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
                    avtors?.filter(avtor => avtor?.role_id?.title === 'автор')
                        .slice(0, 6)
                        .sort(() => Math.random() - 0.5)
                        .map((avtor) => (
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
                        <h1>
                        {post_date ? new Intl.DateTimeFormat('ru-RU').format(new Date(post_date)) : ' '}
                        </h1>
                    </div>
                    <div className="title">
                        <h1>Оценить</h1>
                    </div>
                    <div className="value">
                        {/*/!*toDo: добавить кнопку лайк *!/*/}
                        {liked?.like ?
                            <Image src={likedd} alt={'img'} onClick={() => dislikePostt()}/>
                        :  liked?.like === false ?
                            <Image src={noLiked} alt={'img'} onClick={() => likelike()}/>
                            : liked === null ?
                            <Image src={noLiked} alt={'img'} onClick={() => likePost()}/> : null
                        }
                    </div>
                    <div className="title">
                        <h1>Автор</h1>
                    </div>
                    <Link href={`/avtor/${avtor_id}`}>
                    <LittleCard nickname={nickname_avtort}/>
                    </Link>
                    {subscribe ?
                        <div onClick={null}>
                            <BlueButton text={'Вы подписаны'} styleee={{
                                width: "100%",
                                textAlign: 'center',
                                background: "gray"
                            }}/>
                        </div>
                        : avtor_id === user?._id ?
                            null
                            :
                            <div onClick={Subscribe}>
                                <BlueButton text={'Подписаться'}
                                            styleee={{width: "100%", textAlign: 'center', background: "darkred"}}/>
                            </div>

                    }

                </div>
                :
                avtor_page ?
                    <>
                        <div className='main_big gap40'>
                        <Link href={'/posts'}>
                                    <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                                </Link>
                                <div className="title">
                                    <h1>Моя страница</h1>
                                </div>
                                <Link href={'/me'}>
                                    <LittleCard nickname={nickname_avtort ? nickname_avtort : avtor.nickname}/>
                                </Link>
                                <div className="title">
                                    <h1>Оплата</h1>
                                </div>
                                <div className="money">
                                    <h1>
                                        {avtor_cost ? new Intl.NumberFormat('ru', {
                                            style: 'currency',
                                            currency: 'RUB'
                                        }).format(avtor_cost) + ' в месяц' : avtor.cost ? 
                                         new Intl.NumberFormat('ru', {
                                            style: 'currency',
                                            currency: 'RUB'
                                        }).format(avtor.cost) + ' в месяц'
                                        :  '0₽ в месяц'}
                                    </h1>
                                    <h1>
                                        {avtor_cost ? new Intl.NumberFormat('ru', {
                                            style: 'currency',
                                            currency: 'RUB'
                                        }).format(avtor_cost   * 12) + ' в год' :  avtor.cost ? new Intl.NumberFormat('ru', {
                                            style: 'currency',
                                            currency: 'RUB'
                                        }).format(avtor.cost   * 12) + ' в год' : '0₽ в год'}
                                    </h1>
                                </div>


                                {avtor_id === user?._id ?
                                    <Link href={'/me/update_to_avtor'}>
                                        <BlueButton text={'Изменить'} styleee={{width: "100%", textAlign: 'center'}}/>
                                    </Link>
                                    :
                                    <div onClick={subscribe ? null : Subscribe}>
                                        <BlueButton text={subscribe ? 'Вы подписаны' : 'Подписаться'} styleee={subscribe ? {
                                            width: "100%",
                                            textAlign: 'center',
                                            background: "gray"
                                        } : {width: "100%", textAlign: 'center', background: "darkred"}}/>
                                    </div> }

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