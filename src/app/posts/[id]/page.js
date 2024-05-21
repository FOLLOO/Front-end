'use client'

import React, {useEffect, useState} from 'react';
import styles from "@/app/posts/post/post.module.css";

import Comments from "@/components/user_profile/Comments/Comments";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import LeftHand from "@/components/LeftHand/LeftHand";
import axios from "axios";
import parse from "html-react-parser";


// export const metadata = {
//     title: "POST | Abzac Portal",
//     description: "User post view",
// };

function Page({ params: {id}}) {

    const [data, setData] = useState([]);
    const [content , setContent] = useState([]);
    const [comments , setComments] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    // const renderDescription = data ? parse(data.content) : null;


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
    }catch(err){
        console.log(err)
        console.log('Ошбика при получении коментариев');
        setLoading1(true)
    }
}

    useEffect(() => {
        getData()
        getComments()
    }, [!loading]);
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand post_page={true}/>
                <div>
                    <BigCard post={true}/>
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
                        { comments.length > 0 ?
                            comments.map((cont) => (
                                <Comments comments={cont.title}/>
                            ))
                            : <p>Пока что комментариев нет</p>}


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;