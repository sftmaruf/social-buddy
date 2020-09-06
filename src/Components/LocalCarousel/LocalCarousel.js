import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../resources/carousel-1.png';
import pic2 from '../../resources/carousel-2.png';

import './LocalCarousel.css';

const LocalCarousel = () => {
  return (
    <div className = "carousel-container">
        <Carousel>
            <Carousel.Item>
              <img id = "image"
                className="d-block"
                src={pic1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="caption">Fake Post</h3>
                <p className="caption">we provide fake post</p>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
              <img id = "image"
                className="d-block"
                src={pic2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="caption">Fake Post</h3>
                <p className="caption">we provide highly fraud post</p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default LocalCarousel;