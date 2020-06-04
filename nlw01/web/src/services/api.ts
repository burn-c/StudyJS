import axios from 'axios';
import 'dotenv/config';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
});

export default api;
