import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ec-backend-dve8vuizg-ednilsonantonios-projects.vercel.app/',
});


export default api