import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import _ from 'lodash';

import { Post } from '../redux/actions';
import { Title } from './ClickableTable';
import CircularIndeterminate from './Circular';

const useStyles = makeStyles({
  header: {
    background: "#000000",
    color:"#f9f9f9"
  }
});

type UnClickableTableProps = {
  titles: Title[],
  values: Post[],
  paths: string[],
  isLoading: boolean
}

const UnClickableTable:React.FunctionComponent<UnClickableTableProps> = ({titles,values,paths,isLoading}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table width="100%" aria-label="simple table">
        <TableHead>
          <TableRow>
            {titles.map(title => {
              return <TableCell key={title.name} className={classes.header} align="center" width={ title.width }>{ title.name }</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading ? values.map((value) => (
            <TableRow key={value.id}>
              {paths.map(path => {
                return <TableCell key={path} align="left">{_.get(value, path)}</TableCell>
              })}
            </TableRow>
          )) : 
            <TableRow>
                {paths.map(path =>
                <TableCell key={path} align="center">
                  <CircularIndeterminate />
                </TableCell>)}
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UnClickableTable