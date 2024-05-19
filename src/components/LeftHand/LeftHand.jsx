'use client'

import React, {useRef, useState} from 'react';

import './LeftHand.css';

import arrow_icon from '../../asserts/icons/arrow_down.svg';
import Image from "next/image";
import MadiumCard from "../user_profile/mediumCard/madiumCard";
import LittleCard from "../../components/user_profile/littleCard/littleCard";
import BlueButton from "../buttons/BlueButton/BlueButton";
import SecondBlueButton from "../../components/buttons/SecondBlueButton/SecondBlueButton";
import Link from "next/link";

function LeftHand({posts_page = false, post_page = false , avtor_page = false, history_page = false,  }) {

    const choiceRef = useRef(null)
    const [status, setStatusActive] = useState(false);
    const [statusArchive, setStatusArchive] = useState(false);
    const [search, setSearch] = useState('')
    const [typeAd, setTypeAd] = useState('activeAd')
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState([...dataUser])
    const [choice, setChoice] = useState('old')
    const [choiceTitle, setChoiceTitle] = useState('Сначала старые')


    return (
        <div >
        {posts_page === true ?

            <div className='main align_center gap20' >

            <div className="filter">
                <div className="ads_filter_select" ref={choiceRef}>
                    <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>
                        {choiceTitle}
                        <Image src={arrow_icon} alt=""/>
                    </div>
                    <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('old')
                            setChoiceTitle('Сначала старые')
                            setOpen(!open)
                        }}>Сначала старые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('new')
                            setChoiceTitle('Сначала новые')
                            setOpen(!open)
                        }}>Сначала новые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_down')
                            setChoiceTitle('По просмотрам ↑')
                            setOpen(!open)
                        }}>По просмотрам ↑
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_up')
                            setChoiceTitle('По просмотрам ↓')
                            setOpen(!open)
                        }}>По просмотрам ↓
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter">
                <div className="ads_filter_select" ref={choiceRef}>
                    <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>
                        {choiceTitle}
                        <Image src={arrow_icon} alt=""/>
                    </div>
                    <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('old')
                            setChoiceTitle('Сначала старые')
                            setOpen(!open)
                        }}>Сначала старые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('new')
                            setChoiceTitle('Сначала новые')
                            setOpen(!open)
                        }}>Сначала новые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_down')
                            setChoiceTitle('По просмотрам ↑')
                            setOpen(!open)
                        }}>По просмотрам ↑
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_up')
                            setChoiceTitle('По просмотрам ↓')
                            setOpen(!open)
                        }}>По просмотрам ↓
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter">
                <div className="ads_filter_select" ref={choiceRef}>
                    <div className="flex-filter space-between ads_filter-header" onClick={() => setOpen(!open)}>
                        {choiceTitle}
                        <Image src={arrow_icon} alt=""/>
                    </div>
                    <div className={open ? 'block ads_filter_select-body' : 'filter_select-body-none'}>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('old')
                            setChoiceTitle('Сначала старые')
                            setOpen(!open)
                        }}>Сначала старые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('new')
                            setChoiceTitle('Сначала новые')
                            setOpen(!open)
                        }}>Сначала новые
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_down')
                            setChoiceTitle('По просмотрам ↑')
                            setOpen(!open)
                        }}>По просмотрам ↑
                        </div>
                        <div className='filter_select-item' onClick={() => {
                            setChoice('views_up')
                            setChoiceTitle('По просмотрам ↓')
                            setOpen(!open)
                        }}>По просмотрам ↓
                        </div>
                    </div>
                </div>
            </div>

            <div className="big_title" >
                <h1>В тренде</h1>
            </div>
            <LittleCard/>
            <LittleCard/>
            <LittleCard/>
            </div>

        : post_page === true ?
                <div className='main gap40'>
                    <Link href={'./'}>
                    <SecondBlueButton text={'Назад'} styleee={{width: "100%", textAlign: 'center'}}/>
                    </Link>
                    <div className="title">
                        <h1>Дата публикации</h1>
                    </div>
                    <div className="value">
                        <h1>01/213/12</h1>
                    </div>
                    <div className="title">
                        <h1>Оценить</h1>
                    </div>
                    <div className="value">
                        {/*toDo: добавить кнопку лайк */}
                        <h1>Нравитсься</h1>
                    </div>
                    <div className="title">
                        <h1>Автор</h1>
                    </div>
                    <LittleCard/>
                    <button className="Sub">Подписаться</button>
                </div>
                : null}
        </div>

    );
}

export default LeftHand;