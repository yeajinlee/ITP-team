import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/MainCarousel.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\一-龥\s]/g;
const titleUrl = (title) => {
  return title.replace(reg,"-");
};

const MainCarousel = () => {
    const [articles1, setArticles1] = useState(null);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8085/article1');
                console.log(response);
                setArticles1(response.data);
                console.log(articles1);
            } catch (error) {
                setError(error);
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);
    if (loading) {
        return null;
    }
    if (error) {
      return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    }
    if(!articles1) {
        return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>;
    }
    return (
      <div
        style={{
          justifyContent: 'center',
          margin: '0 auto',
          alignContent: 'center',
          display: 'block',
          width: 1440,
          paddingTop: 30,
          paddingBottom: 20,
        }}
        id="cardImage"
        className="carousel"
      >
        <Carousel fade>
          {articles1.articles.map((a, index) => (
            <Carousel.Item>
              <Link to={'/itTrend/'+ titleUrl(a.title)}>
                <img className="d-flex" src={a.urlToImage} alt="First slide" width={300} height={200}/>
                {a.title}
                <br />
                {/* {a.description} */}
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};
export default MainCarousel;