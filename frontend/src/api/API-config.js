import axios from 'axios';

const baseURL = '34.89.239.19:8000/api';

export default axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
