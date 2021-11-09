import axios from 'axios';

const headers = {};

if (localStorage.getItem('idToken')) {
   headers.authorization = `Bearer ${localStorage.getItem('idToken')}`;
}

//@ creating a axios instance with some basic configuration
export const axiosInstance = axios.create({
   baseURL: 'https://doc-portals-server.herokuapp.com/',
});

//@ axios instance with auth token
export const axiAuth = axios.create({
   baseURL: 'https://doc-portals-server.herokuapp.com/',
   headers,
});
