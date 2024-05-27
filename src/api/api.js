import axios from 'axios';

// Функция для получения подписок пользователя
export const getUserSubscriptions = async (token) => {
    try {
        const response = await axios.get('http://localhost:4000/buy/all', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching subscriptions:', error);
        throw error;
    }
};

// Функция для создания новой подписки
export const createUserSubscription = async (token, subscriptionData) => {
    try {
        const response = await axios.post('http://localhost:4000/buy/add', subscriptionData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating subscription:', error);
        throw error;
    }
};


export const getAvtorbyID = async (token, id) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/avtor/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating subscription:', error);
        throw error;
    }
}

export const searchPosts = async (token, query) => {
    try {
        const response = await axios.get('http://localhost:4000/posts/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { query },
        });
        return response.data;
    } catch (error) {
        console.error('Error performing search:', error);
        throw error;
    }
};


