import React from 'react';
import { Formik } from "formik";
import '../components/Register/Register.scss';
import { Link, } from "react-router-dom";
 
function Register() {
    const initialValues = {// 각 양식 필드의 초기 값을 설명하는 객체
        // 각 키에 주어진 이름은 Formik에서 감시 할 입력 필드의 이름 값과 일치해야한다
        nickname: "",
        email: "",
        pw: "",
        pwCheck: "",
    };

    // 데이터 폼 유효성 검사를 처리하는 함수를 받는다. 데이터 값 형식의 객체를 인수로 받아들이고 정의 된 규칙에 따라 객체의 각 속성의 유효성을 검사
    const validate = (values) => {
        // 값 객체의 각 키는 입력 필드의 이름과 일치해야한다
        let errors = {};

        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const pwRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        const nicknameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]{2,15}$/;
        /* const pwCheckRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; */

        //닉네임 값이 없을 경우
        if (!values.nickname) {
            errors.nickname = "";
            //정규식에 어긋나는 경우
        } else if (!nicknameRegex.test(values.nickname)) {
            errors.nickname = "";
        }
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
        //비밀번호 값이 일치하지 않는 경우
        if (values.pwCheck !== values.pw){
            errors.pwCheck = "비밀번호가 서로 일치하지 않습니다.";
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
                    <div className="frame">
                        <div className="signIn">
                            <br />
                            <div className="title">회원가입</div>
                            <br />
                            {/* form */}
                            <form onSubmit={handleSubmit} action="#" className="loginForm">
                                
                            <div className="nicknameRegister">
                                    <input type="nickname" name="nickname" id="nickname" value={values.nickname} onChange={handleChange} onBlur={handleBlur}
                                        className={errors.nickname && touched.nickname ? "input-error" : null} placeholder="닉네임" />
                                        <p className='RegisterBottom'>한글, 영문, 숫자 포함 15자 이하</p>
                                    {/* 닉네임 에러나 닉네임 터치했을 때 span 실행  span 사이에 추가하면 적용됨.*/}
                                    {errors.nickname && touched.nickname && (<div className="error">{errors.nickname}</div>)}
                                </div>
                                <div className="emailRegister">
                                    <input type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                                        className={errors.email && touched.email ? "input-error" : null} placeholder="메일" />
                                    {/* 이메일 에러나 이메일 터치했을 때 span 실행  span 사이에 추가하면 적용됨.*/}
                                    {errors.email && touched.email && (<span className="error"><br />{errors.email}</span>)}
                                </div>
                                <br />
                                <div className="passwordRegister">
                                    <input type="password" name="pw" id="pw" value={values.pw} onChange={handleChange} onBlur={handleBlur}
                                        className={errors.pw && touched.pw ? "input-error" : null} placeholder="비밀번호" minlength="8" maxlength="16" />
                                        <p className='RegisterBottom'>영문 대소문자, 숫자, 특수문자 포함 8자 이상</p>
                                    {/* 비밀번호 에러나 비밀번호 터치했을 때 span 실행 */}
                                    {errors.pw && touched.pw && (<span className="error">{errors.pw}</span>)}
                                </div>
                                <div className="passwordLoginCheck">
                                    <input type="password" name="pwCheck" id="pwCheck" value={values.pwCheck} onChange={handleChange} onBlur={handleBlur}
                                        className={errors.pwCheck && touched.pwCheck ? "input-error" : null} placeholder="비밀번호확인" minlength="8" maxlength="16" />
                                    {/* 비밀번호 에러나 비밀번호 터치했을 때 div 실행 */}
                                    <div className="pwCheckError">
                                    {errors.pwCheck && touched.pwCheck && (<div>{errors.pwCheck}</div>)}
                                    </div>
                                </div>
                                <br />
                                <div class="mb-3" className='loginCheck'>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">회원 가입에 동의 하시나요?</label>
                                </div>
                                <div className="btn">
                                    <Link to="/login">
                                    <input type="submit" className={dirty && isValid ? "" : "disabled-btn"} value="회원가입" />
                                    </Link>
                                    <Link to="/myPageCommunityBoard">
                                        <div>마이페이지 테스트 이동용</div>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default Register;