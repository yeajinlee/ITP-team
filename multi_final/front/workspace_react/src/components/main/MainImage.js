import React from 'react';
import './css/MainImage.scss';
import { Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Mainimage = () => {
    return (

      
        <div>
          <br />
          <p class='itT'>IT 기술 최신 동향</p>
          <br />
          <div id='itTrend'>
            {/* IT 기술 */}
            <div className='first'>
              <Card>
                <Card.Img src='./assets/react_logo.png' />
                <Card.Body>
                  <Card.Title>[React] The Plan for React 18</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className='second'>
              <Card>
                <Card.Img variant="top" src='./assets/JAVASCRIPT.png' />
                <Card.Body>
                  <Card.Title>[JavaScript] 2022 기술 동향</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className='third'>
              <Card>
                <Card.Img variant="top" src='./assets/Java.jpg' />
                <Card.Body>
                  <Card.Title>[Java] 2022 기술 동향</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>

{/* 소통공간 */}
<br />
<br />
<div id='communityRecent'>
<div className='finding'>
<p className='community'>모임찾기</p>
<ListGroup as="ol" numbered>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
</ListGroup>
</div>
<br />
{/* 최신글 */}
<div className='recent'>
<p className='recentPost'>최신 글</p>
<ListGroup as="ol" numbered>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
</ListGroup>
</div>
</div>

        </div>
    );
};

export default Mainimage;


