import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/actions';
import { RootState } from "../redux/reducers/rootReducer";
import { UsersState } from '../redux/reducers/userReducer';
import { Title } from '../components/UserTable';


import UserTable from '../components/UserTable';
import SearchField from '../components/SearchField';

const Users: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const users:UsersState = useSelector((state: RootState) => state.users);
  const titles: Title[] = [{name:'Name',width:"25%"},{name:'Email',width:"25%"},{name:'City',width:"25%"} ,{name:'Company',width:"25%"}];
  const paths: string[] = ['name', 'email', 'address[city]', 'company[name]'];
 
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  return (
    <div>
      <SearchField />
      <UserTable titles={titles} paths={paths} users={users.searchKey ? users.filteredUserList : users.userList }/>
    </div>
  )
}

export default Users
