import React,{useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/actions/userActions';
import { RootState } from "../redux/reducers/rootReducer";

import UserTable from '../components/UserTable';

const Users: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const titles: string[] = ['name', 'email', 'city', 'company'];

  const users = useSelector((state: RootState) => state.user);
  console.log('users:',users);
  useEffect(() => {
    dispatch(getAllUsers())
  },[])

  // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  //   console.log(res.data);
  // })

  return (
    <div>
      <UserTable titles={titles} />
    </div>
  )
}

export default Users
