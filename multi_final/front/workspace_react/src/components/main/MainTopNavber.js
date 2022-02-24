import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNavberNonLogin.scss';
import { Link } from 'react-router-dom';


const MainTopNavberNonLogin = () => {

    return (
        
        <div className='mainTopNavber'>

<header>
    {/* if를 통해서 구간 나눌 것. 
    if문 비교할 때 db 연동이 되있어야함. axios로 DB랑 회원에 관한 정보를 만들어놔야함. 
    입력값과 axios로 불러온 값이 일치하는지 안하는지에 따라 메뉴를 나누면 됨.
    import로 테이블에 있는 값을 다 가져와도 됨. */}
                <p className='subject'>
                    <Link to="/">
                    <img src='./assets/ItpLogo_2.png' width='10%' alt='Logo'/>&nbsp;ITP
                    </Link>
                    <div className='Register'>
                        <Link to="/Register" class="link-dark" style={{ textDecoration: 'none'}}>
                            회원가입
                        </Link>
                    </div>
                    <div className='Login'>
                        <Link to="/login" class="link-dark" style={{ textDecoration: 'none'}}>
                            로그인 &nbsp;&nbsp;
                        </Link>
                    </div>
                </p>
            </header>

            <nav className='mainNavber'>
                <div><Link to='/itTrend' class="link-light" style={{ textDecoration: 'none'}}> IT 트렌드</Link></div>
                <div><Link to='/iTTech' class="link-light" style={{ textDecoration: 'none'}}>IT 기술</Link></div>
                <div><Link to='#commuityCommunication' class="link-light" style={{ textDecoration: 'none'}}>소통 공간</Link></div>
                
            </nav>

                        </div>
                        
                        );
                    };

export default MainTopNavberNonLogin;
