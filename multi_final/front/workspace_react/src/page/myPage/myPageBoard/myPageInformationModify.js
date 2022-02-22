import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar';
import './myPageInformationModify.scss';

const myPageInformationModify = () => {
    return (
        <div className='myList'>
            <Sidebar />
            <div class="card">
                <div className='board'>
                <div class="row g-3 align-items-center">
                        <div className='nickname'>
                            <label>닉네임</label>
                        </div>
                        <div class="col-auto">
                            <input type="text" id="inputNickname" class="form-control" aria-describedby="nicknameHelpInline" placeholder="닉네임" />
                        </div>
                        <div class="col-auto">
                            <span className='nicknameSpan' id="nicknameHelpInline" class="form-text">
                                한글, 영문, 숫자 포함 15자 이하
                            </span>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div class="row g-3 align-items-center">
                        <div className='password'>
                            <label>비밀번호</label>
                        </div>
                        <div class="col-auto">
                            <input type="password" id="inputExistingPassword" class="form-control" aria-describedby="passwordHelpInline" placeholder="기존 비밀번호" />
                        </div>
                    </div>
                    <br />
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <input type="password" id="inputChangePassword" class="form-control" aria-describedby="changePasswordHelpInline" placeholder="새 비밀번호" />
                        </div>
                        <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                            영문 대소문자, 숫자, 특수문자 포함 8자 이상
                            </span>
                        </div>
                    </div>
                    <br />
                    <div class="row g-3 align-items-center">
                    <div class="col-auto">
                            <input type="password" id="inputCheckPassword" class="form-control" aria-describedby="checkPasswordHelpInline" placeholder="새 비밀번호 확인" />
                    </div>
                    </div>
                    <br />
                    <br />
                    <div className='buttonGroup'>
                        <Link to="/">
                        <button type="submit" className='withdraw'>
                            회원 탈퇴
                        </button>
                        </Link>
                        <Link to="/">
                        <button type="submit" className='completion'>
                            수정 완료
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default myPageInformationModify;