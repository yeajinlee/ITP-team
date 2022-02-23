import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, } from 'react-router-dom';
import { Formik } from 'formik';


function login() {
 
        const initialValues = {// 각 양식 필드의 초기 값을 설명하는 객체
        // 각 키에 주어진 이름은 Formik에서 감시 할 입력 필드의 이름 값과 일치해야한다
        email: "",
        pw: "",
    };



    // 데이터 폼 유효성 검사를 처리하는 함수를 받는다. 데이터 값 형식의 객체를 인수로 받아들이고 정의 된 규칙에 따라 객체의 각 속성의 유효성을 검사
    const validate = (values) => {
        // 값 객체의 각 키는 입력 필드의 이름과 일치해야한다
        let errors = {};

        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const pwRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

        //이메일 값이 없을 경우
        if (!values.email) {
            errors.email = "";
            //정규식에 어긋나는 경우
        } else if (!emailRegex.test(values.email)) {
            errors.email = "";
        }

        //비밀번호 값이 없을 경우
        if (!values.pw) {
            errors.pw = "";
            //비밀번호 길이가 4글자보다 작을 경우
        } else if (!pwRegex.test(values.pw)) {
            errors.pw = "";
        }

        return errors;
    };

    // submitForm : 폼 데이터의 제출을 처리한다
    const submitForm = (values) => {
        console.log(values);
    };

    return (

        // initialValues : 각 양식 필드의 초기 값을 설명하는 객체
        // validate : 데이터 폼 유효성 검사를 처리하는 함수를 받음
        // onSubmit : 사용자가 제출 한 후 발생하는 작업을 처리
        // 💡 값 객체의 각 키는 입력 필드의 이름과 일치해야합니다.
        <Formik initialValues={initialValues} validate={validate} onSubmit={submitForm}>
            {(formik) => { //💡 formik props
                //💡 formik의 render API 속성들 입니다.
                const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                return (
                <div className="signIn">
                    <br />
                    <div className="title">로그인</div>
                    <br />
                    {/* form */}
                    <form onSubmit={handleSubmit} action="#" className="loginForm">
                        <div className="emailLogin">
                            <input type="email" name="email" id="email" value={values.email}  onChange={handleChange} onBlur={handleBlur}
                            className={errors.email && touched.email ? "input-error" : null} placeholder="메일" />
                            {/* 이메일 에러나 이메일 터치했을 때 span 실행 */}
                            {errors.email && touched.email && (<span className="error">{errors.email}</span>)}
                        </div>
                        <br />
                        <div className="passwordLogin">
                            <input type="password" name="pw" id="pw" value={values.pw} onChange={handleChange} onBlur={handleBlur}
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
                        <Link to="/MainOnLogin">
                            <input type="submit" className={dirty && isValid ? "" : "disabled-btn"} value="로그인" />
                            </Link>
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

export default login;