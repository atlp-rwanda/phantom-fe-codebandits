import axios from 'axios';

const base = 'https://phantom-codebandits-staging.herokuapp.com/api';
export default axios.create({
  baseURL: base,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});
