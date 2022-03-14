import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ItTechnologyReact = () => {
    const [techReact, setTechReact] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
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
                <img width="200px" height="200px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="img" />
                {techReact.articles.map((a, index) => (
                    <div key={index}>
                        <p className="boardTitle" onClick={() => window.open(`https://ko.reactjs.org${a.titleLink}`, "_blank")}>{a.title}</p>
                    </div>
                ))}
            </span>
            {/* <button onClick={() => navigate('/itTech/forum/1')}>포럼</button> */}
        </div>
    );
};

export default ItTechnologyReact;