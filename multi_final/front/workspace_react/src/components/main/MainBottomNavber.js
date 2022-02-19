import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/MainBottomNavber.scss';


const MainNevber = () => {

    return (
        <div className='bottomNavber'>
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
