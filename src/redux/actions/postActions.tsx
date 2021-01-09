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

export interface GetAllPostsByUserSuccessAction {
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_SUCCESS;
  payload: Post[];
}

export const getAllPostsByUser = (id: number) => (dispatch: Dispatch<GetAllPostsByUserSuccessAction>) => {
  axios.get<Post[]>(postsUrl + id)
    .then(res => {
      dispatch(getAllPostsByUserSuccess(res.data));
    })
}

export const getAllPostsByUserSuccess = (posts: Post[]):GetAllPostsByUserSuccessAction => ({
  type: ActionTypes.FETCH_ALL_POSTS_BY_USER_SUCCESS,
  payload: posts
})