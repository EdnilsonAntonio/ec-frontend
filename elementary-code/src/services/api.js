import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ec-backend-two.vercel.app',
});

export default api