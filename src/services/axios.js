import axios from 'axios';

const axiosInstance = axios.create({
// vite prefix is required for public access
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 📤 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add token from localStorage
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // console.log('📤 Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    // console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// 📥 Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('✅ Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    // console.error('❌ Response Error:', error?.response?.status, error?.message);

    // Example: Handle 401 Unauthorized globally
    if (error.response?.status === 401) {
      // You can redirect or logout user
      // window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
