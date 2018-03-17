import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import AdminMenu from './AdminMenu'


const Main = () => (
    <Switch>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/adminmenu' component={AdminMenu}></Route>
    </Switch>
  );

  export default Main;