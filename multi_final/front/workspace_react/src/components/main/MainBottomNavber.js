import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/MainBottomNavber.scss';


const MainNevber = () => {

    return (
        <div className='bottomNavber'>
                        <nav className='mainNavber'>
                <div><Link to='/itTrend' class="link-light" style={{ textDecoration: 'none'}}> IT 트렌드</Link></div>
                <div><Link to='/iTTech' class="link-light" style={{ textDecoration: 'none'}}>IT 기술</Link></div>
                <div><Link to='#commuityCommunication' class="link-light" style={{ textDecoration: 'none'}}>소통 공간</Link></div>
                
            </nav>
            <>
            <Navbar>
                <div>
                <Container className='bottom'>
                    <Nav className="me-auto">
                        <div>
                        <Nav.Link href="/notice">공지사항</Nav.Link>
                        <Nav.Link href="#FAQ">이용약관</Nav.Link>
                        </div>
                        <div>
                        <Nav.Link href="#FAQ">자주 묻는 질문</Nav.Link>                      
                        <Nav.Link href="#FAQ">개인정보처리방침</Nav.Link>
                        </div>
                        </Nav>
                        </Container>
                        </div>
                        </Navbar>
                        </>
                        </div>
                        );
                    };


export default MainNevber;
