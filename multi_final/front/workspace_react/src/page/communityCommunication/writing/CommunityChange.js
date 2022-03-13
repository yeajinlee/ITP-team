import React,{useState} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

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
      
 
    <div id='communityWritingAll'>
      <p className='communityTitle'>소통공간</p>
      <Form className='writingForm'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" onChange={(e)=>handlec_title(e)} placeholder="글 제목을 입력해주세요" />
        </Form.Group>
          <Form.Group className='writingFile'controlId="formFile">
            <Form.Control  type="file" />
          </Form.Group>
          <Form.Control as='textarea' onChange={(e)=>handlec_content(e)} className='writingText' type="text" placeholder="내용을 입력해주세요" />
      </Form>
      <div id='button'>
          <Button className='cancel me-2' onClick={BackToComBoard} >
            취소
          </Button>
        <Button 
        type="submit"
        className="submit-button"
        onClick={()=>submit()}
        >
          등록
        </Button>
      </div>
    </div>
  );
};

export default CommunityChange;