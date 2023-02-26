/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';

// Client de api para uso local direcionado para DEV
const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`
  }
});

export default api;
