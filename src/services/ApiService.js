import axios from 'axios';

const clientHttp = axios.create({
  baseURL: process.env.MOBX_REACT_ENDPOINT,
});

const apiPaths = {
  projects: {
    list: '/projects',
    create: '/projects/create',
  },
  users: {
    list: '/users',
    signup: '/users/create',
    signin: '/login',
  },
}

export {
  clientHttp,
  apiPaths,
};
