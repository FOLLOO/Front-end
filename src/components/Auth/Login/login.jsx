import React from 'react';

import styles from './login.module.css';
import Link from "next/link";

function Login(props) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h2>Авторизация</h2>
                <form action="#" className={styles.form}>
                    <div className={styles.input_box}>
                        <input type="text" placeholder="Введите Email" required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type="password" placeholder="Введите пароль" required/>
                    </div>

                    <div className={`${styles.button}` }>
                        <input type="Submit" value="Войти"/>
                    </div>
                    <div className={styles.text}>
                        <h3>У вас не аккаунта? <Link href="auth/registartion">Зарегестрироваться </Link></h3>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;