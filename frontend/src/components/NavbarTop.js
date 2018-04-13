import React, { Component } from 'react';

import Navbar  from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/Form';

import Button from 'react-bootstrap/lib/Button';
import './components.css';

function NavbarTop(){

    return(

<div>
<Navbar className="navbartop">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">All books</a>
      
      <a href="#home">Most Recent</a>
      
      <a href="#home">Most Popular</a>
      
      <a href="#home">Free Books</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
  </div>

)

}
export default NavbarTop