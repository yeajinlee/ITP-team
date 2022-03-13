import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
//import { Formik } from 'formik';
//import MainCarousel from '../components/main/MainCarousel';
import '../components/login/login.scss'
import axios from 'axios';

function Login() {

    
    
    
    

/////////////////////////////////////////////

    //http://localhost:8085/member/get?m_email=${m_email}
    // const {m_email}=useParams();
    // //const {m_passwd}=useParams();
    // const [inputEmail, setinputEmail] = useState('')
    // const [inputPasswd, setinputPasswd] = useState('')
 
    // const handleinputEmail = (e) => {
    //     setinputEmail(e.target.value)
    // }
 
    // const handleinputPasswd = (e) => {
    //     setinputPasswd(e.target.value)
    // }
 
    // const onClickLogin = () => {
    //     console.log('click login')
    //     console.log('ID : ', inputEmail)
    //     console.log('PW : ', inputPasswd)
    //     axios.post(`http://localhost:8085/member/get`, null, {
    //         params: {
    //         'm_email': inputEmail,
    //         //'m_passwd': inputPasswd
    //         }
    //     })
    //     .then(res => {
    //         console.log(res)
    //         console.log('res.data.m_email :: ', res.data.m_email)
    //         console.log('res.data.msg :: ', res.data.msg)
    //         if(res.data.m_email === undefined){
    //             // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
    //             console.log('======================',res.data.msg)
    //             alert('입력하신 id 가 일치하지 않습니다.')
    //         } else if(res.data.m_email === null){
    //             // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
    //             console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
    //             alert('입력하신 비밀번호 가 일치하지 않습니다.')
    //         } else if(res.data.m_email === inputEmail) {
    //             // id, pw 모두 일치 userId = userId1, msg = undefined
    //             console.log('======================','로그인 성공')
    //             sessionStorage.setItem('m_email', inputEmail)
    //         }
    //         // 작업 완료 되면 페이지 이동(새로고침)
    //         document.location.href = '/MainOnLogin'
    //     })
    //     .catch()
    // }
 
    //  useEffect(() => {
    //      axios.get(`http://localhost:8085/member/get/${m_email}`)
    //      .then(res => console.log(res))
    //      .catch()
    //  },[])
    /////////////////////////////////////////////

                return (
                <div id='Login'>
                    <br />
                    <div className="title">로그인</div>
                    <br />
                    {/* form */}
                    <form action="/member/get" method="post"  className="loginForm">
                        <div className="emailLogin">
                            <input type="email" name="m_email" id="m_email" onChange={setLoginData} 
                            className="email" placeholder="이메일" />           
                        </div>
                        <br />
                        <div className="passwordLogin">
                            <input type="password" name="m_passwd" id="m_passwd" onChange={setLoginData} 
                            className="passwd" placeholder="비밀번호" minlength="8" maxlength="16" />                  
                        </div>
                        <br />
                        <div class="mb-3" className='loginCheck'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">로그인 상태 유지</label>
                        </div>
                        <div>
                        
                            <button id='btn' type="submit" className="LoginBtn" onClick={signin} >로그인</button>
                    
                        </div> 
                        <div className="loginBottom">
                            <Link to="#passwordfind" class="link-dark" style={{ textDecoration: 'none' }}>비밀번호 재설정 </Link>ㅣ
                            <Link to="/Register" class="link-dark" style={{ textDecoration: 'none' }}> 메일 주소로 회원가입 </Link>
                        </div>
                    </form>
                </div>
                );

};

export default Login;