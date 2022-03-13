import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './communityDetail.scss'
import CommunityReply from './CommunityReply'

const CommunityDetail = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const BackToComBoard = () => {
    navigate('/communication');
  };
 
  const[Comdatas,setComdata]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[c_name,setc_name]=useState('');
  
  function Update(no){
   navigate(`/changeCom/${no}`)
  }
  function Delete(no){
       
    axios.delete(`http://localhost:8085/deleteCom/${no}`)
         .then(navigate('/communication')).catch(err=>console.log(err))
      }
  
    
  

  useEffect(()=>{
      const fetchCom=async()=>{
          try {
              //error 와 notice 를 초기화
              setError(null);
              setComdata(null);
              // loading 상태를 true
              setLoading(true);    
              const response=await axios.get(`http://localhost:8085/com/${no}`);
              console.log(response.data);
              setComdata(response.data);
              setc_name(response.data[0].c_name);
          }catch(e){
              setError(e);
          }
          setLoading(false);
        
      
  };
  fetchCom();
  
},[no]);


if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!Comdatas) return null;

  return (
    <div id='communityDetailAll'>
      <p className='communityDetailTop'>소통공간</p>
     <div id='detailContentPost'>
      {Comdatas.map((Comdata,index) => (
      <Table>
        <tbody>
          <div key={index} className='detailTitle'>
            <p className='communityTitle'>
              {Comdata.c_title}
              </p>
            <p>{Comdata.c_name} | {Comdata.c_tag}</p>
            </div>
          <div className='detailContent'>{Comdata.c_content}</div>
        </tbody>
      </Table>
      ))}
     </div>
     {
        ((sessionStorage.getItem('m_name'))===c_name||(localStorage.getItem('m_name'))=== c_name) ?
        
     <div id='detailButton'>
      <button className='communityDetailButton' value="목록으로" onClick={BackToComBoard} > 목록으로 </button>
      <button className='communityDetailButton' value="수정하기" onClick={()=>Update(no)} > 수정하기 </button>
      <button className='communityDetailButton' value="삭제하기" onClick={()=>Delete(no)} > 삭제하기 </button>
     </div>
     :
     <div id='detailButton'>
     <button className='communityDetailButton' value="목록으로" onClick={BackToComBoard} > 목록으로 </button>
     
    </div>
      }
      <CommunityReply/>
    </div>
  
  );
};



export default CommunityDetail;