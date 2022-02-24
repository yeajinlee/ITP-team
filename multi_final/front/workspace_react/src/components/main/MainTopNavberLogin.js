import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNavberLogin.scss';
import { Link } from 'react-router-dom';

const MainTopNavberLogin = () => {


    return (
        <div className='topNavber'>
            <header>
                <p className='subject'>
                    <Link to="/">
                    <img src='./assets/ItpLogo_2.png' width='10%' alt='Logo'/>&nbsp;ITP
                    </Link>
                    <div className='Logout'>
                        <Link to="/" class="link-dark" style={{ textDecoration: 'none'}}>
                            로그아웃
                        </Link>
                    </div>
                    <div className='myPage'>
                        <Link to="/myPageCommunityBoard" class="link-dark" style={{ textDecoration: 'none'}}>
                            마이페이지 &nbsp;&nbsp;
                        </Link>
                    </div>
                </p>
            </header>

            <nav>
                <div>
                    <Link to='#itTrend' class="link-light" style={{ textDecoration: 'none'}}> IT 트렌드</Link></div>
                <div>
                <Link to='/iTTech' class="link-light" style={{ textDecoration: 'none'}}>IT 기술</Link></div>
                <div>
                <Link to='#commuityCommunication' class="link-light" style={{ textDecoration: 'none'}}>소통 공간</Link></div>

            </nav>

                        </div>
                        );
                    };

export default MainTopNavberLogin;
