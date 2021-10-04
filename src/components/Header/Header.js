import React from 'react';
import './Header.css'
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" className="p-3">
  <Navbar.Brand href="#" className="text-white"><span className="text-color fs-1">English</span><small>Discovery</small></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
        className='nav-bar ms-auto fs-5'
    //   className="mr-auto my-2 my-lg-0"
    //   style={{ maxHeight: '100px' }}
    //   navbarScroll
    >
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/courses'>Courses</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      
    </Nav>
    <Form className="d-flex ms-auto">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <button className="btn button"><i class="fas fa-search"></i></button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;