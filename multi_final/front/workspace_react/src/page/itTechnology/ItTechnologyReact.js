import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';


const ItTechnologyReact = () => {
    const [techReact, setTechReact] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:8085/itTech/react");
                console.log(response);
                setTechReact(response.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    if(loading) return <div>로딩중</div>
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techReact) return null;
    return (
        <div>
            {/* <Link to={'React/'+techReact.title} className="itTechLink"> */}
                <span className="itTechSpan">
                    <img width="200px" height="200px" src="https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011" alt="img" />
                    {techReact.articles.map((a, index) => (
                        <div key={index}>
                            <p className="boardTitle" onClick={() => window.open(`https://ko.reactjs.org${a.titleLink}`, "_blank")}>{a.title}</p>
                        </div>
                    ))}
                </span>
                {/* <button onClick={() => window.open(`https://ko.reactjs.org${techReact.titleLink}`, "_blank")}>원문보기</button> */}
            {/* </Link> */}
        </div>
    );
};

export default ItTechnologyReact;