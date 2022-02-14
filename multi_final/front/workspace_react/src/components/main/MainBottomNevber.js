import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const MainNevber = () => {

        


    return (
        <div>
            <>
            <Navbar>
                <Container style={NavberMenu}>
                    <Nav className="me-auto">
                        <Nav.Link href="#itTrend" >공지사항</Nav.Link>
                        <Nav.Link href="#iTTechnology">자주 묻는 질문</Nav.Link>
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
