import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const MainNevber = () => {

        


    return (
        <div>
            <h1>ITP</h1>
            <>
            <Navbar>
                <Container style={NavberMenu}>
                    <Nav className="me-auto">
                        <Nav.Link href="#itTrend" >IT 트렌드</Nav.Link>
                        <Nav.Link href="#iTTechnology">IT 기술</Nav.Link>
                        <Nav.Link href="#commuityCommunication">소통공간</Nav.Link>
                        </Nav>
                        </Container>
                        </Navbar>
                        </>
                        </div>
                        );
                    };

    const NavberMenu = {
        backgroundColor : "#008080",
    }
export default MainNevber;
