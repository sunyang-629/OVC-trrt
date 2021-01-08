import React from 'react'
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
