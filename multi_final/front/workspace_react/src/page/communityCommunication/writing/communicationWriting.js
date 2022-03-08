import React, {useState} from 'react';
import './communicationWriting.scss';

import { Link } from 'react-router-dom';
import axios from 'axios';


// eslint-disable-next-line
const CommunicationWriting = () => {
     
    const [c_title,setc_title] =useState('')
    

    const[c_content,setc_content]=useState('')
    const c_name='User'

    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    
    const c_date= year + '-' + month  + '-' + day;

    const handlec_title=(e)=>{
      setc_title(e.target.value)
      console.log(c_title);
     
    }

   
    const handlec_content=(e)=>{
      setc_content(e.target.value)
      console.log(c_content);
    }


    const submit=()=>{
     console.log(c_title);

     console.log(c_content);
      
      
      axios.post(`http://localhost:8085/addCom`,null,{
        params:{
          'c_name':c_name,
          'c_title':c_title,
          'c_content':c_content,
          'c_date':c_date,
        
         
        }
      })
      .then(res=>{
        console.log(res)
        console.log(res.data.c_title)
        console.log(res.data.c_content)
       
        document.location.href=`/communityGroup`;//성공시 목록으로 돌아가기
      })
      .catch()
    }
   
    return (
      
      <div id='writingAll' className="writingMain">
        <div className='titleAndSubject'>
        <input onChange={(e)=>handlec_title(e)} type="text" id="c_title" name="c_title" value={c_title}/>

      
        </div>
        <div className='content'>
        <textarea onChange={(e)=>handlec_content(e)} type="text" id="c_content" name="c_content" value={c_content}></textarea>
        
        </div>
        <div id='cButton'>
          <Link to='/communityGroup'>
            <button className='cancel'>
              취소
            </button>
          </Link>
          <button
          type="submit"
          className="submit-button"
          value="등록" 
          onClick={()=>submit()}
         />
            
        
        </div>
      </div>
  );
}

export default CommunicationWriting;