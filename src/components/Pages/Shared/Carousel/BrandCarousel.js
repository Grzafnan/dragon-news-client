import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../../assets/Brands/image-1.png'
import image2 from '../../../../assets/Brands/image-2.png'


const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px' }}
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '300px' }}
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;