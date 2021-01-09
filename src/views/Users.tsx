import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/actions';
import { RootState } from "../redux/reducers/rootReducer";
import { UsersState } from '../redux/reducers/userReducer';


import UserTable from '../components/UserTable';
import SearchField from '../components/SearchField';

const Users: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const titles: string[] = ['name', 'email', 'city', 'company'];
  const path: string[] = ['name', 'email', 'address[city]', 'company[name]'];

  const users:UsersState = useSelector((state: RootState) => state.users);
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  return (
    <div>
      <SearchField />
      <UserTable titles={titles} path={path} users={users.searchKey ? users.filteredUserList : users.userList }/>
    </div>
  )
}

export default Users
