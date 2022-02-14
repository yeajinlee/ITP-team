import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTopNevber from '../components/main/MainTopNevber';
import Mainimage from '../components/main/MainImage';
import MainCarousel from '../components/main/MainCarousel';
import MainBottomNevber from '../components/main/MainBottomNevber';

const Main = () => {
    return (
        <div>
          <MainTopNevber />
          <MainCarousel />
          <Mainimage />
          <MainBottomNevber />
        </div>
        
    );
};

export default Main;