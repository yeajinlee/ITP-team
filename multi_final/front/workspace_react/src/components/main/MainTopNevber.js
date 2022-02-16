import React, { Fragment } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNevber.scss';




const MainNevber = () => {

    return (
        <div className='topNevber'>
            <h1>ITP</h1>
            <Fragment className='tsopNevber'>
            <Navbar>
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link to="#itTrendMain">IT 트렌드</Nav.Link>
                        <Nav.Link href="#iTTechnology">IT 기술</Nav.Link>
                        <Nav.Link href="#commuityCommunication">소통공간</Nav.Link>
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
