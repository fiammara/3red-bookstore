import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import BookList from './BookList';
import Main from './Main';
import AdminMenu from './AdminMenu';
import Sidebar from './components/Sidebar';
import Footerb from './components/Footer';
import NavbarTop from './components/NavbarTop';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='menuHeader'>
        <AdminMenu/>
          {/* <Navigation /> */}
        </div>
        {/* <div>
          <NavbarTop/>
          </div> */}
        <div>
          <Sidebar/>
          </div>
        <div className='main'>
          <Main />
        </div>
        <div>
          <Footerb/>
          </div>
      </div>
      
    );
  }
}

export default App;