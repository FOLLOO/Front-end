'use client'

import React, {useEffect, useRef, useState} from 'react';
import { searchPosts } from '@/api/api';

import styles from './search.module.css';
import Link from "next/link";

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const resultsRef = useRef(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const token = localStorage.getItem('token');
        try {
            const data = await searchPosts(token,query);
            setResults(data);
            setOpen(!open)
        } catch (err) {
            setError('Error performing search');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target)) {
                setResults([]); // Очистить результаты при клике вне области
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, []);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSearch} className={styles.form}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Найти пост..."
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Найти</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            { open ?
                <div className={styles.result} ref={resultsRef}>
                {results.length > 0 ? (
                        results.map((result) => (
                            <Link href={`/avtor/${result.user_id}`} onClick={() => setOpen(!open)}>

                            <div key={result._id} className={styles.resultItem}>
                                <h2 className={styles.resultTitle}>{result.title}</h2>
                                <p className={styles.resultDescription}>{result.description}</p>
                            </div>
                            </Link>
                        ))
                ) : null}
                </div > : null}
        </div>
    );
};

export default Search;