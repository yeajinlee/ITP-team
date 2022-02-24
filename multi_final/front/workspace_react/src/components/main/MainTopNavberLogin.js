import React, { Fragment } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
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
            <Fragment>
            <Navbar>
                <Container className='header' >
                    <Nav className="justify-content-center">
                        <Nav.Item>
                        <Nav.Link href="#itTrend" className='itT' >IT 트렌드</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/itTech">IT 기술</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#commuityCommunication">소통공간</Nav.Link>
                        </Nav.Item>
                        
                        </Nav>
                        </Container>
                        </Navbar>
                        </Fragment>
                        </div>
                        );
                    };

export default MainTopNavberLogin;
