import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import trendData from './itTrendData.json';
import axios from 'axios';

const Article1 = () => {
    const [articles1, setArticles1] = useState(null);
    const[loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8085/article1');
                console.log(response);
                setArticles1(response.data);
                console.log(articles1);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    if (loading) {
        return <div>오늘의 트렌드를 불러오는 중</div>;
    }
    if(!articles1) {
        return null;
    }
    return (
      <div>
        {articles1.articles.map((a, index) => (
          <div key={index} className='article1'>
            <Link to={a.url}>
              <img src={a.urlToImage} alt="" width={300} height={200}></img>
              {a.title}
            </Link>
          </div>
        ))}
      </div>
    );
};


/*function Article1() {
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
}*/

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