import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/login/login.scss';
import { Link, } from 'react-router-dom';

const login = () => {
    return (
        <div>
            <br />
            <p>로그인</p>
            <form className='loginform'>
                <div class="mb-0">
                    <label for="exampleInputEmail1" class="form-label" />
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="메일" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" />
                    <input type="password" class="form-control" id="exampleInputPassword1"  placeholder="비밀번호" />
                    </div>
                    <div class="mb-3 ">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">로그인 상태 유지</label>
                    </div>
                    <div className='loginBottom'>
                        <Link to="/passwordReset" class="link-dark" style={{ textDecoration: 'none'}}>
                            비밀번호 찾기
                        </Link>
                        ㅣ
                        <Link to="/Register" class="link-dark" style={{ textDecoration: 'none'}}>
                            메일 주소로 회원가입
                        </Link>
                    </div>
                    
                    <button type="submit" class="btn">로그인</button>

            </form>
        </div>
    );
};

export default login;