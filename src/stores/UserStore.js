import { types } from "mobx-state-tree";

import User from './models/User';
import UserActions from './actions/UserActions';

const UserStore = types.model('UserStore', {
  loading: types.maybe(types.boolean),
  users: types.map(User),
})
.actions(UserActions);

export default UserStore;
