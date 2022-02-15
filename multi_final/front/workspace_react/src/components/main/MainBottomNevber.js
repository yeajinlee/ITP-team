import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainBottomNevber.scss';

const MainNevber = () => {

    return (
        <div className='bottomNevber'>
            <>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#notice" >공지사항</Nav.Link>
                        <Nav.Link href="#FAQ">자주 묻는 질문</Nav.Link>
                        </Nav>
                        </Container>
                        </Navbar>
                        </>
                        </div>
                        );
                    };


export default MainNevber;
