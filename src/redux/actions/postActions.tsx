import { ActionTypes } from './ActionTypes';
import { Dispatch } from 'redux';
import { postsUrl } from '../../urls/urls';
import axios from 'axios';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface GetAllPostsByUserStartAction {
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_START;
  payload: boolean;
}
export interface GetAllPostsByUserSuccessAction {
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_SUCCESS;
  payload: Post[];
}

export interface GetAllPostsByUserFailureAction {
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_FAILURE;
  payload: string;
}

export const getAllPostsByUserStart = ():GetAllPostsByUserStartAction => ({
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_START,
  payload: true
})

export const getAllPostsByUser = (id: number) => (dispatch: Dispatch<GetAllPostsByUserStartAction | GetAllPostsByUserSuccessAction | GetAllPostsByUserFailureAction>) => {
  dispatch(getAllPostsByUserStart());
  axios.get<Post[]>(postsUrl + id)
    .then(res => {
      dispatch(getAllPostsByUserSuccess(res.data));
    })
    .catch(error => {
      dispatch(getAllPostsByUserFailure())
    })
}

export const getAllPostsByUserFailure = (): GetAllPostsByUserFailureAction => ({
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_FAILURE,
  payload: 'Oops, something went wrong...'
})

export const getAllPostsByUserSuccess = (posts: Post[]):GetAllPostsByUserSuccessAction => ({
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_SUCCESS,
  payload: posts
})