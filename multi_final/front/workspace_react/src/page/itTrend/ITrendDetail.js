import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams,useNavigate } from 'react-router-dom';
import trendData from './itTrendData.json';

const ItTrendDetail = () => {
    const{no}=useParams();
    const navigate = useNavigate(); 
    const BackToItTrendMain = () => {
        navigate('/itTrend');
      };

    return(
        <div>
            <h2>상세페이지</h2>
            <ul>
                <li>{trendData.trend[no-1].img}</li>
                <li>title:{trendData.trend[no-1].title}</li>
                <li>subtitle:{trendData.trend[no-1].subtitle}</li>
                <li>content:{trendData.trend[no-1].content}</li>
            </ul>
            <input type="button" value="목록으로" onClick={BackToItTrendMain} />
        </div>    
    ); 
};

export default ItTrendDetail;