import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllPostsByUser } from '../redux/actions';
import { RootState } from "../redux/reducers/rootReducer";
import { PostsState } from '../redux/reducers/postReducer';

import UnClickableTable from '../components/UnClickableTable';
import { Title } from '../components/ClickableTable';

const Posts = (props:any) => {
  const dispatch = useDispatch();
  const posts: PostsState = useSelector((state: RootState) => state.posts);
  const titles: Title[] = [{ name: 'Title', width: "40%" }, { name: 'Body', width: "60%" }];
  const paths: string[] = ['title','body']

  const id = props.match.params.id
  
  useEffect(() => {
    dispatch(getAllPostsByUser(id))
  },[dispatch])

  return (
    <div>
      <UnClickableTable titles={titles} paths={paths} values={posts.postList} />
    </div>
  )
}

export default Posts
