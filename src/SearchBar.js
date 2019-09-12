import React, { Component } from "react";

class SearchBar extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(event.target.searchBar.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-bar">
          <label htmlFor="searchBar">Search: </label>
          <input id="searchBar" type="text" name="search" placeholder="Henry" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
