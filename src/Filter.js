import React, { Component } from 'react';

class Filter extends Component {
    formatQueryParams(params) {
        const queryItems = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            return queryItems.join('&');
    }

    handleChange = value => {
        //event.preventDefault();
        this.props.setFilter(value);

        const params = {
            q: this.props.search,
            filter: this.props.filter,
            language: "en"
        };
        const queryString = this.formatQueryParams(params)
        
        const url = 'https://www.googleapis.com/books/v1/volumes?' + queryString       

        fetch (url)
            .then(response => {
                if (response.ok) {
                    return response.json() 
                }
                throw new Error(`Something went wrong: ${response.statusText}`)
            })
            .then(responseJson => this.props.setBooks(responseJson.items))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <label htmlFor="filter">Filter: </label>
                <select onChange={this.handleChange} id="filter">
                    <option value="false">No Filter</option>
                    <option value="ebooks">eBook</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="full">Full Book</option>
                    <option value="paid-ebooks">Paid eBook</option>
                    <option value="partial">Partial Book</option>
                </select>
            </div>
        )
    }
}

export default Filter