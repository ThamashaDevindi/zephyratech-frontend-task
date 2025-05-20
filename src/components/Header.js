import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import logo from '../assets/logo.png'; 
import '../styles/custom.css';

// Header component displays the navigation bar
const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>

        {/* Brand logo and name on the left */}
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2 me-auto text-dark">
          <img src={logo} alt="Logo" style={{ width: '36px', height: '36px' }} />
          MRKT.AI
        </Navbar.Brand>

        {/* Hamburger toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation links and trial button */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Active link with bottom border */}
            <Nav.Link href="#home" style={{ borderBottom: '2px solid #cc7cf8' }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Growth</Nav.Link>
          </Nav>

          {/* Call-to-action button */}
          <Button className="custom-outline-button" variant="none">Start Free Trial</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; // Export component
