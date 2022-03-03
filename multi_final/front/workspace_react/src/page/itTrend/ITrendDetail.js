import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams,useNavigate, useLocation } from 'react-router-dom';
import trendData from './itTrendData.json';
import axios from 'axios';

const ItTrendDetail = () => {
    const { title } = useParams();
    console.log(title);
    const navigate = useNavigate(); 
    const BackToItTrendMain = () => {
        navigate('/itTrend');
      };
    const [articledBody, setArticleBody] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8085/itTrend/${title}`);
                setArticleBody(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);
    if(loading) {
        return <div>트렌드 기사 내용을 불러오는 중</div>
    }
    if(!articledBody) {
        return null;
    }

    return(
        <div>
            <h3>기사 제목 영역</h3>
            {/* <ul>
                <li>{trendData.trend[no-1].img}</li>
                <li>title:{trendData.trend[no-1].title}</li>
                <li>subtitle:{trendData.trend[no-1].subtitle}</li>
                <li>content:{trendData.trend[no-1].content}</li>
            </ul> */}
            <div>사진 영역</div>
            <div>{articledBody}</div>
            
            <input type="button" value="목록으로" onClick={BackToItTrendMain} />
        </div>    
    ); 
};

export default ItTrendDetail;