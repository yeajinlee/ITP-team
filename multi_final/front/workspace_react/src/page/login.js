import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import MainCarousel from '../components/main/MainCarousel';
import '../components/login/login.scss'
import axios from 'axios';
import CryptoJS from 'crypto-js';


function Login() {
    const [m_email, setmemail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const[checked,setchecked]=useState(false);
   
    let sessionStorage = window.sessionStorage;
    const localStorage=window.localStorage;
    console.log(checked)
    const handlechange = (e) => {
        setchecked(!checked);
      };

    const submit=(m_email)=>{
   
        axios.post(`http://localhost:8085/member/login`,null,{
            params:{
            'm_email':m_email
            }
        })
        .then(response => {    
            console.log(response.data);
            
            const m_role=response.data[0].m_role;     
            const loginm_name=response.data[0].m_name;
            //db에 있는 패스워드 암호화 풀고 입력한 값과 비교
            //response값을 decrypto하고나서 loginpassword와 비교
            const loginpassworddb= (response.data[0].m_passwd); //db내용옮기기
            const loginpassworddbdecrypt  = CryptoJS.AES.decrypt(loginpassworddb, 'itp123');
            var decryptedData = loginpassworddbdecrypt.toString(CryptoJS.enc.Utf8);
           
            console.log('원래값풀기'+decryptedData );
            console.log(loginPassword);
         
              if((decryptedData ===loginPassword)&&(checked===false)){
                sessionStorage.setItem("loginemail", m_email);
                sessionStorage.setItem("loginPassword", response.data[0].m_passwd);//비밀번호
                sessionStorage.setItem("m_name",loginm_name); //닉네임
                sessionStorage.setItem("m_role",m_role);
                
                document.location.href = '/'
                 } 
                else if((decryptedData ===loginPassword)&&(checked===true)){
                    localStorage.setItem("loginemail", m_email);
                    localStorage.setItem("loginPassword", response.data[0].m_passwd);//비밀번호
                    localStorage.setItem("m_name", loginm_name); //닉네임
                    localStorage.setItem("m_role", m_role);
                    document.location.href='/'
                 }
                 else{
                  
                     alert('아이디나 비밀번호가 올바르지 않습니다');  
                     document.location.href = '/login'
                   
                 }
         })
         .catch(error => {
            console.log(error);
            alert('존재하지 않는 이메일입니다');  
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
                           
                            
                        </div>
                        <br />
                        <div className="passwordLogin">
                            <input type="password" name="pw" id="pw" 
                        placeholder="비밀번호" minlength="8" maxlength="16" onChange={ (e)=>{
                            setLoginPassword(e.target.value)}}/>
                           
                          
                        </div>
                        <br />
                        <div class="mb-3" className='loginCheck'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"   checked={checked} onChange={handlechange}/>
                            <label class="form-check-label" for="exampleCheck1">로그인 상태 유지</label>
                        </div>
                        <div>
                      
                            <button id='btn' type="submit" onClick={()=>submit(m_email)}  >로그인</button>
                            
                        </div> 
                        <div>
                            <Link to="#passwordfind" className='loginBottom' >비밀번호 재설정 </Link>ㅣ
                            <Link to="/Register" className='loginBottom'> 메일 주소로 회원가입 </Link>
                        </div>
                    </form>
                </div>
                );
       
 }

export default Login;