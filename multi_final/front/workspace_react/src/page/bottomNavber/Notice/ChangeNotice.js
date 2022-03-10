import React,{useEffect, useState} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';

const ChangeNotice = () => {
  const navigate = useNavigate();
  const[Noticedatas,setNoticedata]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BackToNotice = () => {
      navigate("/notice");
  };

   const {no}=useParams();
  
   const [n_title,setn_title] =useState('')
   const[n_content,setn_content]=useState('')

   const handlen_title=(e)=>{
     setn_title(e.target.value)
   }
   const handlen_content=(e)=>{
     setn_content(e.target.value)
   }
  
   var today = new Date();

   var year = today.getFullYear();
   var month = ('0' + (today.getMonth() + 1)).slice(-2);
   var day = ('0' + today.getDate()).slice(-2);
   
   const n_date= year + '-' + month  + '-' + day;


   
   const submit=()=>{
     console.log(n_title)
     console.log(n_content)
     
    
     axios.put(`http://localhost:8085/updateNotice/${no}`,null,{
       params:{
         'n_title':n_title,
         'n_content':n_content,
         'n_date':n_date
       }
     })
     .then(
       
       navigate('/notice')//성공시 목록으로 돌아가기
     )
     
   }

   useEffect(()=>{
    const fetchNotice=async()=>{
        try {
            //error 와 notice 를 초기화
            setError(null);
            setNoticedata(null);
            // loading 상태를 true
            setLoading(true);    
            const response=await axios.get(`http://localhost:8085/notice/${no}`);
            console.log(response.data);
            setNoticedata(response.data);
           

        }catch(e){
            setError(e);
        }
        setLoading(false);
        
      
    
};
fetchNotice();

},[no]);

if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!Noticedatas) return null;
  
  return (
    <div>
 
      <form>
      <h3>공지사항수정</h3>
      제목
      <input onChange={(e)=>handlen_title(e)} type="text" id="n_title" name="n_title" placeholder={Noticedatas.n_title} value={n_title}/>
      <br/>
      내용<textarea onChange={(e)=>handlen_content(e)} type="text" id="n_content" name="n_content" value={n_content}></textarea>
      <br/>
      <input type="button" value="취소" onClick={BackToNotice}/>
      <button type="submit" value="등록" onClick={()=>submit()}>등록</button>
      </form>

    </div>
  );
};

export default ChangeNotice;