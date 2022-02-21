import React, { Fragment } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNevber.scss';




const MainNevber = () => {

    return (
        <div className='topNevber'>
            <h1>ITP</h1>
            <Fragment>
                <div>
            <Navbar>
                <Container className='header' >
                    <Nav className="me-auto">
                        <Nav.Link to="/itTrendMain">IT 트렌드</Nav.Link>  
                        <Nav.Link to="/itTech">IT 기술</Nav.Link>
                        <Nav.Link href="#commuityCommunication">소통공간</Nav.Link>
                        </Nav>
                        </Container>
                        </Navbar>
                        </div>
                        </Fragment>
                        </div>
                    
                        );
                    };

/*     const NavberMenu = {
        backgroundColor : "#008080",
    } */
export default MainNevber;
