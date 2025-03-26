import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }} id="about">
      <Container>
        {/* Styled Title Section like Gallery/Contact */}
        <div className="text-center mb-5">
          <p className="text-uppercase text-secondary mb-2 fw-semibold" style={{ letterSpacing: '1px' }}>
            About Us
          </p>
          <h2 className="fw-bold" style={{ color: '#333' }}>
            Know More <span style={{ color: '#ff5722' }}>About Us</span>
          </h2>
        </div>

        {/* Card-style Content */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            overflow: "hidden"
          }}
        >
          <Row className="g-0">
            {/* Image */}
            <Col
              md={6}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "stretch"
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt="Our Team"
                fluid
                style={{
                  width: "100%",
                  objectFit: "cover"
                }}
              />
            </Col>

            {/* Text */}
            <Col
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "40px"
              }}
            >
              <h3 className="mb-4 fw-bold" style={{ color: '#333' }}>
                Who We Are
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>
                Welcome to <strong>Food Pengu</strong>! We're a team of passionate developers and food lovers, committed to bringing you modern, user-friendly applications that blend flavor and function.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>
                With a solid foundation in <strong>React</strong> and <strong>Bootstrap</strong>, we create responsive, fast, and visually appealing experiences. Thank you for being a part of our flavorful journey! 🍽️
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>
                Our mission is to celebrate the richness of Indian cuisine and culture through beautifully designed digital experiences. From traditional thalis to modern street food, we aim to tell the story behind every bite.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>
                Whether you're here for inspiration, discovery, or simply to enjoy mouth-watering visuals — we're excited to serve you. Let's explore the world of food together, one delicious plate at a time!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
