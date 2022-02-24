import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainimage from '../components/main/MainImage';
import MainCarousel from '../components/main/MainCarousel';
import MainTopNavber from "../components/main/MainTopNavber" ;

const Main = () => {

    return (
        <div>
          <MainCarousel />
          <Mainimage />
        </div>
        
    );
};

export default Main;