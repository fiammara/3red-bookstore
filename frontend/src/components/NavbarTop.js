import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';

function NavbarTop() {

  return (
    <Navbar className="navbartop">
      <div className="name">
        <p><i className="fa fa-book menu-icon" aria-hidden="true"></i>Knygų Parduotuvė</p>
      </div>
      <div className="headermenu">
        <ul className="topmenu">
          <li><NavLink to='/'>Pagalba</NavLink></li>
          <li><NavLink to='/'>Susisiekti</NavLink></li>
          <li><NavLink to='/'>Prisijungti <i className="fa fa-check-circle" aria-hidden="true"></i></NavLink></li>
        </ul>
      </div>
    </Navbar>

  )

}
export default NavbarTop