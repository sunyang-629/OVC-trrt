import { ActionTypes, Post, PostAction } from '../actions';

export type PostsState = {
  postList: Post[],
  isLoading: boolean,
  error: string
}

const initialState: PostsState = {
  postList: [],
  isLoading: false,
  error: ""
}

export const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_POSTS_BY_USER_START:
      return {
        ...state,
        isLoading: true,
        error:""
      }
    case ActionTypes.FETCH_ALL_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        postList: action.payload,
        isLoading: false
      };
    case ActionTypes.FETCH_ALL_POSTS_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}