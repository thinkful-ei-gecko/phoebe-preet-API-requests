import React, { Component } from 'react';
import Book from './Book';


class BookList extends Component {
    render(){
        return (
            <ul>
                {this.props.books.map(book => {
                    return (
                        <Book 
                            img={book.volumeInfo.imageLinks.smallThumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors.join(',')}
                            price={book.saleInfo.listPrice.amount}
                            description={book.volumeInfo.description}
                        />
                    )
                })}
            </ul>
        )
    }


}

export default BookList;