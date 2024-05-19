import React from 'react';
import styles from './footer.module.css';

import logo_big from '../../asserts/logo/Logo_big.png';
import Image from "next/image";

import Link from "next/link";

import vk from '../../asserts/icons/vk.png'
import telegram from '../../asserts/icons/telegram.png'
import git from '../../asserts/icons/git.png'
import discord from '../../asserts/icons/discord.png'

function Footer(props) {

    return (
        <div className={styles.main}>
            <div className={styles.footer_container}>
                <div className={styles.logo}>
                    <Image src={logo_big} alt={'img'} height={300} />
                </div>
                <div className={styles.links}>
                    <div className={styles.title}>
                        <h1>Поделиться</h1>
                    </div>
                    <div className={styles.links_logo}>
                        <div className={styles.child_link}>
                            <Image src={discord} alt={'img'} height={38} />
                        </div>
                        <div className={styles.child_link}>
                            <Image src={vk} alt={'img'} height={38} />
                        </div>
                        <div className={styles.child_link}>
                            <Image src={telegram} alt={'img'} height={38} />

                        </div>
                        <div className={styles.child_link}>
                            <Image src={git} alt={'img'} height={38} />
                        </div>
                    </div>
                </div>
                <div className={styles.footer_copi}>
                    <h1>© ABZAC Portal 2024. Все права защищены.</h1>
                </div>
            </div>
        </div>
    );

}

export default Footer;