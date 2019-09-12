import React, { Component } from "react";

class PrintType extends Component {
  render() {
    return (
      <div>
        <label htmlFor="print-type">PrintType: </label>
        <select
          onChange={e => this.props.handlePrintType(e.target.value)}
          id="print-type"
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    );
  }
}

export default PrintType;
