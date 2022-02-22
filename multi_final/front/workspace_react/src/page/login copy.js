import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, } from 'react-router-dom';
import { Formik } from 'formik';


function Login() {
 
        const initialValues = {// 각 양식 필드의 초기 값을 설명하는 객체
        // 각 키에 주어진 이름은 Formik에서 감시 할 입력 필드의 이름 값과 일치해야한다
        email: "",
        pw: "",
    };

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        axios.post('/user_inform/onLogin', null, {
            params: {
            'user_id': inputId,
            'user_pw': inputPw
            }
        })
        .then(res => {
            console.log(res)
            console.log('res.data.userId :: ', res.data.userId)
            console.log('res.data.msg :: ', res.data.msg)
            if(res.data.userId === undefined){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 id 가 일치하지 않습니다.')
            } else if(res.data.userId === null){
                // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
                alert('입력하신 비밀번호 가 일치하지 않습니다.')
            } else if(res.data.userId === inputId) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                console.log('======================','로그인 성공')
                sessionStorage.setItem('user_id', inputId)
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            document.location.href = '/'
        })
        .catch()
    }
 
     useEffect(() => {
         axios.get('/user_inform/login')
         .then(res => console.log(res))
         .catch()
     },[])


    // submitForm : 폼 데이터의 제출을 처리한다
    const submitForm = (values) => {
        console.log(values);
    };

    return (

        // initialValues : 각 양식 필드의 초기 값을 설명하는 객체
        // validate : 데이터 폼 유효성 검사를 처리하는 함수를 받음
        // onSubmit : 사용자가 제출 한 후 발생하는 작업을 처리
        // 💡 값 객체의 각 키는 입력 필드의 이름과 일치해야합니다.
        <Formik initialValues={initialValues} onSubmit={submitForm}>
            {(formik) => { //💡 formik props
                //💡 formik의 render API 속성들 입니다.
                const { handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                return (
                <div className="signIn">
                    <br />
                    <div className="title">로그인</div>
                    <br />
                    {/* form */}
                    <form onSubmit={handleSubmit} action="#" className="loginForm">
                        <div className="emailLogin">
                            <input type="email" name="email" id="email" value={inputId}  onChange={handleInputId} onBlur={handleBlur}
                            className={errors.email && touched.email ? "input-error" : null} placeholder="메일" />
                            {/* 이메일 에러나 이메일 터치했을 때 span 실행 */}
                            {errors.email && touched.email && (<span className="error">{errors.email}</span>)}
                        </div>
                        <br />
                        <div className="passwordLogin">
                            <input type="password" name="pw" id="pw" value={inputPw} onChange={handleInputPw} onBlur={handleBlur}
                            className={errors.pw && touched.pw ? "input-error" : null} placeholder="비밀번호" minlength="8" maxlength="16" />
                            {/* 비밀번호 에러나 비밀번호 터치했을 때 span 실행 */}
                            {errors.pw && touched.pw && (<span className="error">{errors.pw}</span>)}
                        </div>
                        <br />
                        <div class="mb-3" className='loginCheck'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">로그인 상태 유지</label>
                        </div>
                        <div className="btn">
                            <button type='button' onClick={onClickLogin}>로그인</button>
                            <input type="submit" className={dirty && isValid ? "" : "disabled-btn"} value="로그인">
                            </input>
                        </div> 
                        <div className="loginBottom">
                            <Link to="#passwordfind" class="link-dark" style={{ textDecoration: 'none' }}>비밀번호 재설정 </Link>ㅣ
                            <Link to="/Register" class="link-dark" style={{ textDecoration: 'none' }}> 메일 주소로 회원가입 </Link>
                        </div>
                    </form>
                </div>
                );
            }}
        </Formik>
    );
};
// }

export default Login;