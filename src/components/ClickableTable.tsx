import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import _ from 'lodash';

import { User, filterUsersByName } from '../redux/actions';

import CircularIndeterminate from './Circular';

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
  tableRightBorder: {
    borderWidth: 0,
    borderRightWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
  },
  clickableRow:{
    "&:hover":{
      cursor:"pointer"
    },
  },
});

export interface Title {
  name: string,
  width: string
}

type ClickableTableProps = {
  titles: Title[],
  values: User[],
  paths: string[],
  isLoading: boolean
}

const ClickableTable:React.FunctionComponent<ClickableTableProps> = ({titles,values,paths,isLoading}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (id: number, e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    dispatch(filterUsersByName(""));
    history.push('/users/' + id + '/posts');
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
          {!isLoading ? values.map((value) => (
            <StyledTableRow className={classes.clickableRow} onClick={(e) => handleClick(value.id, e)} key={value.id}>
              {paths.map(path =>
                <StyledTableCell key={path} align="center">
                  {_.get(value, path)}
                </StyledTableCell>)
              }
            </StyledTableRow>
          )) : 
            <StyledTableRow>
              {paths.map(path =>
                <StyledTableCell key={path} align="center">
                  <CircularIndeterminate />
                </StyledTableCell>)}
            </StyledTableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClickableTable;