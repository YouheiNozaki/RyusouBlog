import axios, { AxiosRequestConfig } from 'axios';
import { GET } from '../types/get';

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.api_key,
  },
  responseType: 'json',
});

export const axiosPostInstance = axios.create({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'X-WRITE-API-KEY': process.env.x_api_key,
  },
});

export function apiGet<T extends keyof GET>(
  url: T,
  config?: AxiosRequestConfig,
) {
  return axiosInstance.get<GET[T]['res']>(url, config);
}
