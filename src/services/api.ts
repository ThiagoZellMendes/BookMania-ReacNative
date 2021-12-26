import axios from "axios";
;

const AUTH_TOKEN = '?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'

const api = axios.create({
  baseURL: 'https://api.nytimes.com',
});



export default api;