import axios from 'axios';

export const axiosInstance = axios.create({
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.api_key,
  },
});

export const axiosPostInstance = axios.create({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'X-WRITE-API-KEY': process.env.x_api_key,
  },
});
