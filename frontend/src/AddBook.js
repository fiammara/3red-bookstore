import React, { Component } from 'react';
import axios from 'axios';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log("Props=>", props);
        this.state = {
            id: 0,               
            title: '',
            authors: [{
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
            ]
        };
        console.log("this.state=>", this.state);
        this.componentDidMount.bind(this);
        this.getBook.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id > 0){
            this.getBook(this.props.match.params.id);
        }
    }
    handleChangeFor = (propertyName) => (event) => {
        this.setState({ 
        [propertyName]: event.target.value 
    });

  }

    handleChangeForCategory = (event) => {
        this.setState({ categories: [
            {
                name: event.target.value}
            ]}
        );
    }

    handleChangeForAuthorName = (event) => {
        this.setState({ authors: [
            {
                firstName: event.target.value,
                lastName: this.state.authors[0].lastName
            }
        ]});
    }

    handleChangeForAuthorSurname = (event) => {
        this.setState({ authors: [
            {
                firstName: this.state.authors[0].firstName,
                lastName: event.target.value
            }
        ]});
    }

    getBook = (id) => {
        //event.preventDefault();
        axios.get("http://localhost:8080/api/books/"+id, {
                headers: {
                'Access-Control-Allow-Origin': '*',
                }
            })
            .then(response => this.setState(response.data));
            // .catch(error => {
            //   if (error !== null && error !== undefined)
            //     console.log(error);
            // });

    }

    addBook = event => {
        event.preventDefault();

        const newBook = {
            "id" :  this.state.id,
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
            "year": this.state.year

        }

        // axios.request({
        //     url : 'http://localhost:8080/api/books/' + (this.state.id > 0 ? this.state.id  : ''),
        //     method: (this.state.id > 0 ? 'put' : 'post'),
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     data : newBook
        // }).then(function(response){

        axios.post('http://localhost:8080/api/books/', newBook).then(function(response){
            alert("saved successfully");
            console.log('saved successfully');
            console.log(response)
        }).catch(error => {
            if (error.response === undefined){
                alert("Tinklo klaida!!!");
            } else {
                if (error.response.status === 400){
                    alert("Bad fields, not under hints, pleace change fields and try again");
                    console.log( "ziurim zinute 1", error.response.data);
                } else if (error.response.status === 500){
                    alert("Book already exist with similar fields, change it, and try again");
                    console.log( "ziurim zinute 2", error.response.data);
                } else{alert("something wrong to connecting, pleace try again");
                    console.log( "ziurim zinute 2", error.response.data);
                }
            }

        });
        console.log(newBook);
        
    }


    render() {
        return (
        <div className='addBook'>
        <form>
            <label>Title</label><br />
            <input type="text" name="title" onChange={this.handleChangeFor("title")} value={this.state.title} /><br />
            <label>Author name</label><br />
            <input type="text" name="authorname" onChange={this.handleChangeForAuthorName} value={this.state.authors[0].firstName} /><br />
            <label>Author surname</label><br />
            <input type="text" name="authorsurname" onChange={this.handleChangeForAuthorSurname} value={this.state.authors[0].lastName} /><br />
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