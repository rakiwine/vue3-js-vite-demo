import axios from "axios";

// 使用环境变量 url 超时
const instance = axios.create({
    baseURL: import.meta.env.VITE_PROXY_DOMAIN,
    timeout: import.meta.env.VITE_API_TIMEOUT,
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 请求发送 处理
        // config.headers['Authorization'] = 'Bearer ' + getToken();
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 响应接收后 处理
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;
