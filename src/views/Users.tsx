import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/actions';
import { RootState } from "../redux/reducers/rootReducer";
import { UsersState } from '../redux/reducers/userReducer';

// import _ from "lodash";

import UserTable from '../components/UserTable';
import SearchField from '../components/SearchField';

const Users: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const titles: string[] = ['name', 'email', 'city', 'company'];

  const users:UsersState = useSelector((state: RootState) => state.users);
  // let displayUsers:User[] = []
  // const userArray:filteredUsers[] = []
  // users.users.length && users.users.map(user => {
  //   const newUser = _.pick(user, ['name', 'email','address.city','company.name']);
  //   return userArray.push(newUser);
  // })
  // console.log(users);
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  // useEffect(() => {
  //   if (users.searchKey) {
  //     // dispatch(setUserNameSearchKey(users.searchKey));
  //     console.log('object');
  //   }
  // },[users.searchKey])

  return (
    <div>
      <SearchField />
      <UserTable titles={titles} users={users.searchKey ? users.filteredUserList : users.userList }/>
    </div>
  )
}

export default Users
