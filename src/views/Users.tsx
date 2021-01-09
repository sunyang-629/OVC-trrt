import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/actions';
import { RootState } from "../redux/reducers/rootReducer";

// import _ from "lodash";

import UserTable from '../components/UserTable';
import SearchField from '../components/SearchField';

const Users: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const titles: string[] = ['name', 'email', 'city', 'company'];

  const users:{users:[],searchKey:string,filteredUsers:[]} = useSelector((state: RootState) => state.user);
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
      <UserTable titles={titles} users={users.searchKey ? users.filteredUsers : users.users }/>
    </div>
  )
}

export default Users
