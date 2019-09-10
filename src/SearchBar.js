import React, { Component } from 'react';

class SearchBar extends Component {
    handleSubmit (e) {
        console.log(`'handleSubmit' ran`)
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
        console.log(`value of submit: ${e.target.value}`)
    }

    // handleChange(e) {
    //     console.log(`'handleChange' ran`)
    //     this.setState({
    //         search: e.target.value
    //     })
    //     console.log(`'handleChange' value of search term: {this.props.search}`)
    // }

    render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)} className="search-bar">
                    <label htmlFor="search-bar">Search: </label>
                    <input id="search-bar"
                        type="text"
                        name="search"
                        placeholder="Henry"
                        // onChange={e => this.handleChange(e)}
                    />
                    <button 
                        type="submit"
                        // onClick={e => this.props.setSearch(e, e.target.value)}
                    >
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;