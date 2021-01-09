import {
  GetAllUsersSuccessAction,
  SetUserNameSearchKeyAction,
  // GetFilteredUsersAction,
} from './userActions';

export enum ActionTypes {
  FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS',
  SET_USER_NAME_SEARCH_KEY = 'SET_USER_NAME_SEARCH_KEY',
  // GET_FILTERED_USERS_ACTION = 'GET_FILTERED_USERS_ACTION'
}

export type UserAction = GetAllUsersSuccessAction | SetUserNameSearchKeyAction ;
// export type UserSearchAction = SetUserNameSearchKeyAction;