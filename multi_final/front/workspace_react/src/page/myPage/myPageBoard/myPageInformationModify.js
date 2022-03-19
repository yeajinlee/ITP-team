import React,{useState,useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar';
import './myPageInformationModify.scss';
import CryptoJS from 'crypto-js';
import axios from 'axios';


const MyPageInformationModify = () => {

    const [isLogin,setIslogin]=useState();

    const navigate = useNavigate();

    const { m_name } = useParams();
    //const myname=sessionStorage.getItem('m_name');

    const [m_passwd, setm_passwd]=useState(""); //변경할 비밀번호
    const [m_passwdd, setm_passwdd]=useState(""); //기존 비밀번호

    const [m_passwdchecked, setm_passwdchecked]=useState("");

    //암호화
    //const encrypted=CryptoJS.AES.encrypt(JSON.stringify(m_passwd), 'itp123').toString();
    //복호화
    //const decrypted=CryptoJS.AES.decrypt(m_passwdd, 'itp123');
    //    var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
    //console.log(m_passwdd);

    const changePasswd = (e) => { 
        setm_passwd(e.target.value);
     };

    axios.get(`http://localhost:8085/member/dupliname?m_name=${m_name}`)
    .then(response => {    
        console.log(response.data);
      setm_passwdd(response.data[0].m_passwd);    
      console.log(m_passwdd);
    })
    .catch(error => {
        console.log(error);
    });

     //복호화
     const decrypted=CryptoJS.AES.decrypt(m_passwdd, 'itp123');
     var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);

     //회원정보 수정 버튼
     const submit=()=>{
        console.log(m_passwd)
         //암호화
        const encrypted=CryptoJS.AES.encrypt(m_passwd, 'itp123').toString();
        axios.put(`http://localhost:8085/member/${m_name}`,null,{
          params:{
            'm_passwd': encrypted
          }
        })
        .then(
            navigate('/')//성공시 마이페이지 정보수정 화면으로 돌아가기
        )   
      }

      //회원탈퇴 버튼
      function Delete(m_name){

        axios.delete(`http://localhost:8085/member/delete/${m_name}`)
             .then(window.location='/', Logout()).catch(err=>console.log(err))

          }

        function Logout() {
            localStorage.clear();
            sessionStorage.clear();
            setIslogin(false);
            console.log(setIslogin);
          alert('회원탈퇴가 완료되었습니다');
        }
      


   


    return (
        <div id='myPageMain'>
            <Sidebar />
            <div id='modifyForm'>
                <Form>
                    <Form.Group id='modifynicknameForm' controlId="formBasicEmail">
                        <Form.Label className='modifyLabel'>닉네임</Form.Label>
                        <Form.Control className='nicknameInput' type="input" placeholder={m_name} disabled/>
                        <Form.Text className='modifyText'>
                            한글, 영문, 숫자 포함 15자 이하
                        </Form.Text>
                    </Form.Group>
                    <div id='modifyPassword'>
                    <Form.Group  controlId="formBasicPassword">
                        <Form.Label className='modifyLabel'>비밀번호</Form.Label>
                        <Form.Control className='passwordInput' type="password" value={decryptedData} disabled/>
                    </Form.Group>
                    <Form.Group className='modifyNewPasswordForm' controlId="formBasicPassword">
                        <Form.Control className='passwordInput' type="password" placeholder="새 비밀번호" onChange={changePasswd}/>
                        <Form.Text className='modifyText'>
                            영문 대소문자, 숫자, 특수문자 포함 8자리 이상 16자리 이하
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='modifyCheckPasswordForm' controlId="formBasicPassword">
                        <Form.Control className='passwordInput' type="password" placeholder="새 비밀번호 확인" />
                    </Form.Group>
                    </div>
                </Form>
                <div id='buttonGroup'>
                        <Button type="submit" className='withdraw' onClick={()=>Delete(m_name)}>
                            회원 탈퇴
                        </Button>
                        <Button type="submit" className='completion' onClick={()=>submit()}>
                            수정 완료
                        </Button>
                 </div>
            </div>
        </div>
    );
};

export default MyPageInformationModify;