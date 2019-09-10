import React, { Component } from 'react';
import Book from './Book';


class BookList extends Component {
    render(){
        return (
            <ul>
                <Book />
            </ul>
        )
    }


}

export default BookList;