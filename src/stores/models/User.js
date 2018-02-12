import { types } from 'mobx-state-tree';

const User = types.model(
  'User',
  {
    _id: types.maybe(types.identifier(types.string)),
    nickname : types.maybe(types.string),
    username: types.string,
    photo : types.maybe(types.string),
    email : types.string,
    password: types.maybe(types.string),
    token: types.maybe(types.string),
  },
);

export default User;
