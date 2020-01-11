import axios from 'axios';

const baseURLEndpoint = 'http://34.89.239.19:8000/api';

export default axios.create({
  baseURL: baseURLEndpoint,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
