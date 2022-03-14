import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
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
            <span className="itTechSpan">
                <img width="220px" height="150px" src="./assets/reactLogo.png" alt="img" />
                <div className='titleList'>
                    {techReact.articles.map((a, index) => (
                        <div key={index}>
                            
                                <p>
                                    <span className="boardTitle" onClick={() => window.open(`https://ko.reactjs.org${a.titleLink}`, "_blank")}>{a.title} </span>
                                    <span className='boardDate'>{a.date}</span>
                                </p>
                            
                        </div>
                    ))}
                </div>
                
            </span>
            {/* <button onClick={() => navigate('/itTech/forum/1')}>포럼</button> */}
        </div>
    );
};

export default ItTechnologyReact;