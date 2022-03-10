import React,{useState} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';

const GroupBoardChange= () => {
  const navigate = useNavigate();

  const BackToGroupBoard = () => {
      navigate("/communityGroup");
  };

   const {no}=useParams();
   const [g_title,setg_title] =useState('')
   console.log(g_title);
   const[g_content,setg_content]=useState('')
 
   const handlen_title=(e)=>{
     setg_title(e.target.value)
   }
   const handlen_content=(e)=>{
     setg_content(e.target.value)
   }
      
   const submit=()=>{
     console.log(g_title)
     console.log(g_content)
     
    
     axios.put(`http://localhost:8085/updateGroup/${no}`,null,{
       params:{
         'g_title':g_title,
         'g_content':g_content,
       }
     })
     .then(
       
       navigate('/communityGroup')//성공시 목록으로 돌아가기
     )
     
   }
  
  return (
    <div>
      <form>
      <h3>모임찾기수정</h3>
      제목
      <input onChange={(e)=>handlen_title(e)} type="text" id="g_title" name="g_title" placeholder={g_title} value={g_title}/>
      <br/>
      내용<textarea onChange={(e)=>handlen_content(e)} type="text" id="g_content" name="g_content" value={g_content}></textarea>
      <br/>
      <input type="button" value="취소" onClick={BackToGroupBoard}/>
      <button type="submit" value="등록" onClick={()=>submit()}>등록</button>
      </form>
    </div>
  );
};

export default GroupBoardChange;