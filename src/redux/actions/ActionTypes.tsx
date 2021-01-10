import {
  GetAllPostsByUserSuccessAction,
  GetAllPostsByUserStartAction,
  GetAllPostsByUserFailureAction,
} from './postActions';
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
  FETCH_ALL_POSTS_BY_USER_START = "FETCH_ALL_POSTS_BY_USER_START",
  FETCH_ALL_POSTS_BY_USER_SUCCESS = 'FETCH_ALL_POSTS_BY_USER_SUCCESS',
  FETCH_ALL_POSTS_BY_USER_FAILURE = "FETCH_ALL_POSTS_BY_USER_START",
}

export type UserAction = GetAllUsersSuccessAction | GetAllUsersFailureAction | FilterUsersByNameAction | GetAllUsersStartAction;
export type PostAction = GetAllPostsByUserSuccessAction | GetAllPostsByUserStartAction | GetAllPostsByUserFailureAction;
