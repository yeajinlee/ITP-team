import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ItTechnologyVue = () => {
    const [techVue, setTechVue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const resposne = await axios.get("http://localhost:8085/itTech/vue");
                setTechVue(resposne.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    if(loading) return <div>로딩중</div>
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techVue) return null;
    return (
        <div>
            <span className="itTechSpan">
                <img width="220px" height="150px" src="https://v3.ko.vuejs.org/logo.png" alt="img" />
                <div className='titleList'>
                    {techVue.articles.map((a, index) => (
                        <div key={index}>
                            <p className="boardTitle" onClick={() => window.open(`https://news.vuejs.org/${a.titleLink}`, "_blank")}>{a.title}</p>
                        </div>
                    ))}
                </div>
                
            </span>
        </div>
    );
};

export default ItTechnologyVue;