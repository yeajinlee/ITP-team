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
    const [trendDetail, setTrendDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8085/itTrend/${title}`);
                setTrendDetail(response.data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);
    if(loading) {
        return <div>트렌드 기사 내용을 불러오는 중</div>
    }
    if (error) {
        return (
            <div>
                오류가 발생했습니다. 관리자에게 문의해주세요.
                <input type="button" value="목록으로" onClick={BackToItTrendMain} />
            </div>
        );
    }
    if(!trendDetail) {
        return (
            <div>
                본문 요약 보기를 지원하지 않는 기사입니다.
                <input type="button" value="원문보기" onClick={() => window.open(`${trendDetail.url}`, "_blank")}/>
                <input type="button" value="목록으로" onClick={BackToItTrendMain} />
            </div>
        );
    }

    if(trendDetail.summary === " ") {
        return (
            <div>
                <h3>{trendDetail.title}</h3>
                <div><img src={trendDetail.urlToImage} alt="" width={500}></img></div>
                본문 요약 보기를 지원하지 않는 기사입니다. 기사 내용의 일부만 보여집니다. <br/>
                {/* <div>{trendDetail.description}</div> */}
                {trendDetail.content}
                <input type="button" value="원문보기" onClick={() => window.open(`${trendDetail.url}`, "_blank")}/>
                <input type="button" value="목록으로" onClick={BackToItTrendMain} />
            </div>
        );
    }

    return(
        <div>
            <h3>{trendDetail.title}</h3>
            <div><img src={trendDetail.urlToImage} alt="" width={500}></img></div>
            {/* <div>{trendDetail.description}</div> <br/> */}
            <div>{trendDetail.summary}</div>
            <input type="button" value="원문보기" onClick={() => window.open(`${trendDetail.url}`, "_blank")}/>
            <input type="button" value="목록으로" onClick={BackToItTrendMain} />
        </div>    
    ); 
};

export default ItTrendDetail;