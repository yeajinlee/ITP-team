import React, { Fragment } from 'react';
//import { Card, CardGroup, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article1 from './Article1.js';
import Article2 from './Article2.js';
import '../css/itTrendMain.scss'


const itTrendMain = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    return (
        <Fragment>
            <div className='time'>
                <p>{year}.{month}.{date} 트렌드</p>       
            </div>
            <div className='todayTrend'>
                <Article1/>           
            </div>
            <div className='passTrend'>
                <Article2/>
            </div>
        </Fragment>
   );
};

export default itTrendMain;