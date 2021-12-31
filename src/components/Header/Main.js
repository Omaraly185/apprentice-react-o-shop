import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import './Main.scss';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import ShoppingCart from '../../pages/ShoppingCart';

function Main() {
  return (
    <div className="main">
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
                  ShoppingCart
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
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default Main;
