import { ActionTypes } from './ActionTypes';
import axios from 'axios';

export const getAllUsersSuccess = (users:[]) => ({
  type: ActionTypes.FETCH_ALL_USERS_SUCCESS,
  payload: {users}
})

export const getAllUsers = () => (dispatch:any) => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch(getAllUsersSuccess(res.data));
    })
}