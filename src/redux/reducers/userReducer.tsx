import { ActionTypes, User, UserAction } from '../actions';
import {filterByName} from '../../utils'

export type UsersState = {
  userList: User[],
  searchKey: string,
  filteredUserList:User[],
}

const initialState: UsersState = {
  userList: [],
  searchKey: "",
  filteredUserList:[]
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload
      };
    case ActionTypes.SET_USER_NAME_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload,
        filteredUserList: filterByName(state.userList,action.payload)
      };
    default:
      return state
  }
}
