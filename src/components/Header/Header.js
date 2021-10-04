import React from 'react';
import './Header.css'
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
        className='nav-bar'
    //   className="mr-auto my-2 my-lg-0"
    //   style={{ maxHeight: '100px' }}
    //   navbarScroll
    >
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/services'>Services</NavLink>
      <NavLink to='/More'>More</NavLink>
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;