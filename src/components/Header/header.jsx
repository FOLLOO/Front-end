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
import {useRouter} from "next/navigation";

function Header() {

    const [data , setData] = useState({});
    const [role, setRole] = useState("");
    const [open, setOpen] = useState(false);

    const router = useRouter()

    const checkAuth = async (token) => {
        // const token = localStorage.getItem('token');
        if (token) {
            const response = await axios.get('http://localhost:4000/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data) {
                setData(response.data);
                console.log("data set");
            } else {
                setData([]); // Установка пустого массива в случае отсутствия данных
                console.log("data is no set");
            }
        }
    }

    const logout = async () => {
        localStorage.clear();
        setData([]);
        return router.push('/login');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token) {
            checkAuth(token);
            setRole(role);
        } else {
            console.log("token");

        }
    }, []);

    useEffect(() => {
        console.log(role); // Выводит обновленные данные после перерендеринга
        console.log(data); // Выводит обновленные данные после перерендеринга
        // Выводит обновленные данные после перерендеринга
    }, [data, role]);

    return (
        <div className={styles.header}>
            <div className={styles.main_header}>
                <div className={styles.heser_logo}>
                    <Image src={logo_dark} alt={'img'} height={100} />
                </div>
                <div className={styles.header_info}>
                    {data._id ?
                        <>
                       <ProfileWithOutBcg header={true}/>
                            <button className={styles.dropdown} onClick={() => setOpen(!open)}>
                            <Image src={arrow_down} alt={'asdf'} width={25}/>
                            </button>
                       {open ?
                            <div className={styles.menue}>
                                <ul className={styles.menueUL}>
                                    <li className={styles.menu_text}>Профиль</li>
                                    <li className={styles.menu_text}>{role === 'пользователь' ? 'Стать автором' : 'Творческая студия'}</li>
                                    {role === 'пользователь' || "автор" ? null :
                                    <li className={styles.menu_text}>Модерация</li>
                                    }
                                    {role === "админ" ?
                                    <li className={styles.menu_text}>Администрирование</li> : null
                                    }
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