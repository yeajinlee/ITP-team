import React, {useState} from 'react';
import './GroupWritingMain.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


// eslint-disable-next-line
const GroupWriting = () => {
     


    const [g_title,setg_title] =useState('')
    
    const [g_subtitle,setg_subtitle] =useState('')
    const[g_content,setg_content]=useState('')
    const[g_tag,setg_tag]=useState('')
    const g_img='https://blog.kakaocdn.net/dn/cZsyTw/btq0u5VBWge/F7xmauYA6r8nnbXSz2vJhK/img.png'
    const g_name='User'

    const handleg_title=(e)=>{
      setg_title(e.target.value)
      console.log(g_title);
     
    }

    const handleg_subtitle=(e)=>{
      setg_subtitle(e.target.value)
      console.log(g_subtitle);
    }
    const handleg_content=(e)=>{
      setg_content(e.target.value)
      console.log(g_content);
    }

    const handleg_tag=(e)=>{
      setg_tag(e.target.value)
      console.log(g_tag)
    }

    const submit=()=>{
     console.log(g_title);
     console.log(g_subtitle);
     console.log(g_content);
      
      
      axios.post(`http://localhost:8085/addgroup`,null,{
        params:{
          'g_name':g_name,
          'g_title':g_title,
          'g_subtitle':g_subtitle,
          'g_content':g_content,
          'g_img':g_img,
          'g_tag':g_tag
         
        }
      })
      .then(res=>{
        console.log(res)
        console.log(res.data.g_title)
        console.log(res.data.g_content)
       
        document.location.href=`/communityGroup`;//성공시 목록으로 돌아가기
      })
      .catch()
    }
   
    return (
      
      <div id='writingAll' className="writingMain">
        <div className='titleAndSubject'>
          <form>
          <p>제목:
        <input onChange={(e)=>handleg_title(e)} type="text" id="g_title" name="g_title" value={g_title}/></p>
        <p>소제목:
        <input onChange={(e)=>handleg_subtitle(e)} type="text" id="g_subtitle" name="g_subtitle" value={g_subtitle}/> 
        
          <select className='writingSubject' value={g_tag} onChange={(e)=>handleg_tag(e)} >
            <option>주제</option>
            <option value="스터디" >스터디  </option>
            <option value="프로젝트">프로젝트  </option>
            <option value="기타">기타  </option>
            </select>
            </p>
            <div className='content'>
        <textarea onChange={(e)=>handleg_content(e)} type="text" id="g_content" name="g_content" value={g_content} ></textarea>
        
        </div>
            </form>
        </div>
     
        <div id='button'>
          <Link to='/communityGroup'>
            <Button className='cancel me-2'>
              취소
            </Button>
          </Link>
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
}

export default GroupWriting;