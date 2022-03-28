import axios from 'axios';

const base = 'https://phantom-codebantis.herokuapp.com/api';
export default axios.create({
  baseURL: base,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});
