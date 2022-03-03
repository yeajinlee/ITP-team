import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import trendData from './itTrendData.json';
import axios from 'axios';
import stringReplaceAll from 'string-replace-all';

const titleUrl = (title) => {
  var barTitle = stringReplaceAll(title, ' ' , '-');
  if (barTitle.includes('%')) barTitle = stringReplaceAll(barTitle,'%','-');
  if (barTitle.includes('/')) barTitle = stringReplaceAll(barTitle,'/','-');
  return barTitle;
};

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
            <Link to={titleUrl(a.title)}>
              <img src={a.urlToImage} alt="" width={300} height={200}></img>
              {a.title}
            </Link>
          </div>
        ))}
      </div>
    );
};


export default Article1;
