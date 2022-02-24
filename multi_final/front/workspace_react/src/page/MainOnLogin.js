import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainimage from '../components/main/MainImage';
import MainCarousel from '../components/main/MainCarousel';

const Main = () => {
// if문으로 참, 거짓 판단 후 출력하는 것도 고민해볼 것.
    return (
        <div>
          <MainCarousel />
          <Mainimage />
        </div>
        
    );
};

export default Main;