import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => (
    <navSide className='navSide'>
      <ul>
        <li><NavLink to='/addAdmin'>Add new administrator</NavLink></li>
        <li><NavLink to='/addBook'>Add new seller</NavLink></li>
        <li><NavLink to='/addBook'>Add new book</NavLink></li>
      </ul>
    </navSide>
  );

  export default AdminMenu;