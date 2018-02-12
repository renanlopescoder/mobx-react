import { flow } from 'mobx-state-tree';

import { ErrorTracker } from '../../helpers';
import { SessionService } from '../../services';
import {
  fetchUserListRequest,
  createUserRequest,
  signinRequest,
  updateUserRequest,
} from '../../requests';
import User from '../models/User'

/* eslint-disable no-param-reassign */
const UserActions =(self) => {

  const fetchUserList = flow(
    function* fetchUserList() {
      self.loading = true;
      try {
        const users = yield fetchUserListRequest();
        users.map(user => self.users.put(user))
      } catch (error) {
        throw error;
        ErrorTracker.error(error);
      } finally {
        self.loading = false;
      };
    }
  );

  const signin = flow(
    function* signin(email, password) {
      self.loading = true;
      try {
        const user = yield signinRequest(email, password);
        SessionService.initSession(user)
      } catch (error) {
        throw error;
        ErrorTracker.error(error);
      } finally {
        self.loading = false;
      };
    }
  );

  const signup = flow(
    function* signup(user) {
      self.loading = true;
      try {
        const userModel = User.create(user);
        yield createUserRequest(userModel);
      } catch (error) {
        throw error;
        ErrorTracker.error(error);
      } finally {
        self.loading = false;
      };
    }
  );

  const updateUser = flow(
    function* updateUser(user) {
      self.loading = true;
      try {
        const userModel = User.create(user);
        yield updateUserRequest(userModel);
      } catch (error) {
        throw error;
        ErrorTracker.error(error);
      } finally {
        self.loading = false;
      };
    }
  );

  return { fetchUserList, signin, signup, updateUser };
};

export default UserActions;
