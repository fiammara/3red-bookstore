import React, { Component } from 'react';
import Author from './Author';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {display: true};
    }

    render() {
        const authors = this.props.book.authors.map(author=>{
            return <Author key = {author.id} author = {author}/>
        });
        return(
            <div>
                <img src={"http://ma-secretariat.org/wp-content/uploads/2017/12/shopkins-cutie-cars-coloring-pages-black-and-white-collections-10-200x150.png"} 
                alt="{this.props.book.photoPath}"/>
                <h3 className="bookTitle">{this.props.book.title}</h3>
                <div>{authors}</div>
                <p> {this.props.book.year} m.</p>
                <p> ISBN: {this.props.book.isbn} </p>
                <p><strong> Kaina: </strong> {this.props.book.price} EUR </p> <br/>
            </div>
        );
    }
}
export default Book;