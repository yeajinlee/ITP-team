import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNotice = () => {
  const navigate = useNavigate();
  const BackToNotice = () => {
      navigate("/notice");
  };

   const [n_title,setn_title] =useState('')
   const[n_content,setn_content]=useState('')
   
   const handlen_title=(e)=>{
     setn_title(e.target.value)
   }
   const handlen_content=(e)=>{
     setn_content(e.target.value)
   }
   const n_date =new Date().toISOString()
   const submit=()=>{
     console.log(n_title)
     console.log(n_content)
     
     
     axios.post(`http://localhost:8085/addNotice`,null,{
       params:{
         'n_title':n_title,
         'n_content':n_content,
         'n_date':n_date
       }
     })
     .then(res=>{
       console.log(res)
       console.log(res.data.n_title)
       console.log(res.data.n_content)
      
       document.location.href=`/notice`;//성공시 목록으로 돌아가기
     })
     .catch()
   }
  
  return (
    <div>
      <form>
      <h3>공지사항</h3>
      제목
      <input onChange={(e)=>handlen_title(e)} type="text" id="n_title" name="n_title" value={n_title}/>
      <br/>
      내용<textarea onChange={(e)=>handlen_content(e)} type="text" id="n_content" name="n_content" value={n_content}></textarea>
      <br/>
      <input type="button" value="취소" onClick={BackToNotice}/>
      <button type="submit" value="등록" onClick={()=>submit()}>등록</button>
      </form>
    </div>
  );
};

export default AddNotice;