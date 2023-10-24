import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/Logo.png';
import '../CSSfiles/navbar.css';


function MyNavbar() {
  const isLoggedin = localStorage.getItem('token') !== null || false;

    return (
        <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/" className='d-flex'>
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Logo"
              height="50"
            />
            <h3 className='logo-name me-auto text-xl-start text-nowrap bd-highlight'>E-Kunjo</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {isLoggedin ? (
            <Nav className="mr-auto">
              <Nav.Link href="/user">Dashboard</Nav.Link>
              <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav>
            ): (
            <Nav className="mr-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
          )}
        </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;