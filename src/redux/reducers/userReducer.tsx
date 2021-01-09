import { ActionTypes, User, UserAction } from '../actions';

const initialState: {
  users: User[],
  searchKey: string
} = {
  users: [],
  searchKey: ""
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case ActionTypes.SET_USER_NAME_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload
      };
    default:
      return state
  }
}
