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

export interface GetAllUsersSuccessAction {
  type: ActionTypes.FETCH_ALL_USERS_SUCCESS;
  payload: User[]
}

export interface SetUserNameSearchKeyAction {
  type: ActionTypes.SET_USER_NAME_SEARCH_KEY;
  payload: string;
}


export const getAllUsersSuccess = (userList:User[]):GetAllUsersSuccessAction => ({
  type: ActionTypes.FETCH_ALL_USERS_SUCCESS,
  payload: userList
})

export const getAllUsers = () => (dispatch:Dispatch<GetAllUsersSuccessAction>) => {
  axios.get<User[]>(usersUrl)
    .then(res => {
      dispatch(getAllUsersSuccess(res.data));
    })
}

export const setUserNameSearchKey = (search: string) => ({
  type: ActionTypes.SET_USER_NAME_SEARCH_KEY,
  payload: search
})

// export const setUserNameSearchKey = (search: string) => {
//   return {
//     type: ActionTypes.SET_USER_NAME_SEARCH_KEY,
//     payload: search
//   }
// }