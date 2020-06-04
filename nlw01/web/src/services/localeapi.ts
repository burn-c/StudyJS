import axios from 'axios';
import 'dotenv/config';

const baseURL = process.env.REACT_APP_API_LOCALE_URL;

const localeapi = axios.create({
  baseURL,
});

export default localeapi;
