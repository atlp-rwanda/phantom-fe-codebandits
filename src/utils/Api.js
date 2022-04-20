import axios from 'axios';

const host = `${window.location.protocol}//${window.location.host}`;

const base = 'https://phantom-codebandits.herokuapp.com/api/v1';
const axiosBase = axios.create({
  baseURL: base,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'accept-language': 'en',
    'Access-Control-Allow-Origin': host
  }
});

axiosBase.interceptors.request.use(
  async (config) => {
    const { user, authenticated } = JSON.parse(
      localStorage.getItem('auth')
    ) || {
      user: null,
      authenticated: false
    };
    if (user && authenticated === true) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'token'
      )}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const response = await axiosBase.get('/accounts/refresh');
    if (response?.data?.data?.access_token) {
      localStorage.setItem('token', response.data.data.access_token);
      return response.data.data.access_token;
    }
  } catch (error) {
    throw error;
  }
};

axiosBase.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      originalRequest.retry &&
      originalRequest.headers.Authorization
    ) {
      originalRequest.retry = true;
      const accessToken = await refreshToken();
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      return axiosBase(originalRequest);
    }
    if (error?.response?.status === 403) {
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export { axiosBase };

export default axios.create({
  baseURL: 'https://phantom-codebantis.herokuapp.com/api',
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});
