import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {


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
    <form onSubmit={handleSubmit}>

      <input type="text" required placeholder="Task" value={title} onChange={(e) => setTitle(e.target.value)} />

      <input type="text" placeholder="Deadline (Optional)" value={author} onChange={(e) => setAuthor(e.target.value)} />

      <input type="submit" value="Add Task" style={{ background: '#00D395', fontWeight: 'bold', fontSize: 16, color: '#FFFFFF' }}/>
    </form>
  );
}
 
export default NewBookForm;