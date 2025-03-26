import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }} id="contacts">
            <Container>
                
                <div className="text-center mb-5">
                    <p className="text-uppercase text-secondary mb-2 fw-semibold" style={{ letterSpacing: '1px' }}>
                        Contact Us
                    </p>
                    <h2 className="fw-bold" style={{ color: '#333' }}>
                        Get in <span style={{ color: '#ff5722' }}>Touch</span> With Us
                    </h2>
                </div>

                <Row className="align-items-center">
                 
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="p-4 bg-white shadow rounded-4">
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Type your message" required />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="px-4">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>

               
                    <Col md={6}>
                        <div
                            className="rounded-4 shadow overflow-hidden"
                            style={{
                                height: '100%',
                                minHeight: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <iframe
                                title="Felix IT System Ahmedabad"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0613420739744!2d72.52841217511629!3d23.024717616254155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f02e20f67d%3A0x170c8c4edc5ad2fc!2sFelix%20IT%20Systems%20Ahmedabad!5e0!3m2!1sen!2sin!4v1711530241842!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{
                                    border: 0,
                                    flex: 1,
                                }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;
