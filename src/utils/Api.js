import axios from 'axios';
import getLanguage from './getLanguage.js';

const host = `${window.location.protocol}//${window.location.host}`;

const base = 'https://phantom-be-codebandits-staging.herokuapp.com/api/v1';
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
    config.headers['accept-language'] = getLanguage();
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
      !originalRequest._retry &&
      originalRequest.headers.Authorization
    ) {
      originalRequest._retry = true;
      const accessToken = await refreshToken();
      originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
      return axiosBase(originalRequest);
    }
    if (error?.response?.status === 403) {
      window.location = '/login';
      return;
    }
    return Promise.reject(error);
  }
);

export { axiosBase };

export default axios.create({
  baseURL: 'https://phantom-codebantis.herokuapp.com/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});
