'use client'

import React, {useEffect, useRef, useState} from 'react';

import {Editor} from "@tinymce/tinymce-react";
import {useAuth} from "@/context/AuthContext";

import styles from "@/app/(profile)/[id]/add_post/add_post.module.css";

import LeftHand from "@/components/LeftHand/LeftHand";
import {useParams, useRouter} from "next/navigation";
import axios from "axios";


function Page(props) {

    const { user, setUser, loading } = useAuth();

    const [err, setErr] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const editorRef = useRef(null);
    const [file, setFile] = useState(null);
    // const file = useRef()
    const {id} = useParams()

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr('');
        // console.log(file)
        // const description = {};
        const content = await editorRef.current.getContent();
        // description.content = await editorRef.current.getContent();
        // console.log(description);



        try {

            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', file);
            formData.append('content', content);
            // console.log(file);
            const uploadResponse = await axios.post('http://localhost:4000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            const imageUrl = uploadResponse.data.url;

            const response = await axios.post('http://localhost:4000/posts/add',
                {
                    title: title,
                    description: description,
                    contents: [
                        {
                            text_content : content,
                            image: imageUrl,
                        }
                    ]
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            if (response.status === 201) {
                alert('Пост сохранен, дождитесь модерации.')
            } else {
                setErr(response.data.message);
            }
            router.push(`/me`);
        } catch (error) {
            console.log(error);
            setErr(error.response?.data?.message || 'Что то пошло не так');
        }
    };



    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                {/*<LeftHand avtor_page={true}/>*/}
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Создание поста</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.title_min}>
                            <h1>Заголовок поста</h1>
                        </div>
                        <div className={styles.input_box}>
                            <input type="text" placeholder="Заголовок поста" className={styles.input}
                                   onChange={(e) => setTitle(e.target.value)}
                                   value={title ? title : null}
                                   required/>
                        </div>
                        <div className={styles.title_min}>
                            <h1>Описание поста</h1>
                        </div>
                        <div className={styles.input_box}>
                            <input type="text" placeholder="Описание поста" className={styles.input}
                                   onChange={(e) => setDescription(e.target.value)}
                                   value={description ? description : null}
                                   required/>
                        </div>
                        <div className={styles.title_min}>
                            <h1>Превью для поста</h1>
                        </div>
                        <div className={styles.input_box}>
                            <input type="file" placeholder="Описание поста" className={styles.input}
                                   onChange={(e) => setFile(event.target.files[0])}
                                   // value={file ? file : null}
                                   required/>
                        </div>
                        <div className={styles.title_min}>
                            <h1>Содержание поста</h1>
                        </div>
                        <Editor
                            apiKey='59v4ssjagkxmgyyn6dwmxjpdo5pz0j0517va65gpp59h08qd'
                            onInit={(_evt, editor) => editorRef.current = editor}
                            initialValue={content}
                            init={{
                                height: 500,
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                mergetags_list: [
                                    {value: 'First.Name', title: 'First Name'},
                                    {value: 'Email', title: 'Email'},
                                ],
                                // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                            }}
                            // initialValue="Welcome to TinyMCE!"
                        />
                        <div className={styles.button}>
                            <input type="Submit" value={loading ? 'Загрузка...' : "Опубликовать"}/>
                        </div>
                        {err ? err : null}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;