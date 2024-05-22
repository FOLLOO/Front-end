'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userSub, setUserSub] = useState(null);

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:4000/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                    localStorage.removeItem('token');
                    router.push('/');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
            router.push('/');
        }

        if (token){
            axios.get('http://localhost:4000/buy/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(response => {
                setUserSub(response.data);
            })
                .catch(error => {
                    console.error('Error fetching user:', error);
                    // router.push('/');
                    console.log('Ошибка при получении подписок')
                })
                .finally(() => {
                    setLoading(false);
                });
        }else {
            setLoading(false);
            setUserSub(null)
        }
    }, [router]);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, userSub }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}