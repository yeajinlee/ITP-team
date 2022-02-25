import React from 'react';
import './css/MainCarousel.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner2 from '../image/banner2.jpg';
import banner3 from '../image/banner3.jpg';
import { Carousel } from 'react-bootstrap';

const MainCarousel = () => {
    return (
        <div 
        style= {{ 
          justifyContent: 'center',
          margin: '0 auto',
          alignContent: 'center',
          display: 'block',
          width: 1024,
          paddingTop: 30,
          paddingLeft: 116
        }}
          id='cardImage'
          className='carousel'>
<Carousel fade>
  <Carousel.Item>
    <img
    className="d-flex"
      src={banner2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    
    className="d-flex"
      src={banner3}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-flex"
      src={banner2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};
export default MainCarousel;