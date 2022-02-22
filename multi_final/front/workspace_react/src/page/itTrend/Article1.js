import React from 'react';
import { Link } from 'react-router-dom';
import trendData from './itTrendData.json';

function Article1() {
    return (
        <div>
        {trendData.trend.map((article)=>(
        <div className='article1'>
            <div key={article.no} >
           <Link to={"/itTrend/" + article.no}>
           <img width="300px" height="200px" src={article.img} alt="img" />
           {article.title} <br/>
           {article.subtitle}
           </Link>
           </div>
        </div>
        ))}
        </div>
        
    )
}

export default Article1;

/*function Article1() {
    return (
        <div className='article1'>
            {trendData.trend.map((article)=>(
            <Link to={"/itTrend/" + article.no}>
           <img width="300px" height="200px" src={article.img} alt="img" />
           {article.title} <br/>
           {article.subtitle}
           </Link>
            ))}
        </div>
    )
}

export default Article1; */