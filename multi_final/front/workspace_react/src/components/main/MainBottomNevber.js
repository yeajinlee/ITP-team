import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/MainBottomNevber.scss';

const MainNevber = () => {

    return (
        <div className='bottomNavber'>
            <>
            <Navbar>
                <div>
                <Container className='bottom'>
                    <Nav className="me-auto text-white">
                        <div>
                        <Nav.Link href="#notice">공지사항</Nav.Link>
                        <Nav.Link href="#FAQ">이용약관</Nav.Link>
                        </div>
                        <div>
                        <Nav.Link href="#FAQ">자주 묻는 질문</Nav.Link>
                        <Link to ="#notice" style={{ textDecoration: 'none'}}>가나다라(색상 변경은 나중에)</Link>                        
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
