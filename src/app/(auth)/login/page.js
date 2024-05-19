'use client'

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
// import axios from "../../../axios/axios";
import axios from "axios";
import styles from "@/components/Auth/Login/login.module.css";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        setError('');
        // if(!password || email){
        //     setError('Заполните данные вручную')
        //     setLoading(false);
        //     return;
        // }
        try {
            const response = await axios.post('http://localhost:4000/api/login', { email, password });
            if (response.status === 200) {
                const { token, role } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                router.push('/posts');
                setLoading(false)
            } else {
                setError(response.data.message);
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
            setError(error.response?.data?.message || 'Something went wrong');
        }
    };


    return(
        <>
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <h2>Авторизация</h2>
                    <form action="#" className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.input_box}>
                            <input type="text" placeholder="Введите Email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   // value={email}
                                   required/>
                        </div>
                        <div className={styles.input_box}>
                            <input type="password" placeholder="Введите пароль"
                                   onChange={(e) => setPassword(e.target.value)}
                                   // value={password}
                                   required/>
                        </div>
                        <div className={`${styles.button}`}>
                            <input type="Submit" value={loading ? 'Загрузка...' : 'Войти'}/>
                        </div>
                        <div className={styles.text}>
                            <h3>У вас не аккаунта? <Link href="auth/registartion">Зарегестрироваться </Link></h3>
                        </div>
                    </form>
                    {error ? <p className={styles.error}>{error}</p> : null}

                </div>
            </div>
        </>
    )
}

export default Auth;