import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer
})

export type RootState = ReturnType<typeof rootReducer>