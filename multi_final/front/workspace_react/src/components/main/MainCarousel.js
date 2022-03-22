import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../image/banner1_7.png'
import banner2 from '../image/banner1_6.png'
const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\一-龥\s]/g;
const titleUrl = (title) => {
  return title.replace(reg,"-");
};

const MainCarousel = () => {
    return (
      <div
        style={{
          justifyContent: 'center',
          margin: '0 auto',
          alignContent: 'center',
          display: 'block',
          width: 1024,
          marginTop: 10,
        
          paddingBottom: 20,
        }}
        id="cardImage"
        className="carousel"
      >
        <Carousel fade>
          <Carousel.Item>
            <img
            className="d-flex"
            src={banner1}
            alt="Second slide"
            width={1024}
            height={300}
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