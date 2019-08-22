import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navega(){
    return(
        <Navbar bg="light" expand="lg" className="nav">
  <Navbar.Brand href="#home">FastPayHotels</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Support Ticket</Nav.Link>
      <Nav.Link href="#link">Booking</Nav.Link>
      <NavDropdown title="Idiomas" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Ingles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Frances</NavDropdown.Item> 
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}