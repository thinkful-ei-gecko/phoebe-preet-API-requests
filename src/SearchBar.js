import React, { Component } from "react";

class SearchBar extends Component {
  // formatQueryParams(params) {
  //     const queryItems = Object.keys(params)
  //       .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  //         return queryItems.join('&');
  // }

  // handleSubmit = event => {
  //     console.log(`'handleSubmit' ran`);
  //     event.preventDefault();

  //     //pressing the submit button starts the fetch call (although the value is still
  //     // being returned with onChange)

  //     //DEFAULT FILTER VALUES RESET:
  //     //As this fetch call doesn't include parameters for the filter or printType value
  //     const params = {
  //         q: this.props.search,
  //         language: "en",
  //     };
  //     const queryString = this.formatQueryParams(params)
  //     console.log(queryString)
  //     const url = 'https://www.googleapis.com/books/v1/volumes?' + queryString

  //     fetch (url)
  //         .then(response => {
  //             if (response.ok) {
  //                 return response.json()
  //             }
  //             throw new Error(`Something went wrong: ${response.statusText}`)
  //         })
  //         .then(responseJson => this.props.setBooks(responseJson.items))
  //         .catch(err => console.log(err));

  // }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(event.target.searchBar.value)
    // console.log(`'handleChange' ran`);
    // console.log(`'handleChange' value of search term: ${event.target.value}`);
    // let searchTerm = event.target.value;
    // this.props.setSearch(searchTerm);
    // console.log(this.props.search)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-bar">
          <label htmlFor="searchBar">Search: </label>
          <input
            id="searchBar"
            type="text"
            name="search"
            placeholder="Henry"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
