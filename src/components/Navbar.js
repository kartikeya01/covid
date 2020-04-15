import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>TODO</h1>

      {
        books.length === 0 ? (
          <p>Great! You completed all your tasks <span role="img" aria-label="Fire">🔥</span></p>
        ) : (
          <p>You have {books.length} {books.length === 1 ? ( 'task' ) : ( 'tasks' )} to complete <span role="img" aria-label="Eyes">👀</span></p>
        )
      }
    </div>
  );
}
 
export default Navbar;