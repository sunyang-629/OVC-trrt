import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
  users:[]
}

export const userReducer = (state = initialState, action:any) => {
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
