import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://snp-tests.herokuapp.com/api/v1/'
});
