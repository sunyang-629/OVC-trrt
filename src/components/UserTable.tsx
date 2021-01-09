import React from 'react';
import { useHistory } from "react-router-dom";
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import _ from 'lodash';

import { User } from '../redux/actions';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  // table: {
  //   minWidth: 700,
  // },
  tableRightBorder: {
    borderWidth: 0,
    borderRightWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
  },
});

type UserTableProps = {
  titles: string[],
  users: User[],
  path: string[],
}

const UserTable:React.FunctionComponent<UserTableProps> = ({titles,users,path}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (id:number,e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    console.log(id);
    history.push('/users/' + id + '/posts')
  }

  return (
    <TableContainer component={Paper}>
      <Table width="100%" aria-label="customized table">
        <TableHead>
          <TableRow>
            {titles.map(title => {
              return <StyledTableCell width="25%" className={classes.tableRightBorder} key={title} align="center">{title}</StyledTableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow onClick={(e) => handleClick(user.id, e)} key={user.id}>
              {path.map(p => <StyledTableCell key={p} align="center">{_.get(user,p)}</StyledTableCell>)}
              
              {/* <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.address.city}</StyledTableCell>
              <StyledTableCell align="center">{_.get(user,path[3])}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;