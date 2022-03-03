import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './communicationWriting.scss';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line    
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
    return (
      <div id='writingAll' className="writingMain">
        <div className='cTitleAndSubject'>
          <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
          />
          <Form.Select className='cWritingSubject'>
            <option>주제</option>
            <option value='free'>자유</option>
            <option value='React'>React</option>
            <option value='Java'>Java</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='Etc'>기타</option>
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
        <div id='cButton'>
          <Link to='/communication'>
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
      </div>
  );
}

export default GroupWriting;