import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#fff', color: '#212529', padding: '60px 0', borderTop: '1px solid #dee2e6' }}>
      <Container>
        <Row>
          {/* Brand Info */}
          <Col md={4} className="mb-4">
            <h4>
              <span style={{ color: '#000' }}>Food</span>{' '}
              <span style={{ color: '#ff5722' }}>Pengu</span>
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>
              We serve flavorful, nutritious vegetarian dishes crafted with fresh ingredients. Your happiness is our secret ingredient.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark fs-5"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark fs-5"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark fs-5"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark fs-5"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3" style={{ color: '#000' }}>Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li><a href="#home" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="#about" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="#gallery" className="text-decoration-none text-dark">Gallery</a></li>
              <li><a href="#contacts" className="text-decoration-none text-dark">Contact Us</a></li>
            </ul>
          </Col>

          {/* Menu Highlights */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase mb-3" style={{ color: '#000' }}>Popular Dishes</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem', color: '#555' }}>
              <li>Paneer Butter Masala</li>
              <li>Gujarati Thali</li>
              <li>Veg Biryani</li>
              <li>Masala Dosa</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h6 className="text-uppercase mb-3" style={{ color: '#000' }}>Get in Touch</h6>
            <p className="mb-1"><i className="fas fa-map-marker-alt me-2" style={{ color: '#ff5722' }}></i>Ahmedabad, India</p>
            <p className="mb-1"><i className="fas fa-envelope me-2" style={{ color: '#ff5722' }}></i>hello@foodpengu.com</p>
            <p><i className="fas fa-phone-alt me-2" style={{ color: '#ff5722' }}></i>+91 98765 43210</p>
          </Col>
        </Row>

        <hr className="text-muted" />

        <p className="text-center mb-0" style={{ fontSize: '0.85rem', color: '#777' }}>
          &copy; {new Date().getFullYear()} Food Pengu. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
