import axios from "axios";

const api = axios.create({
    baseURL: 'https://todo-app-lz3q.onrender.com',
}
);

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
            config.headers.userId= localStorage.getItem('userId');
        }
        return config;
    },
    (error)=>{
        Promise.reject(error);
    }
)

export default api;