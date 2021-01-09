import { ActionTypes, Post, PostAction } from '../actions';

export type PostsState = {
  postList: Post[],
}

const initialState: PostsState = {
  postList: [],
}

export const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        postList: action.payload
      };
    default:
      return state
  }
}