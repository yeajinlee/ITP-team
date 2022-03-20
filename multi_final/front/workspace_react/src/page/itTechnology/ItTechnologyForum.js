import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItTechnologyWrite from './ItTechnologyWrite';



const ItTechnologyForum = () => {
    const {tag} = useParams();
    const [techForum, setTechForum] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchForum = async() => {
            setLoading(true);
            try {
                if(tag == null) {
                    const response = await axios.get('http://localhost:8085/itTech/forum');
                    setTechForum(response.data);
                    console.log(response);
                }
                else {
                    const response = await axios.get(`http://localhost:8085/itTech/forum/${tag}`)
                    setTechForum(response.data);
                    console.log(response);
                }
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchForum();
    }, [tag]);

    

    if(loading) return <div>댓글을 가져오는중</div>;
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techForum) return <div>작성된 댓글이 없습니다.</div>
    return (
        <div>
            <Link to="/itTech/forum">전체</Link>
            <Link to="/itTech/forum/React">React</Link>
            <Link to="/itTech/forum/Spring">Spring</Link>
            <Link to="/itTech/forum/Vue">Vue</Link>
            <br/>
            <ItTechnologyWrite/>
            <br/>
            {techForum.map((techForum, index) => (
                <div key={index}>
                    <p>{techForum.t_tag}</p>
                    <p>{techForum.t_parentno}</p>
                    <p>{techForum.t_content}</p>
                    <p>{techForum.t_name} | {techForum.t_date}</p>
                    
                    <button>수정</button>
                    <button>삭제</button>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default ItTechnologyForum;