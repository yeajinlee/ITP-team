import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ItTechnologySpring = () => {
    const [techSpring, setTechSpring] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const resposne = await axios.get("http://localhost:8085/itTech/spring");
                setTechSpring(resposne.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    if(loading) return <div>로딩중</div>
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techSpring) return null;
    return (
        <div>
            <span className="itTechSpan">
                <img width="200px" height="200px" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpFPRd%2FbtqCYFM6mA1%2FhC9HgrhsJwI38qEdCRqUG0%2Fimg.png" alt="img" />
                {techSpring.articles.map((a, index) => (
                    <div key={index}>
                        <p className="boardTitle" onClick={() => window.open(`https://spring.io${a.titleLink}`, "_blank")}>{a.title}</p>
                    </div>
                ))}
            </span>
        </div>
    );
};

export default ItTechnologySpring;