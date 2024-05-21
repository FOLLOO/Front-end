'use client'

import styles from "@/components/Auth/Registration/registartion.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
import {useState} from "react";


function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordDOP, setPasswordDOP] = useState("");


    const [nickname, setNickname] = useState("");
    const avatarURL = "avatar.png";



    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== passwordDOP) {
            return alert("Пароли не совпадают");
        }
        try {
            const role = "Пользователь";
            const response = await axios.post('http://localhost:4000/api/register',
                { email,
                    password,
                    nickname,
                    avatarURL,
                    role
                });
            if (response.status === 200) {
                const { token, role } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                router.push('/posts');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'Something went wrong');
        }
    };

    return(
        <>
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <h2>Регистрация</h2>
                    <form action="#" className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.input_box}>
                            <input type="text" placeholder="Придумайте Никнейм"
                                   onChange={(e) => setNickname(e.target.value)}
                                   required/>
                        </div>
                        <div className={styles.input_box}>
                            <input type="text" placeholder="Введите ваш Email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   required/>
                        </div>
                        <div className={styles.input_box}>
                            <input type="password" placeholder="Придумайте пароль"
                                   onChange={(e) => setPassword(e.target.value)}
                                   required/>
                        </div>
                        <div className={styles.input_box}>
                            <input type="password" placeholder="Повторите пароль"
                                   onChange={(e) => setPasswordDOP(e.target.value)}
                                   required/>
                        </div>

                        <div className={`${styles.button}`}>
                            <input type="Submit" value={loading ? 'Загрузка...' : "Зарегестрироваться"}/>
                        </div>
                        {error ? <p className={styles.error}>{error}</p> : null}
                        <div className={styles.text}>
                            <h3>Уже есть аккаунт? <Link href="/auth">Авторизоваться</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage;