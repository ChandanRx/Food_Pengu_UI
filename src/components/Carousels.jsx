import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Carousels = () => {
  return (
    <div>
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <div className="carousel-img-wrapper">
            <img
              className="d-block w-100 carousel-img"
              src="https://plus.unsplash.com/premium_photo-1679231521293-e13146411fb2?q=80&w=2070&auto=format&fit=crop"
              alt="First slide"
            />
            <div className="carousel-overlay" />
            <div className="carousel-caption-centered">
              <h2 className="carousel-title">Delicious & Authentic</h2>
              <p className="carousel-text">Experience food like never before with Food Pengu.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img-wrapper">
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1716535232838-cc7642aa19d9?q=80&w=2023&auto=format&fit=crop"
              alt="Second slide"
            />
            <div className="carousel-overlay" />
            <div className="carousel-caption-centered">
              <h2 className="carousel-title">Fresh Ingredients</h2>
              <p className="carousel-text">Every meal is crafted with love and the finest ingredients.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img-wrapper">
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1597131628347-c769fc631754?q=80&w=2070&auto=format&fit=crop"
              alt="Third slide"
            />
            <div className="carousel-overlay" />
            <div className="carousel-caption-centered">
              <h2 className="carousel-title">A Taste of Culture</h2>
              <p className="carousel-text">Serving the rich traditions of Indian cuisine on every plate.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
