import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPostsByUser } from '../redux/actions';
import { RootState } from "../redux/reducers/rootReducer";
import { PostsState } from '../redux/reducers/postReducer';

import UnClickableTable from '../components/UnClickableTable';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconLabelButtons from '../components/IconLabelButtons';
import { Title } from '../components/ClickableTable';

const Posts = (props:any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts: PostsState = useSelector((state: RootState) => state.posts);
  const titles: Title[] = [{ name: 'Title', width: "40%" }, { name: 'Body', width: "60%" }];
  const paths: string[] = ['title','body']

  const id = props.match.params.id
  
  useEffect(() => {
    dispatch(getAllPostsByUser(id))
  },[dispatch,id])

  const goToUserPage = () => {
    history.push('/users')
  }

  return (
    <div>
      <IconLabelButtons icon={<AccountCircleIcon />} label="Back to users page" click={goToUserPage}/>
      {posts.error && <div>{ posts.error }</div>}
      <UnClickableTable titles={titles} paths={paths} values={posts.postList} isLoading={posts.isLoading} />
    </div>
  )
}

export default Posts
