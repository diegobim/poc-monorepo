import axios from 'axios';

export const bff = axios.create({
  baseURL: process.env.BFF_URL,
});

export const api = axios.create({
  baseURL: process.env.API_URL,
});
