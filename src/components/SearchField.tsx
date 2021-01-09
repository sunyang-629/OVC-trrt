import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { setUserNameSearchKey } from '../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const SearchField:React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue("");
    dispatch(setUserNameSearchKey(searchValue));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log(e.target);
    setSearchValue(e.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default SearchField;