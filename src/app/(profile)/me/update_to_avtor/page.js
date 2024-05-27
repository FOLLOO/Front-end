'use client'

import styles from "./updateTOavtor.module.css";

import React, {useEffect, useRef, useState} from 'react';

import { Editor } from '@tinymce/tinymce-react';

import {useRouter} from "next/navigation";
import axios from "axios";
import {useAuth} from "@/context/AuthContext";
// import {metadata as edit} from "@/app/layout";

function Page(props) {
    const { user } = useAuth()

    const [number, setNumber] = useState("");
    const [nickname, setNickname] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const editorRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        // const description = {};
        const description = await editorRef.current.getContent();
        // description.content = await editorRef.current.getContent();
        // console.log(description);
        try {
            const response = await axios.patch('http://localhost:4000/api/update',
                {  cost: number,
                    descriptions: `${description}`,
                    role: 'автор',
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            if (response.status === 200) {
                localStorage.setItem('role', 'автор');
                router.push('/me');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'Something went wrong');
        }
    };

    useEffect(() => {
        if(user?.cost !== null && user?.cost !== undefined) {
            setNumber(user.cost)
            setNickname(user.descriptions)
        }
    }, [user]);

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h2>Стать автором</h2>
                <form action="#" className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.input_description}>
                        <h1>Расскажите про себя</h1>
                        <p>Так вы привлечете больше пользователей</p>
                    </div>
                    <Editor
                        apiKey='mf3d6sgsnkjl6ghrhbmp471d9oqx6427okrgu7kjog8rxkjd'
                        onInit={(_evt, editor) => editorRef.current = editor}
                        initialValue={nickname}
                        init={{
                            height: 500,
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                            // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                        }}
                        // initialValue="Welcome to TinyMCE!"
                    />
                    <div className={styles.input_description}>
                        <p>Сколько хотите получеть с подписки одного пользователя за месяц</p>
                    </div>
                    <div className={styles.input_box}>
                        <input type="number" placeholder="Напишите цену" className={styles.input}
                               onChange={(e) => setNumber(e.target.value)}
                               value={number? number : null}
                               required/>
                    </div>

                    <div className={`${styles.button}`}>
                        <input type="Submit" value={loading ? 'Загрузка...' : user?.cost ? "Изменить" :"Стать автором"}/>
                    </div>
                    {error ? <p className={styles.error}>{error}</p> : null}
                </form>
            </div>
        </div>
    );
}

export default Page;