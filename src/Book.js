import React, { Component } from 'react';


class Book extends Component {
    render(){
        return (
            <li>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google logo" />
                <h2>Title</h2>
                <p>Author</p>
                <p>Price</p>
                <p>Description</p>
            </li>

        )
    }


}

export default Book;