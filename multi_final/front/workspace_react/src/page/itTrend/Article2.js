import React from 'react';
import { Link } from 'react-router-dom';
import trendData from './itTrendData.json';

function Article2() {
    return (
        <div>
        {trendData.trend.map((article)=>(
        <div className='article2'>
             <div key={article.no} >
           <Link to={"/itTrend/" + article.no}>
           <img width="300px" height="200px" src={article.img} alt="img" />
           {article.title}
           {article.subtitle}
           </Link>
           </div>
        </div>
        ))}
        </div>
    )
}

export default Article2