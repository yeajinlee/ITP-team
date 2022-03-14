import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { useParams } from 'react-router-dom';

const ItTechnologyForum = () => {
    const {tag} = useParams();
    const [techForum, setTechForum] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8085/itTech/forum/${tag}`);
                setTechForum(response.data);
                console.log(response);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [tag]);
    if(loading) return <div>댓글을 가져오는중</div>;
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techForum) return <div>작성된 댓글이 없습니다.</div>
    return (
        <div>
            <input type="text" />
            <button>댓글 등록</button>
            {techForum.map((techForum, index) => (
                <div key={index}>
                    <p>{techForum.t_content}</p>
                    <p>{techForum.t_name} | {techForum.t_date}</p>
                </div>
            ))}
        </div>
    );
}

export default ItTechnologyForum;