import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.3.52.12:3333',
});

export default api;
