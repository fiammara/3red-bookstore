import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {display: true};
    }

    render() {
        return(
            <div>
            <tr>
                <td>{this.props.book.photoPath}</td>
            </tr>
            <tr>
                <td><h3>{this.props.book.title}</h3></td>
            </tr>
            <tr>
                <td>{this.props.book.year}</td>
            </tr>
            <tr>
                <td>{this.props.book.isbn}</td>
            </tr>
            <tr>
                <td><strong>{this.props.book.price}</strong></td>
            </tr>
            </div>
        );
    }
}
export default Book;