import { GetAllUsersSuccessAction } from './userActions';

export enum ActionTypes {
  FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS'
}

export type UserAction = GetAllUsersSuccessAction;