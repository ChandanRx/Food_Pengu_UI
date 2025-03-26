import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        borderBottom: '1px solid #dee2e6',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Navbar expand="lg" className="bg-light px-3 py-3">
        <Container className="d-flex justify-content-between align-items-center">
          
         
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            <span style={{ color: '#000' }}>Food</span>{' '}
            <span style={{ color: '#ff5722' }}>Pengu</span>
          </Navbar.Brand>

          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

         
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto gap-3">
              <Nav.Link href="#home" className="fw-semibold">Home</Nav.Link>
              <Nav.Link href="#about" className="fw-semibold">About Us</Nav.Link>
              <Nav.Link href="#gallery" className="fw-semibold">Gallery</Nav.Link>
              <Nav.Link href="#contacts" className="fw-semibold">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>

         
          <Form className="d-flex ms-auto" style={{ maxWidth: '300px' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-3"
              aria-label="Search"
            />
            <Button
              style={{ borderColor: '#ff5722', color: '#ff5722' }}
              className="rounded-3"
              variant="outline"
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
