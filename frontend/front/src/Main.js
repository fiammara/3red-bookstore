import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import AdminMenu from './AdminMenu';
import AddBook from './AddBook';
import AddAdmin from './AddAdmin';
import AddSeller from './AddSeller';


const Main = () => (
    <Switch>
      <Route exact path='/login' component={Login}></Route>
      {/* <Route exact path='/adminmenu' component={AdminMenu}></Route> */}
      <Route exact path='/adminmenu/addBook' component={AddBook}></Route>
      <Route exact path='/adminmenu/addAdmin' component={AddAdmin}></Route>
      <Route exact path='/adminmenu/addSeller' component={AddSeller}></Route>
    </Switch>
  );

  export default Main;