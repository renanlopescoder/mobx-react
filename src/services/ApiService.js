import axios from 'axios';

const clientHttp = axios.create({
  baseURL: process.env.MOBX_REACT_ENDPOINT,
});

const apiPaths = {
  projects: {
    list: '/projects',
    create: '/projects/create',
    update: '/projects/update',
    delete: '/projects/delete',
  },
  users: {
    list: '/users',
    signup: '/users/create',
    signin: '/login',
    update: '/users/update',
  },
}

export {
  clientHttp,
  apiPaths,
};
