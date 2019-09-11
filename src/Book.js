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
                <img src={this.props.img} alt={this.props.title} />
                <h2>{this.props.title}</h2>
                <p>Author: {this.props.author}</p>
                <p>Price: {this.renderPriceOptions()}</p>
                <p>{this.props.description}</p>
            </li>

        )
    }


}

export default Book;