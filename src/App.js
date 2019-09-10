import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import PrintType from './PrintType';
import Filter from './Filter';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      search: '',
      printType:'', 
      filter: ''
    }
  }

  

    render() {
        return (
          <div className="app">
            <h1>Book Search</h1>
            <SearchBar />
            <PrintType />
            <Filter />
            <BookList />
          </div>
       
        );
    }
}

export default App;
