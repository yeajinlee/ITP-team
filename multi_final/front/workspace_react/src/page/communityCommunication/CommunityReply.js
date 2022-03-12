import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './communityReply.scss';

const CommunityReply = () => {
  const { no,num } = useParams();
  const navigate = useNavigate();
  
 
  const[Repdatas,setRepdata]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    
  
  function Delete(num){
       
    axios.delete(`http://localhost:8085/deleteRep/${num}`)
         .then(navigate('/communication/'+no)).catch(err=>console.log(err))

      }
  

     
      const[r_content,setr_content]=useState('')
      const r_name ='aab';
      console.log(r_name);
      
      const handler_content=(e)=>{
        setr_content(e.target.value)
      }
      var today = new Date();

      var year = today.getFullYear();
      var month = ('0' + (today.getMonth() + 1)).slice(-2);
      var day = ('0' + today.getDate()).slice(-2);
      
      const r_date= year + '-' + month  + '-' + day;

      console.log(r_content,r_name,r_date);

      function Update(num){
     
        console.log(r_content)
        
       
        axios.put(`http://localhost:8085/updateRep/${num}`,null,{
          params:{
         
            'r_content':r_content,
          }
        })
        .then(
          
          navigate('/communication/')//성공시 목록으로 돌아가기
        )
      
      }

      const submit=()=>{
      
          axios.post(`http://localhost:8085/addRep/${no}`,null,{
          params:{
            'r_no':no,
            'r_content':r_content,
            'r_name':r_name,
            'r_date':r_date
           
          }
          
        })
  
        .then(res=>{
          console.log(res)
          console.log(res.data.n_title)
          console.log(res.data.n_content)
         
          document.location.href=`/communication`;//성공시 목록으로 돌아가기
        })
        .catch()
      }
  

  useEffect(()=>{
      const fetchCom=async()=>{
          try {
              //error 와 notice 를 초기화
              setError(null);
              setRepdata(null);
              // loading 상태를 true
              setLoading(true);    
              const response=await axios.get(`http://localhost:8085/rep/${no}`);
              console.log(response.data);
              setRepdata(response.data);
          }catch(e){
              setError(e);
          }
          setLoading(false);
        
      
  };
  fetchCom();
  
},[no]);


if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!Repdatas) return null;

  return (
      <div id='replyAll'>
        <div id='replyRegi'>
        <input type="text" onChange={(e)=>handler_content(e)}id="r_content" name="r_content" value={r_content} />
        <button value="등록하기" onClick={()=>submit()}>
          등록하기
        </button>
        </div>
        <div id='replyBottom'>
        {Repdatas.map((Repdata,index) => (
          <Table>
            <tbody>
              <div key={index} className='replyContent'>

                  <p>{Repdata.r_name}</p>
                  <p>{Repdata.r_content} | {Repdata.r_date}</p>
                  <div>
                  <button value="삭제" onClick={()=>Delete(Repdata.r_rno)} >
                    삭제
                  </button>
                  <button value="수정" onClick={()=>Update(Repdata.r_rno)} >
                    수정
                  </button>
                  </div>
                </div>
            </tbody>
          </Table>
        ))}
      </div>
    </div>
  );
};



export default CommunityReply;