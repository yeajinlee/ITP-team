import React from 'react';
//import { Card, CardGroup, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article1 from './Article1.js';
import Article2 from './Article2.js';
import './itTrendMain.scss'


const itTrendMain = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    return (
        <div id="trendAll">
            <div className='time'>
                <p>{year}.{month}.{date} 최신 뉴스</p>       
            </div>
            <div className='todayTrend'>
                <Article1/>           
            </div>
            <div id='passTrend'>
            <p>이전 뉴스</p>     
                <Article2/>
            </div>
        </div>
   );
};

export default itTrendMain;