'use client'

import React, {useEffect, useState} from 'react';
import styles from './header.module.css';

import logo_dark from '../../asserts/logo/Logo_dark.png';
import arrow_down from '../../asserts/icons/white_arrow.png';

import Image from "next/image";
import BlueButton from "../buttons/BlueButton/BlueButton";
import TransprentWhiteButton from "../../components/buttons/TransprentWhiteButton/TransprentWhiteButton";

import Link from "next/link";
import axios from "axios";
import ProfileWithOutBcg from "@/components/user_profile/ProfileWithOutBcg/ProfileWithOutBcg";


import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import Search from "@/components/search/search";

function Header() {

    const { user, setUser, loading } = useAuth();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const logout = () => {
        localStorage.clear();
        setUser(null);
        router.push('/login');
    };

    useEffect(() => {
        // console.log(user)
        // console.log('role', user?.role_id?.title)
    }, [loading, user]);

    function goModer() {
        router.push('/moderation');
        setOpen(!open)
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    // const [data , setData] = useState([]);
    // const [role, setRole] = useState("");
    // const [open, setOpen] = useState(false);
    // const [loading, setLoading] = useState(true);
    //
    // const router = useRouter()
    //
    // const checkAuth = async (token) => {
    //     // const token = localStorage.getItem('token');
    //     if (token) {
    //         const response = await axios.get('http://localhost:4000/api/me', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         if (response.data) {
    //             setData(response.data);
    //             setLoading(false)
    //             // console.log("data set");
    //         } else {
    //             setData([]); // Установка пустого массива в случае отсутствия данных
    //             console.log("data is no set");
    //         }
    //     }
    // }
    //
    // const logout = async () => {
    //     localStorage.clear();
    //     setData([]);
    //     return router.push('/login');
    // }
    //
    //
    //
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     const role = localStorage.getItem('role');
    //     if (token) {
    //         checkAuth(token);
    //         setRole(role);
    //     } else {
    //         // console.log("token");
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     // console.log(role); // Выводит обновленные данные после перерендеринга
    //     console.log(data);
    //
    //     // Выводит обновленные данные после перерендеринга
    // }, [data]);
    //
    // if(data.length < 0) {
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     )
    // }

    return (
        <div className={styles.header}>
            <div className={styles.main_header}>
                <div className={styles.heser_logo}>
                    <Link href="/posts">
                    <Image src={logo_dark} alt={'img'} height={100} />
                    </Link>
                </div>
                <div className={styles.header_info}>
                    {user ?
                        <>
                            <Search/>
                       <ProfileWithOutBcg header={true} nickname={user.nickname} />
                            <button className={styles.dropdown} onClick={() => setOpen(!open)}>
                            <Image src={arrow_down} alt={'asdf'} width={25}/>
                            </button>
                       {open ?
                            <div className={styles.menue}>
                                <ul className={styles.menueUL}>
                                    <Link href={'/me'}>
                                    <li className={styles.menu_text} >Профиль</li>
                                    </Link>

                                    { user?.role_id?.title === 'модератор' || user?.role_id?.title === 'админ' ?
                                        <li className={styles.menu_text} onClick={goModer}>Модерация</li>
                                        : null
                                    }
                                    {/*{user?.role_id?.title !== 'автор' || 'пользователь' ? null :*/}
                                    <Link href={user.role_id.title === 'автор' ? `./${user._id}` : `./me/update_to_avtor`} >
                                    <li className={styles.menu_text}>{user?.role_id?.title === 'пользователь' ? 'Стать автором'
                                        : user?.role_id?.title === 'автор' ? 'Творческая студия' : null}</li>
                                    </Link>
                                {/*}*/}
                                    {user.role_id.title === 'админ' ? null :
                                    <Link href={`/me/subs`} >
                                        <li className={styles.menu_text}>{'Мои подписки'}</li>
                                    </Link> }
                                    {/*{user?.role_id?.title === "админ" ?*/}
                                    {/*<li className={styles.menu_text}>Администрирование</li> : null*/}
                                    {/*}*/}
                                    <li className={styles.menu_text_red} onClick={() => logout()}>Выйти</li>
                                </ul>
                            </div> : null }
                        </>
                       :  <>
                            <Link href={'/registration'}>
                                <TransprentWhiteButton text={'Регистрация'}  />
                            </Link>
                            <Link href={'/login'}>
                                <BlueButton text={'Войти'}/>
                            </Link>
                            </>
                    }
                </div>
            </div>

        </div>
    );
}

export default Header;