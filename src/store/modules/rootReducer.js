import { combineReducers } from 'redux';

import user from './user/reducer';
import users from './users/reducer';

export default combineReducers({ users, user });
