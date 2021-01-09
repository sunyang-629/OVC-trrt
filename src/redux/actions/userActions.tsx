import { ActionTypes } from './ActionTypes';
import { Dispatch } from 'redux';
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
  payload: {
    users:User[]
  }
}

export const getAllUsersSuccess = (users:User[]):GetAllUsersSuccessAction => ({
  type: ActionTypes.FETCH_ALL_USERS_SUCCESS,
  payload: {users}
})

export const getAllUsers = () => (dispatch:Dispatch<GetAllUsersSuccessAction>) => {
  axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch(getAllUsersSuccess(res.data));
    })
}