import React, { Component } from 'react';
import Book from './Book';


class BookList extends Component {
    render(){
        return (
            <ul>
                {this.props.books.map(book => {
                    return (
                        <Book 
                            key={book.id}
                            img={book.volumeInfo.imageLinks}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            saleInfo={book.saleInfo}
                            // price={book.saleInfo.listPrice.amount}
                            // {book.saleInfo.listPrice ? '$' + book.saleInfo.listPrice.amount : ''}
                            description={book.volumeInfo.description}
                        />
                    )
                })}
            </ul>
        )     
    }
}

export default BookList;