import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
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

  
  function Update(no){
   navigate(`/changeCom/${no}`)
  }
  function Delete(no){
       
    axios.delete(`http://localhost:8085/deleteGroup/${no}`)
         .then(navigate('/communityGroup')).catch(err=>console.log(err))
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
    <div>
      
      <h3>소통공간</h3>
     <div>
      {Comdatas.map((Comdata,index) => (
      <Table>
        
        <tbody>
          <tr key={index}>
            <th>제목</th> <td>{Comdata.c_title}</td>
          </tr>
          <tr>
            <th>작성자</th> <td>{Comdata.c_name}</td>
          </tr>
          <tr>
            <th>카테고리</th> <td>{Comdata.c_tag}</td>
          </tr>
          
          <tr>
            <td colSpan={2}>{Comdata.c_content}</td>
          </tr>
        </tbody>
        
      </Table>
      ))}
     </div>
      <input type="button" value="목록으로" onClick={BackToComBoard} />
      <input type="button" value="수정하기" onClick={()=>Update(no)} />
      <input type="button" value="삭제하기" onClick={()=>Delete(no)} />
      
        <CommunityReply/>
    </div>
  
  );
};



export default CommunityDetail;