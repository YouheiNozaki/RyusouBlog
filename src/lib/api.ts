import axios from 'axios';

export const axiosInstance = axios.create({
  headers: { 'X-API-KEY': process.env.api_key },
  responseType: 'json',
});
