import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNavberNonLogin.scss';
import { Link } from 'react-router-dom';
import MainCarousel from './MainCarousel';
/* 
import MainCarousel from './MainCarousel'; */


   /* if를 통해서 구간 나눌 것. 
    if문 비교할 때 db 연동이 되있어야함. axios로 DB랑 회원에 관한 정보를 만들어놔야함. 
    입력값과 axios로 불러온 값이 일치하는지 안하는지에 따라 메뉴를 나누면 됨.
    import로 테이블에 있는 값을 다 가져와도 됨. */

const MainTopNavberNonLogin = () => {

    return (
        <div>
            <div id='mainTopNavber'>
                <Link to="/">
                    <img src='./assets/ItpLogo_2.png' width='10%' alt='Logo'/>
                </Link>
                <div id='topLoginAndRegister'>
                    <Link to="/login" className='Login'>
                        로그인 
                    </Link>
                    <Link to="/Register" className='Register'>
                        회원가입
                    </Link>
                </div>
                <nav id='topNav'>
                    <div id='navbarMain'>
                        <Link to='/itTrend' className='itTrendNav'>
                            IT 뉴스</Link>
                        <Link to='/iTTech' className='itTechNav'>IT 기술</Link>
                        <Link to='/communityGroup' className='itGroupNav'>모임찾기</Link>
                        ㅣ
                        <Link to='/communication' className='itCommuNav'>소통공간</Link>
                    </div>
                </nav>
            </div>
            <MainCarousel /> 
        </div>    
                        );
                    };

export default MainTopNavberNonLogin;
