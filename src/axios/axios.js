import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
});

function getAuthToken() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
}

instance.defaults.headers.common["Authorization"] = getAuthToken();

export default instance;
