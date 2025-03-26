import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Gallery = () => {
  const galleryItems = [
    {
      name: 'Paneer Tikka',
      src: 'https://www.krumpli.co.uk/wp-content/uploads/2024/12/Paneer-Tikka-Kebabs-2-1200-735x735.jpg',
    },
    {
      name: 'Masala Dosa',
      src: 'https://www.qasralbaharshj.com/wp-content/uploads/2024/11/Dosa-Recipe-3.jpg',
    },
    {
      name: 'Bhindi Masala',
      src: 'https://i.pinimg.com/736x/53/3b/ca/533bcad3c5fbc447400031751c47c232.jpg',
    },
    {
      name: 'Chole Bhature',
      src: 'https://static.toiimg.com/thumb/53314156.cms?imgsize=1762111&width=800&height=800',
    },
    {
      name: 'Idli Sambhar',
      src: 'https://lh3.googleusercontent.com/proxy/hKycW7CjWXlkk6veLY92V70T8DS-ALUTGWlafTCsPE2PRFy_tQQeiTskQeCtnRjeeVpkDCVNZFxGAVuun44BaWcBxAo8ptMZ42gZXCs3LcTVKFdqgJKHQFv4m_S7O1tMuAzV3PM',
    },
    {
      name: 'Gulab Jamun',
      src: 'https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2F003f0f0351967a7cb6212a8d9bfaf889_f956154e73.jpg&w=3840&q=75',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }} id="gallery">
      <Container>
        
        <div className="text-center mb-5">
          <p className="text-uppercase text-secondary mb-2 fw-semibold" style={{ letterSpacing: '1px' }}>
            Gallery
          </p>
          <h2 className="fw-bold" style={{ color: '#333' }}>
            Discover Our <span style={{ color: '#ff5722' }}>Vegetarian Delights</span>
          </h2>
        </div>

        
        <Row xs={1} sm={2} md={3} className="g-4">
          {galleryItems.map((item, index) => (
            <Col key={index} className="text-center">
              <div
                className="shadow-sm rounded-4 overflow-hidden mb-2"
                style={{ width: '100%', aspectRatio: '1 / 1' }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  fluid
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
              <p className="fw-semibold" style={{ fontSize: '1.05rem', color: '#444' }}>
                {item.name}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
