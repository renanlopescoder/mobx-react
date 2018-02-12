import { clientHttp, apiPaths } from '../services'
import { ErrorTracker } from '../helpers';

const fetchUserListRequest = () =>
  clientHttp.get(apiPaths.users.list).then(response => response.data)

const createUserRequest = user =>
  clientHttp.post(apiPaths.users.signup, user).then(response => response.data)

const signinRequest = (email, password) =>
  clientHttp.post(apiPaths.users.signin, {email, password}).then(response => response.data)

export {
  fetchUserListRequest,
  createUserRequest,
  signinRequest,
};
