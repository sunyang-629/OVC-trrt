import { GetAllPostsByUserSuccessAction } from './postActions';
import {
  GetAllUsersStartAction,
  GetAllUsersSuccessAction,
  GetAllUsersFailureAction,
  FilterUsersByNameAction,
} from './userActions';

export enum ActionTypes {
  FETCH_ALL_USERS_START = 'FETCH_ALL_USERS_START',
  FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS',
  FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE",
  FILTER_USERS_BY_NAME = 'FILTER_USERS_BY_NAME',
  FETCH_ALL_POSTS_BY_USER_SUCCESS = 'FETCH_ALL_POSTS_BY_USER_SUCCESS'
  // GET_FILTERED_USERS_ACTION = 'GET_FILTERED_USERS_ACTION'
}

export type UserAction = GetAllUsersSuccessAction | GetAllUsersFailureAction | FilterUsersByNameAction | GetAllUsersStartAction;
export type PostAction = GetAllPostsByUserSuccessAction;
// export type UserSearchAction = SetUserNameSearchKeyAction;