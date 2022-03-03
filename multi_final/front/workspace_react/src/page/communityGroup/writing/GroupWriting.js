import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './GroupWritingMain.scss';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GroupWriting = () => {
    const [Content, setContent] = useState({ 
        title: '',
        content: ''
    })
    

    const [viewContent, setViewContent] = useState([]);

    const getValue = e => {
      const { name, value } = e.target;
      setContent({
        ...Content,
        [name]: value
      })
      console.log(Content);
    };

    // const submit=()=>{
    //  console.log(g_title);
    //  console.log(g_subtitle);
    //  console.log(g_content);
      
      
    //   axios.post(`http://localhost:8085/addGroup`,null,{
    //     params:{
    //       'g_name':g_name,
    //       'g_title':g_title,
    //       'g_subtitle':g_subtitle,
    //       'g_content':g_content,
    //       'g_img':'g_img',
    //       'g_tag':'g_tag'
         
    //     }
    //   })
    //   .then(res=>{
    //     console.log(res)
    //     console.log(res.data.n_title)
    //     console.log(res.data.n_content)
       
    //     document.location.href=`/notice`;//성공시 목록으로 돌아가기
    //   })
    //   .catch()
    // }
   
    return (
      <div id='writingAll' className="writingMain">
        <div className='titleAndSubject'>
          <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
          />

          <input className="subtitle-input"
          type='text'
          placeholder='소제목'
          onChange={getValue}
          name='subtitle'
          />
          <Form.Select className='writingSubject'>
            <option>주제</option>
            <option value="study" >스터디</option>
            <option value="project">프로젝트</option>
            <option value="etc">기타</option>
            </Form.Select>
            <br />
        </div>
        <div className='content'>
        <CKEditor
        editor={ClassicEditor}
        data="<p>내용</p>"
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setContent({
            ...Content,
            content: data
          })
          console.log(Content);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
        />
        </div>
        <div id='button'>
          <Link to='/communityGroup'>
            <Button className='cancel me-2'>
              취소
            </Button>
          </Link>
          <Button 
          className="submit-button"
          onclick={() => {
            setViewContent(viewContent.concat({...Content}));
           
          }}
          >
            등록
          </Button>
        </div>
        <br /><br /><br />
        <br /><br /><br />
      </div>
  );
}

export default GroupWriting;