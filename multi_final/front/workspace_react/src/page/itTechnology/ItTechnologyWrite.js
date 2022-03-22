import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const Write = styled.div`
display: flex;
justify-content: center;

button {
      float: right;
      margin-left: 8px;
      width: 128px;
      height: 40px;
      border: 1px solid #3b9d9d;
      background-color: #3b9d9d;
      color: white;
      border-radius: 5px;
      outline: 0;
    }
`

const WriteForm = styled(Form)`
width: 1024px;
display: flex;
height: 40px;
.tagSelect{
width: 128px;
margin-right: 8px;

}
`

const ItTechnologyWrite = () => {
    const[t_tag,sett_tag] = useState(null);
    const[t_name, sett_name] = useState(null);
    const[t_content, sett_content] = useState(null);
    const[error, setError] = useState(null);

    const checkLogin = () => {
        if (t_name === null) {
            alert('글을 쓰기 위해 로그인이 필요합니다.');
        }
    }

    const handleTag = (e) => {
        sett_tag(e.target.value);
        console.log(e.target.value);
    }

    const handleContent =(e) => {
        sett_content(e.target.value);
        console.log(e.target.value);
    }

    const addTechComment = () => {
        checkLogin();
        if (t_tag === null) {
            alert("기술 카테고리를 선택하세요");
        } else if (t_content === null) {
            alert("내용을 입력하세요.");
        } else {
            console.log(localStorage.getItem('m_name'))
            console.log("axios t_name: " + t_name);
            console.log("axios t_tag: " + t_tag);
            console.log("axios t_contet: " + t_content);
            axios.post('http://localhost:8085/itTech/forum/addTech', null, {params: {'t_name': t_name, 't_tag': t_tag, 't_content': t_content}})
            .then(response => {
                console.log(response);
                document.location.href='/itTech/forum';
            }).catch(response => {
                console.log(response);
            })
        }
        
    }

    useEffect(() => {
        if(localStorage.getItem('m_name') === null) {
            sett_name(sessionStorage.getItem('m_name'));
        } else if (sessionStorage.getItem('m_name') === null) {
            sett_name(localStorage.getItem('m_name'));
        }
    }, [])

    return (
        <Write>
            <WriteForm>
                <Form.Select className='tagSelect' onChange={(e) => handleTag(e)}>
                    <option>선택</option>
                    <option value="React" >React</option>
                    <option value="Spring">Spring</option>
                    <option value="Vue">Vue</option>
                </Form.Select>
                <Form.Control as='input' type="text" placeholder="내용을 입력해주세요" onClick={() => checkLogin()} onChange={(content) => handleContent(content)}/>
            <button type="submitBtn" onClick={() => addTechComment()}>
                등록
            </button>
            </WriteForm>
        </Write>
    );
};

export default ItTechnologyWrite;