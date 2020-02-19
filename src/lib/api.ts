import axios from 'axios';

export const axiosInstance = axios.create({
  method: 'get',
  headers: { 'X-API-KEY': process.env.api_key },
  responseType: 'json',
});

export const axiosPostInstance = axios.create({
  method: 'post',
  url: 'https://ryusou-mtkh.microcms.io/api/v1/contacts',
  headers: {
    'Content-Type': 'application/json',
    'X-WRITE-API-KEY': process.env.x_api_key,
  },
});
