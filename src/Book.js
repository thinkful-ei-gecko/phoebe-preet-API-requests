import React, { Component } from 'react';

class Book extends Component {
    renderPriceOptions() {
        if (this.props.saleInfo.saleability === 'NOT_FOR_SALE') {
            return 'Not for sale'
        }
        if (this.props.saleInfo.saleability === 'FREE') {
            return 'Free'
        }
        else {
            return '$' + this.props.saleInfo.listPrice.amount
        }
    }

    render(){
        //console.log(this.props.price)
        return (
            <li>
                <img src={this.props.img ? this.props.img : ''} alt={this.props.title} />
                <h2>{this.props.title ? this.props.title : 'Unknown'}</h2>
                <p>Author: {this.props.author ? this.props.author : 'Unknown'}</p>
                <p>Price: {this.renderPriceOptions()}</p>
                <p>{this.props.description ? this.props.description : 'Book description unavailable.'}</p>
                <hr />
            </li>

        )
    }


}

export default Book;