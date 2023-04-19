import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../images/Logo.png';
import '../CSSfiles/navbar.css';


function MyNavbar() {
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
          <Nav className="mr-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <div className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </div>
          </Form> */}
        </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;