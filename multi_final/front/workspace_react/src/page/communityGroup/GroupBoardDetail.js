import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import './groupBoardDetail.scss'
import MainCarousel from '../../components/main/MainCarousel';

const GroupBoardDetail = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const BackToGroupBoard = () => {
    navigate('/communityGroup');
  };
 
  const[Groupdatas,setGroupdata]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  function Update(no){
   navigate(`/changeGroup/${no}`)
  }
  function Delete(no){
       
    axios.delete(`http://localhost:8085/deleteGroup/${no}`)
         .then(navigate('/communityGroup')).catch(err=>console.log(err))
      }
  
    
  

  useEffect(()=>{
      const fetchNotice=async()=>{
          try {
              //error 와 notice 를 초기화
              setError(null);
              setGroupdata(null);
              // loading 상태를 true
              setLoading(true);    
              const response=await axios.get(`http://localhost:8085/group/${no}`);
              console.log(response.data);
              setGroupdata(response.data);
          }catch(e){
              setError(e);
          }
          setLoading(false);
        
      
  };
  fetchNotice();
  
},[no]);


if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!Groupdatas) return null;

  return (
    <div id='groupDetailAll'>
      
      <MainCarousel />
      <p className='groupDetailTop'>모임찾기</p>
     <div id='detailContentPost'>
      {Groupdatas.map((Groupdata,index) => (
      <Table>
        <tbody>
          <div key={index} className='detailTitle'>
            <p>{Groupdata.g_title}</p>
            <p>{Groupdata.g_name} | {Groupdata.g_tag}</p>
            </div>
          <div className='detailContent'>{Groupdata.g_content}</div>
        </tbody>
      </Table>
      ))}
     </div>
     <div id='detailButton'>
      <button className='groupDetailButton' value="목록으로" onClick={BackToGroupBoard} > 목록으로 </button>
      <button className='groupDetailButton' value="수정하기" onClick={()=>Update(no)} > 수정하기 </button>
      <button className='groupDetailButton' value="삭제하기" onClick={()=>Delete(no)} > 삭제하기 </button>
      </div>
    </div>
  
  );
};



export default GroupBoardDetail;