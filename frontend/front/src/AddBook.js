import React, { Component } from 'react';
import axios from 'axios';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      authors: [
        {
          firstName: '',
          lastName: ''
        }],
      year: '',
      isbn: '',
      price: 0.00,
      description: '',
      nou: 0,
      categories: [
        {
          name: ''
        }
      ],
    };
  }

  handleChangeFor= (propertyName) => (event) => {
    this.setState({ [propertyName]: event.target.value });

  }
  handleChangeForCategory = (event) => {
    this.setState({ categories: [
      {
        name: event.target.value}]});
  }

  handleChangeForAuthorName = (event) => {
    this.setState({ authors: [
      {
        firstName: event.target.value,
        lastName: this.state.authors[0].lastName}]});
  }

  handleChangeForAuthorSurname = (event) => {
    this.setState({ authors: [
      {
        firstName: this.state.authors[0].firstName,
        lastName: event.target.value}]});
  }

  addBook = event => {
    event.preventDefault();

    const newBook = {
      "authors": [
        {
          "firstName": this.state.authors[0].firstName,
          "lastName": this.state.authors[0].lastName
        }
      ],
      "available": true,
      "categories": [
        {
          "name": this.state.categories[0].name
        }
      ],
      "description": this.state.description,
      "isbn": this.state.isbn,
      "noOfUnits": this.state.nou,
      "photoPath": "http://book1",
      "price": this.state.price,
      "title": this.state.title,
      "year": this.state.year,
      "available": true
    }

    axios.post('http://localhost:8080/api/books', newBook);
    console.log(newBook);
    
}


  render() {
    return (
      <div className='addBook'>
        <form>
          <label>Title</label><br />
          <input type="text" name="title" onChange={this.handleChangeFor("title")} value={this.state.title} /><br />
          <label>Author name</label><br />
          <input type="text" name="authorname" onChange={this.handleChangeForAuthorName} value={this.state.authors.firstName} /><br />
          <label>Author surname</label><br />
          <input type="text" name="authorsurname" onChange={this.handleChangeForAuthorSurname} value={this.state.authors.lastName} /><br />
          <label>Year</label><br />
          <input type="text" name="year" onChange={this.handleChangeFor("year")} value={this.state.year} /><br />
          <label>ISBN</label><br />
          <input type="text" name="isbn" onChange={this.handleChangeFor("isbn")} value={this.state.isbn} /><br />
          <label>Price</label><br />
          <input type="text" name="price" onChange={this.handleChangeFor("price")} value={this.state.price} /><br />
          <label>Description</label><br />
          <input type="text" name="description" onChange={this.handleChangeFor("description")} value={this.state.description} /><br />
          <label>Number of units</label><br />
          <input type="text" name="nou" onChange={this.handleChangeFor("nou")} value={this.state.nou} /><br />
          <label>Category</label><br />
          <input type="text" name="category" onChange={this.handleChangeForCategory} value={this.state.categories.name} /><br />
        </form>
        <button onClick={this.addBook}>
          Submit
     </button>
      </div>
    );
  }
}


export default AddBook;