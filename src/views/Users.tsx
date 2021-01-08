import React from 'react'
// import Button from '@material-ui/core/Button';
import UserTable from '../components/UserTable';

const Users:React.FunctionComponent<{}> = () => {

  const titles: String[] = ['Name', 'Email', 'City', 'Company'];

  return (
    <div>
      <UserTable titles={titles} />
    </div>
  )
}

export default Users
