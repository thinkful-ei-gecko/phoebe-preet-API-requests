import React, { Component } from 'react';

class PrintType extends Component {
    formatQueryParams(params) {
        const queryItems = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            return queryItems.join('&');
    }

    handleChange = value => {
        //event.preventDefault();
        this.props.setType(value);

        const params = {
            q: this.props.search,
            language: "en",
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
                <label htmlFor="print-type">PrintType: </label>
                <select onChange={this.handleChange} id="print-type">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </div>
        )
    }
}

export default PrintType