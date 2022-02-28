import React from 'react';
import { Card, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import './groupBorad.scss'

const groupBorad = () => {
    return (
        <div>
          <div id='firstLine' className='boardFirstLine'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/react_logo.png" />
              <Card.Body >
                <Card.Title className='title'>리액트 스터디 모집</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">작성자</Card.Link>
                <Card.Link className='link' href="#">주제 선택 부분</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/JAVASCRIPT.png" />
              <Card.Body>
                <Card.Title className='title'>자바스크립트 프로젝트 모집</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.ㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                </Card.Text>
              </Card.Body>
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">작성자</Card.Link>
                <Card.Link className='link' href="#">주제 선택 부분</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/Java.jpg" />
              <Card.Body>
                <Card.Title className='title'>자바 스터디 모집</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">작성자</Card.Link>
                <Card.Link className='link' href="#">주제 선택 부분</Card.Link>
              </Card.Body>
            </Card>
          </div>
<br /><br /><br /><br />
          <div id='firstLine' className='boardFirstLine'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/react_logo.png" />
              <Card.Body >
                <Card.Title className='title'>리액트 스터디 모집</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">작성자</Card.Link>
                <Card.Link className='link' href="#">주제 선택 부분</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/JAVASCRIPT.png" />
              <Card.Body>
                <Card.Title className='title'>자바스크립트 프로젝트 모집</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.ㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                </Card.Text>
              </Card.Body>
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">작성자</Card.Link>
                <Card.Link className='link' href="#">주제 선택 부분</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/Java.jpg" />
              <Card.Body>
                <Card.Title className='title'>자바 스터디 모집</Card.Title>
                <Card.Text className='cardText'>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">작성자</Card.Link>
                <Card.Link className='link' href="#">주제 선택 부분</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <br /><br /><br />
          <div id='button' >
            <ButtonToolbar className='buttonPosition' >
              <ButtonGroup className="me-2">
                <Button>&lt;</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button>1</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button>2</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button>3</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button>4</Button> 
              </ButtonGroup>
              <ButtonGroup >
                <Button>&gt;</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
<br /><br />
        </div>
    );
};

export default groupBorad;