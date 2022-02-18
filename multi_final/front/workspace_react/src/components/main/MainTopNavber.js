import React, { Fragment } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNavber.scss';
import { Link } from 'react-router-dom';

const MainNevber = () => {

    return (
        <div className='topNavber'>
            <header>
                <p className='subject'>
                    <img src='./assets/ItpLogo_2.png' width='10%' alt='Logo'/>&nbsp;ITP
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

            <nav>
                <div>
                    <Link to='#itTrend' class="link-light" style={{ textDecoration: 'none'}}> IT 트렌드</Link></div>
                <div>
                <Link to='#iTTechnology' class="link-light" style={{ textDecoration: 'none'}}>IT 기술</Link></div>
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
                        <Nav.Link href="#iTTechnology">IT 기술</Nav.Link>
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

/*     const NavberMenu = {
        backgroundColor : "#008080",
    } */
export default MainNevber;
