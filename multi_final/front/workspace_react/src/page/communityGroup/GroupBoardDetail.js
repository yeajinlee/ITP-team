import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


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
    <div>
      
      <h3>모임찾기</h3>
     <div>
      {Groupdatas.map((Groupdata,index) => (
      <Table>
        
        <tbody>
          <tr key={index}>
            <th>제목</th> <td>{Groupdata.g_title}</td>
          </tr>
          <tr>
            <th>작성자</th> <td>{Groupdata.g_name}</td>
          </tr>
          <tr>
            <th>카테고리</th> <td>{Groupdata.g_tag}</td>
          </tr>
          
          <tr>
            <td colSpan={2}>{Groupdata.g_content}</td>
          </tr>
        </tbody>
        
      </Table>
      ))}
     </div>
      <input type="button" value="목록으로" onClick={BackToGroupBoard} />
      <input type="button" value="수정하기" onClick={()=>Update(no)} />
      <input type="button" value="삭제하기" onClick={()=>Delete(no)} />
      <input type="button" value="신청하기"/>
    
    </div>
  
  );
};



export default GroupBoardDetail;