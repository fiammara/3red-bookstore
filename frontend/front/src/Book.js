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
                <td>{this.props.book.title}</td>
            </tr>
            <tr>
                <td>{this.props.book.year}</td>
            </tr>
            <tr>
                <td>{this.props.book.isbn}</td>
            </tr>
            <tr>
                <td>{this.props.book.price}</td>
            </tr>
            </div>
        );
    }
}
export default Book;