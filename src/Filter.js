import React, { Component } from 'react';

class Filter extends Component {

    // handleChange = event => {
    //     //event.preventDefault();
        
    // }

    // componentDidMount(){
    //     const params = {
    //         q: this.props.search,
    //         filter: this.props.filter,
    //         language: "en"
    //     };
    //     console.log(this.props.filter);
    //     const queryString = this.formatQueryParams(params)
        
    //     const url = 'https://www.googleapis.com/books/v1/volumes?' + queryString   
    //     console.log(url);     

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
    
    render(){
        return(
            <div>
                <label htmlFor="filter">Filter: </label>
                <select onChange={(e)=>this.props.handleFilter(e.target.value)} id="filter">
                    <option value="">No Filter</option>
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