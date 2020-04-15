import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#00D395',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00D395',
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


const NewBookForm = () => {

  const classes = useStyles();

  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', book: {
      title, author
    }});
    setTitle('');
    setAuthor('');
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>

      <CssTextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={classes.margin}
        label="Task"
        id="custom-css-standard-input"
        autoComplete="off"
        required
      />

      <input type="text" placeholder="Deadline (Optional)" value={author} onChange={(e) => setAuthor(e.target.value)} />

      <input type="submit" value="Add Task" style={{ background: '#00D395', fontWeight: 'bold', fontSize: 16, color: '#FFFFFF' }}/>
    </form>
  );
}
 
export default NewBookForm;