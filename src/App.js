import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';
import TradingView from './components/TradingView';

import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div>
      <div className="App">
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </div>
      <TradingView />
    </div>
  );
}

export default App;