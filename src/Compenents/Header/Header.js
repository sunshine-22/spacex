import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css"
import Logo from "../../assets/space_nn.jpg"
export default function Header() {
  return (
    <Navbar  expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={Logo} className='logosize'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-buttoncolor' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className='header-texts'>Home</Nav.Link>
          <Nav.Link href="/history" className='header-texts'>History</Nav.Link>
          <Nav.Link href="/launches" className='header-texts'>Launches</Nav.Link>
          <Nav.Link href="/rockets" className='header-texts'>Rocket's</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
