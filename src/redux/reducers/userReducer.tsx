import { ActionTypes, User, UserAction } from '../actions';
import {filterByName} from '../../utils'

export type UsersState = {
  userList: User[],
  searchKey: string,
  filteredUserList: User[],
  isLoading: boolean,
  error: string,
}

const initialState: UsersState = {
  userList: [],
  searchKey: "",
  filteredUserList: [],
  isLoading: false,
  error: ""
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false
      };
    case ActionTypes.FETCH_ALL_USERS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case ActionTypes.FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ActionTypes.FILTER_USERS_BY_NAME:
      return {
        ...state,
        searchKey: action.payload,
        filteredUserList: filterByName(state.userList,action.payload)
      };
    default:
      return state
  }
}
