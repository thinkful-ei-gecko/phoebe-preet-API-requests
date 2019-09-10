import React, { Component } from 'react';

class SearchBar extends Component {

    render(){
        return(
            <div>
                <form className="search-bar">
                    <label htmlFor="search-bar">Search: </label>
                    <input id="search-bar"
                        type="text"
                        name="search"
                        placeholder="Henry"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;