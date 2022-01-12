import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Container } from 'react-bootstrap';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div>
        <Navbar bg="dark" variant={'dark'} expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">O-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={'/'}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={'/products'}>
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to={'/shopping-cart'}>
                  Shopping Cart
                </Nav.Link>
                <Nav.Link as={Link} to={'/login'}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={'/register'}>
                  Register
                </Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex"></Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
