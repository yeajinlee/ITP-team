import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import MainCarousel from '../components/main/MainCarousel';
import '../components/login/login.scss'
import axios from 'axios';
import CryptoJS from 'crypto-js';


function Login() {
    let [m_email, setmemail] = useState('');
    let [loginPassword, setLoginPassword] = useState('');

   
    let sessionStorage = window.sessionStorage;
    
    const submit=(m_email)=>{
        
        axios.get(`http://localhost:8085/member/dupliemail?m_email=${m_email}`)
        .then(response => {    
            console.log(response.data);
           // console.log(response.data[0].m_passwd);
           // setloginpasswordtemp(response.data[0].m_passwd);
                     
            const loginm_name=response.data[0].m_name;
            //db에 있는 걸 암호화를 풀고 입력한 값과 비교
            //response값을 decrypto하고나서 loginpassword와 비교
            const loginpassworddb= (response.data[0].m_passwd); //db내용옮기기
            var bytes  = CryptoJS.AES.decrypt(loginpassworddb, 'itp123');
            var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

            console.log('원래값풀기'+decryptedData );
            console.log(loginPassword);

                if(decryptedData ===loginPassword){
                sessionStorage.setItem("loginemail", m_email);
                sessionStorage.setItem("loginPassword", response.data[0].m_passwd);//비밀번호
                sessionStorage.setItem("m_name",loginm_name); //닉네임
                
                document.location.href = '/'
                 }
                 else {
                    console.log('원래값풀기'+decryptedData );
                    console.log(loginPassword);
                     alert('비밀번호가 올바르지 않습니다');   
                   
                 }
         })
         .catch(error => {
            console.log(error);
         });
      
         
    }
   
    return (

        
                  <div id='Login'>
                    <MainCarousel />
                    <br />
                    <div className="title">로그인</div>
                    <br />
                    {/* form */}
                    <form  className="loginForm">
                        <div className="emailLogin">
                            <input type="m_email" name="email" id="email" onChange={ (e)=>{
                    setmemail(e.target.value)}} placeholder="메일" />
                            {/* 이메일 에러나 이메일 터치했을 때 span 실행 */}
                            
                        </div>
                        <br />
                        <div className="passwordLogin">
                            <input type="password" name="pw" id="pw" 
                        placeholder="비밀번호" minlength="8" maxlength="16" onChange={ (e)=>{
                            setLoginPassword(e.target.value)}}/>
                            {/* 비밀번호 에러나 비밀번호 터치했을 때 span 실행 */}
                          
                        </div>
                        <br />
                        <div class="mb-3" className='loginCheck'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">로그인 상태 유지</label>
                        </div>
                        <div>
                      
                            <button id='btn' type="submit" onClick={()=>submit(m_email)}  >로그인</button>
                            
                        </div> 
                        <div className="loginBottom">
                            <Link to="#passwordfind" class="link-dark" style={{ textDecoration: 'none' }}>비밀번호 재설정 </Link>ㅣ
                            <Link to="/Register" class="link-dark" style={{ textDecoration: 'none' }}> 메일 주소로 회원가입 </Link>
                        </div>
                    </form>
                </div>
                );
       
 }

export default Login;