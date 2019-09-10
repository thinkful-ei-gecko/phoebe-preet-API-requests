import React, { Component } from 'react';

class SearchBar extends Component {
    handleSubmit = event => {
        console.log(`'handleSubmit' ran`);
        event.preventDefault();
        //this.props.setSearch(event.target.value)
    }

    handleChange = event => {
        console.log(`'handleChange' ran`);
        console.log(`'handleChange' value of search term: ${event.target.value}`);
        let searchTerm = event.target.value;
        this.props.setSearch(searchTerm);
        console.log(this.props.search)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="search-bar">
                    <label htmlFor="search-bar">Search: </label>
                    <input id="search-bar"
                        type="text"
                        name="search"
                        placeholder="Henry"
                        onChange={this.handleChange}
                    />
                    <button 
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;