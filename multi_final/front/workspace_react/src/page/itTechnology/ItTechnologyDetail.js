import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItTechnologyDetail = () => {
    const{no}=useParams();
    const navigate = useNavigate();
    const[techs,setTech]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchTech=async()=>{
            try {
                //error 와 tech 를 초기화
                setError(null);
                setTech(null);
                // loading 상태를 true
                setLoading(true);    
                const response=await axios.get(`http://localhost:8085/itTech/${no}`);
                setTech(response.data);
            }catch(e){
                setError(e);
            }
            setLoading(false);
          
        
    };
    fetchTech();
    
},[no]);
if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!techs) return null;

    return (
        <div class="skilldetail">
            <h2>상세페이지 입니다.-{no}</h2>
            <ul>
            {techs.map((tech)=>(
                <div>
                <li>title:{tech.title}</li>
                <li>subtitle:{tech.subtitle}</li>
                <li>content:{tech.content}</li>
                </div>
            ))}
          
            </ul>
            <button className="post-view-go-list-btn" onClick={() =>navigate('/itTech')}>목록으로 돌아가기</button>
        </div>
   );
};

export default ItTechnologyDetail;