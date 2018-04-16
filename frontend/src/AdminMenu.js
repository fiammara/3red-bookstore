import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => (
    <nav className='navSide'>
      <ul>
        <li><NavLink to='/adminmenu/addAdmin'>Add new administrator</NavLink></li>
        <li><NavLink to='/adminmenu/addSeller'>Add new seller</NavLink></li>
        <li><NavLink to='/adminmenu/addBook'>Add new book</NavLink></li>
        <li><NavLink to='/adminmenu/allBooks'>Visos knygos</NavLink></li>
        <li><NavLink to='/adminmenu/users'>Vartotojai</NavLink></li>
      </ul>
    </nav>
  );

  export default AdminMenu;