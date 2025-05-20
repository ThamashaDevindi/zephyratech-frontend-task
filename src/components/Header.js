import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/custom.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2 me-auto text-dark">
            <img src={logo} alt="Logo" style={{ width: '36px', height: '36px' }} />
            MRKT.AI
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" style={{ borderBottom: '2px solid #cc7cf8' }}>Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#growth">Growth</Nav.Link>
            </Nav>

            <Button className="custom-outline-button" variant="none" onClick={handleShow}>
              Start Free Trial
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Start Your Free Trial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sign up now to enjoy your free trial. No credit card required!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={() => alert('Redirecting to sign up...')}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
