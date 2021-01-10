import { ActionTypes } from './ActionTypes';
import { Dispatch } from 'redux';
import { usersUrl } from '../../urls/urls';
import axios from 'axios';

export interface User {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    }
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface GetAllUsersStartAction {
  type: ActionTypes.FETCH_ALL_USERS_START,
  payload: boolean
}

export interface GetAllUsersSuccessAction {
  type: ActionTypes.FETCH_ALL_USERS_SUCCESS;
  payload: User[]
}

export interface GetAllUsersFailureAction {
  type: ActionTypes.FETCH_ALL_USERS_FAILURE;
  payload: string;
}

export interface FilterUsersByNameAction {
  type: ActionTypes.FILTER_USERS_BY_NAME;
  payload: string;
}


export const getAllUsers = () => (dispatch: Dispatch<GetAllUsersStartAction|GetAllUsersSuccessAction|GetAllUsersFailureAction>):Promise<void> => {
  dispatch(getAllUsersStart())
  return axios.get<User[]>(usersUrl)
    .then(res => {
      dispatch(getAllUsersSuccess(res.data));
    })
    .catch(error => {
      dispatch(getAllUsersFailure())
    })
}


export const getAllUsersStart = ():GetAllUsersStartAction => ({
  type: ActionTypes.FETCH_ALL_USERS_START,
  payload: false
})


export const getAllUsersSuccess = (userList:User[]):GetAllUsersSuccessAction => ({
  type: ActionTypes.FETCH_ALL_USERS_SUCCESS,
  payload: userList
})

export const getAllUsersFailure = (): GetAllUsersFailureAction => ({
  type: ActionTypes.FETCH_ALL_USERS_FAILURE,
  payload: 'Oops, something went wrong...'
})

export const filterUsersByName = (search: string) => ({
  type: ActionTypes.FILTER_USERS_BY_NAME,
  payload: search
})
