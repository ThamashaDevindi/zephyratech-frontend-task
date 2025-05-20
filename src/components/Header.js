import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/custom.css';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2 me-auto text-dark">
          <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
          MRKT.AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home"style={{ borderBottom: '2px solid #cc7cf8' }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Growth</Nav.Link>
          </Nav>
          <Button className="custom-outline-button" variant="none">Start Free Trial</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
