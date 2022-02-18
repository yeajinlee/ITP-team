import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/itTechnologyMain.scss'
import { useParams,useNavigate } from 'react-router-dom';
import dummy from './data.json';



const ItTechnologyDetail = () => {
   const{no}=useParams();
   const navigate = useNavigate();


    return (
        <div class="skilldetail">
            <h2>상세페이지 입니다.-{no}</h2>
            <ul>
                <li>title:{dummy.skills[no-1].title}</li>
                <li>subtitle:{dummy.skills[no-1].subtitle}</li>
                <li>content:{dummy.skills[no-1].content}</li>
            </ul>
            <button className="post-view-go-list-btn" onClick={() =>navigate('/itTech')}>목록으로 돌아가기</button>
        </div>
   );
};

export default ItTechnologyDetail;