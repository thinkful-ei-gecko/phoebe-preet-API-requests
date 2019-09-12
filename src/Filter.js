import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter: </label>
        <select
          onChange={e => this.props.handleFilter(e.target.value)}
          id="filter"
        >
          <option value="">No Filter</option>
          <option value="ebooks">eBook</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="full">Full Book</option>
          <option value="paid-ebooks">Paid eBook</option>
          <option value="partial">Partial Book</option>
        </select>
      </div>
    );
  }
}

export default Filter;
