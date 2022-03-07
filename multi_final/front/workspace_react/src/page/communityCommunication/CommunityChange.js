import React,{useState} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';

const CommunityChange= () => {
  const navigate = useNavigate();

  const BackToComBoard = () => {
      navigate("/communication");
  };

   const {no}=useParams();
   const [c_title,setc_title] =useState('')
   const[c_content,setc_content]=useState('')
 
   const handlec_title=(e)=>{
     setc_title(e.target.value)
   }
   const handlec_content=(e)=>{
     setc_content(e.target.value)
   }
      
   const submit=()=>{
     console.log(c_title)
     console.log(c_content)
     
    
     axios.put(`http://localhost:8085/updateCom/${no}`,null,{
       params:{
         'c_title':c_title,
         'c_content':c_content,
       }
     })
     .then(
       
       navigate('/communication')//성공시 목록으로 돌아가기
     )
     
   }
  
  return (
    <div>
      <form>
      <h3>소통공간 수정</h3>
      제목
      <input onChange={(e)=>handlec_title(e)} type="text" id="c_title" name="c_title" placeholder={c_title} value={c_title}/>
      <br/>
      내용<textarea onChange={(e)=>handlec_content(e)} type="text" id="c_content" name="c_content" value={c_content}></textarea>
      <br/>
      <input type="button" value="취소" onClick={BackToComBoard}/>
      <button type="submit" value="등록" onClick={()=>submit()}>등록</button>
      </form>
    </div>
  );
};

export default CommunityChange;