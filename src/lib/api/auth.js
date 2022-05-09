import axios from 'axios';

export const login = async ({ id, passwd }) =>
  axios.post('/users/login', { id, passwd });

export const register = async ({ name, id, passwd }) =>
  axios.post('/users/register', { name, id, passwd });
