import React from 'react';
import './Header.css'
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle={
    fontWeight: "bold",
    color: "rgb(5, 216, 5)"
  }
    return (
        <Navbar bg="dark" expand="lg" className="p-3">
        <Navbar.Brand href="#" className="text-white"><span className="text-color fs-1">English</span><small>Discovery</small></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className='nav-bar ms-auto fs-5'>
            <NavLink to='/home' activeStyle={activeStyle}>Home</NavLink>
            <NavLink to='/about' activeStyle={activeStyle}>About</NavLink>
            <NavLink to='/courses' activeStyle={activeStyle}>Courses</NavLink>
            <NavLink to='/blog' activeStyle={activeStyle}>Blog</NavLink>
      
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