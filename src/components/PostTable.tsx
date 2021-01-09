import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import _ from 'lodash';

import { Post } from '../redux/actions';
import { Title } from './UserTable';

// const useStyles = makeStyles({});

type PostTableProps = {
  titles: Title[],
  values: Post[],
  paths: string[],
}

const PostTable:React.FunctionComponent<PostTableProps> = ({titles,values,paths}) => {
  // const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table width="100%" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" width="40%">Title</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((value) => (
            <TableRow key={value.id}>
              {paths.map(path => {
                return <TableCell key={path} align="left">{_.get(value, path)}</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PostTable