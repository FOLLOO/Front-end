import React from 'react';
import styles from "./registartion.module.css";
import Link from "next/link";

function Registartion(props) {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h2>Регистрация</h2>
                <form action="#" className={styles.form}>
                    <div className={styles.input_box}>
                        <input type="text" placeholder="Придумайте Никнейм" required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type="text" placeholder="Введите ваш Email" required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type="password" placeholder="Придумайте пароль" required/>
                    </div>
                    <div className={styles.input_box}>
                        <input type="password" placeholder="Повторите пароль" required/>
                    </div>

                    <div className={`${styles.button}`}>
                        <input type="Submit" value="Зарегестрироваться"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Уже есть аккаунт? <Link href="/auth">Авторизоваться</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registartion;