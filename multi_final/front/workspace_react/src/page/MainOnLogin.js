import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainimage from '../components/main/MainImage';
import MainCarousel from '../components/main/MainCarousel';
import MainTopNavberLogin from "../components/main/MainTopNavberLogin" ;

const Main = () => {

    return (
        <div>
          <MainTopNavberLogin />
          <MainCarousel />
          <Mainimage />
        </div>
        
    );
};

export default Main;