import { ActionTypes, User, UserAction } from '../actions';
import {filterByName} from '../../utils'

const initialState: {
  users: User[],
  searchKey: string,
  filteredUsers:User[],
} = {
  users: [],
  searchKey: "",
  filteredUsers:[]
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
        searchKey: action.payload,
        filteredUsers: filterByName(state.users,action.payload)
      };
    default:
      return state
  }
}
