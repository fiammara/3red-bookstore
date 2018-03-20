import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import BookList from './BookList';
import Main from './Main';
import AdminMenu from './AdminMenu';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='menuHeader'>
        <AdminMenu/>
          {/* <Navigation /> */}
        </div>
        <div className='main'>
          <Main />
        </div>
        {/* <div className='books'>
          <BookList /> 
        </div> */}
      </div>
    );
  }
}

export default App;
