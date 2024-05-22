'use client'

import React, {useEffect, useState} from 'react';
import {useAuth} from "@/context/AuthContext";
import styles from "@/app/posts/post/post.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";



import Comments from "@/components/user_profile/Comments/Comments";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import LeftHand from "@/components/LeftHand/LeftHand";
import parse from "html-react-parser";

import delet from '@/asserts/icons/delete.png'
import update from '@/asserts/icons/update.png'
import {useRouter} from "next/navigation";
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import SecondBlueButton from "@/components/buttons/SecondBlueButton/SecondBlueButton";


// export const metadata = {
//     title: "POST | Abzac Portal",
//     description: "User post view",
// };

function Page({ params: {id}}) {

    const {user} = useAuth()

    const [data, setData] = useState([]);
    const [content , setContent] = useState([]);
    const [comments , setComments] = useState([]);
    const [comment , setComment] = useState("");
    const [editable , setEditable] = useState(false);
    const [editableCom , setEditableCom] = useState(false);

    const [err , setErr] = useState("");

    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    // const renderDescription = data ? parse(data.content) : null;
    const router = useRouter()

    const getData = async () => {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const response = await axios.get((`http://localhost:4000/posts/${id}`), {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
             setData(response.data?.post);
             setContent(response.data.contents);
             setLoading(true)
        } catch (err) {
            console.log(err)
            console.log('Ошбика при получении постов автора');
            setLoading(false)
        }
    }
}

    const getComments = async () => {
    const token = localStorage.getItem('token');
    try{
        const response1 = await axios.get((`http://localhost:4000/posts/${id}/comments`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setComments(response1.data)
        setLoading1(true)

        if (response1.data?.user_id?._id === user?._id){
            setEditableCom(true)
        }
    }catch(err){
        console.log(err)
        console.log('Ошбика при получении коментариев');
        setLoading1(true)
    }
}

    const deleteE = async () => {
        const token = localStorage.getItem('token');

        const ad = confirm('Вы уверены что хотите удалить пост, потом не получится восстановить!')
        if (ad){
            try {
                const response = await axios.delete((`http://localhost:4000/posts/${id}`), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                router.back()
            } catch (err) {
                console.log(err)
                console.log('Ошбика при получении постов автора');
                setLoading(false)
            }
        }
    }

    const deleteC = async (idd) => {
        const token = localStorage.getItem('token');
        if (!idd){
            alert('Невозможно удалить комментарий')
        }
        const ad = confirm('Вы уверены что хотите удалить комментарий, потом не получится восстановить!')
        if (ad){
            try {
                const response = await axios.delete((`http://localhost:4000/posts/${idd}/comments`), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                router.back()
            } catch (err) {
                console.log(err)
                console.log('Ошбика при получении постов автора');
                setLoading(false)
            }
        }
    }

    const createComment = async () => {

        const token = localStorage.getItem('token');
        if (token){
            try{

            const response = await axios.post((`http://localhost:4000/posts/${id}/comments`), {
                text: comment
            },{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                if (response.status === 201) {
                    router.replace();
                }
            }
            catch (err){
                console.log(err)
                alert('Что то пошло не так')
            }
        }
    }

    function goBack() {
        router.push('/moderation')
    }

    const UnBan = async () => {
        console.log('click')
        try {
            const response = await axios.patch(`http://localhost:4000/posts/${id}`,
                {
                    title: data.title,
                    description: data.description,
                    banned: false,
                    contents: content.map((cont) => ({
                        text_content: cont.text_content,
                        image: cont.image,
                    })),
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            if (response.status === 200) {
                router.push(`/moderation`);
            } else {
                setErr(response.data.message);
            }
        } catch (error) {
            console.log(error);
            setErr(error.response?.data?.message || 'Что то пошло не так');
        }
    }

    useEffect(() => {
        getData()
        getComments()
    }, [!loading]);

    useEffect(() => {
        // try{
            if (user?._id === data.user_id){
                setEditable(true)
            }
            else {
            setEditable(false)
            }
        // }catch (err){
        // }
    }, [user]);

    console.log(editable)
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand post_page={true} nickname_avtort={data?.user_id?.nickname} avtor_id={data?.user_id?._id}/>
                <div>
                    {data.banned ?
                        <div className={styles.flex}>
                            <div onClick={UnBan}>
                            <SecondBlueButton text={'Опубликовать'} styleee={{width:'600px',textAlign:'center'}}  />
                            </div>
                            <div onClick={goBack}>
                            <BlueButton text={'Забанить'} styleee={{width:'600px',textAlign:'center'}} />
                            </div>
                        </div>
                        : null }
                    {editable ? <div className={styles.changelog}>
                    <Link href={`/posts/${id}/update_post`}>
                        <Image src={update} alt={'img'} className={styles.img}/>
                    </Link>
                        <Image src={delet} alt={'img'} className={styles.img} onClick={() => deleteE} />
                    </div> : null}
                    {content.length > 0 ? content.map((cont) => (
                    <BigCard post={true} imager={cont.image} />
                        )) : null }
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>{data? data.title : null}</h1>
                        </div>
                        <div className={styles.text}>
                                {content.length > 0 ? content.map((cont) => (
                                    <p>
                                        {parse(cont.text_content)}
                                    </p>

                                )) : null}

                        </div>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.comments}>
                        <div className={styles.title} style={{textAlign:'left', fontSize:'20px'}}>
                            <h1>
                                Оставьте комментарий
                            </h1>
                        </div>
                        <form onSubmit={createComment}>
                            <div className={styles.input_box}>
                                <input type="text" placeholder="Комментарий..." className={styles.input}
                                       onChange={(e) => setComment(e.target.value)}
                                       value={comment ? comment : null}
                                       required/>
                            <BlueButton type={'submit'} text={'Оправить'} styleee={{width: '100%', textAlign:'center', borderRadius: '5px', height: '100%'}} />
                            </div>
                        </form>
                        {comments.length > 0 ?
                            comments.map((cont) => (
                                <>
                                    {editableCom ? <div className={styles.comChange}>
                                        {/*<Image src={update} alt={'img'} className={styles.img}/>*/}
                                        <Image src={delet} alt={'img'} className={styles.img} onClick={() => deleteC(cont?._id)} />
                                    </div> : null}
                                <Comments comments={cont.comment} date={cont.createdAt} user={cont?.user_id?.nickname } />
                                </>
                            ))
                            : <p>Пока что комментариев нет</p>}


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;