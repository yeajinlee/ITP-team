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

const Article2 = () => {
    const [articles2, setArticles2] = useState(null);
    const[loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8085/article2');
                console.log(response);
                setArticles2(response.data);
                console.log(articles2);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    if (loading) {
        return <div>이번주의 트렌드를 불러오는 중</div>;
    }
    if(!articles2) {
        return null;
    }
    articles2.articles.splice(0, 2);
    return (
      <div>
        {articles2.articles.map((a, index) => (
          <div key={index} className="article2">
            <Link to={titleUrl(a.title)}>
              <img src={a.urlToImage} alt="" width={300} height={200}></img>
              {a.title}<br/>
            </Link>
          </div>
        ))}
      </div>
    );
  };


export default Article2;