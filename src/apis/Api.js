import axios from 'axios';

const Apis = axios.create({
  baseURL: 'http://localhost:3001/api/admin/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apis = {
  login(data) {
    return Apis.post('login', data);
  },
};
