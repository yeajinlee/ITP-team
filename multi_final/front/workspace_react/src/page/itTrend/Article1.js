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
    },[]);
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
            <Link to={{
                pathname:"/itTrend/detail",
                state: {
                    title: a.title,
                    url: a.url,
                    urlToImage: a.urlToImage
                }
            }}>
              <img src={a.urlToImage} alt="" width={300} height={200}></img>
              {a.index}
              {a.title}
            </Link>
          </div>
        ))}
      </div>
    );
};


export default Article1;
