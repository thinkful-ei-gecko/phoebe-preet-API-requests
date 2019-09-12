import React, { Component } from "react";
import "./App.css";
import BookList from "./BookList";
import PrintType from "./PrintType";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "",
      printType: "all",
      filter: undefined,
      error: null
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  }

  fetchBooklist() {
    let params;

    //Conditional in case filters isn't selected: it shouldn't be returned in the
    //params (it's weird)
    if (!this.state.filter) {
      params = {
        q: this.state.search,
        printType: this.state.printType,
        language: "en"
      };
    } else {
      params = {
        q: this.state.search,
        printType: this.state.printType,
        filter: this.state.filter,
        language: "en"
      };
    }

    const queryString = this.formatQueryParams(params);
    const url = "https://www.googleapis.com/books/v1/volumes?" + queryString;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Something went wrong: ${response.statusText}`);
      })
      .then(responseJson => this.setState({ books: responseJson.items }))
      .catch(err => console.log(err));
  }

  handleSearch = term => {
    this.setState({ search: term }, this.fetchBooklist);
    console.log(this.state.search);
  };

  handleFilter = value => {
    this.setState({ filter: value }, this.fetchBooklist);
  };

  handlePrintType = type => {
    this.setState({ printType: type }, this.fetchBooklist);
    console.log(`this.state.printType value: ${this.state.printType}`);
  };

  render() {
    return (
      <div className="app">
        <h1>Book Search</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          fetchBooklist={this.fetchBooklist}
        />
        <div className='filterbar'>
          <PrintType handlePrintType={this.handlePrintType} />
          <Filter handleFilter={this.handleFilter} />
        </div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
