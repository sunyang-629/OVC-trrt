import { ActionTypes, User, UserAction } from '../actions';

const initialState:{users:User[]} = {
  users:[]
}

export const userReducer = (state = initialState, action:UserAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users:action.payload.users
      }
    default:
      return state
  }
}
