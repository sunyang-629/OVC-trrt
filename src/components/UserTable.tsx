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

export interface Title {
  name: string,
  width: string
}

type UserTableProps = {
  titles: Title[],
  users: User[],
  paths: string[],
}

const UserTable:React.FunctionComponent<UserTableProps> = ({titles,users,paths}) => {
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
              return <StyledTableCell width={title.width} className={classes.tableRightBorder} key={title.name} align="center">{title.name}</StyledTableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow onClick={(e) => handleClick(user.id, e)} key={user.id}>
              {paths.map(path =>
                <StyledTableCell key={path} align="center">
                  {_.get(user, path)}
                </StyledTableCell>)
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;