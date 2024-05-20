import React from 'react';
import styles from "@/app/posts/posts.module.css";
import LeftHand from "@/components/LeftHand/LeftHand";
import BigCard from "@/components/PostCard/bigCard/bigCard";
import CardMininum from "@/components/PostCard/CardMinimum/CardMininum";

function Page(props) {

    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <LeftHand me_page={true}/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Понравившиеся посты</h1>
                    </div>
                    <BigCard />
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                    <BigCard/>
                </div>

            </div>
        </div>
    );
}

export default Page;