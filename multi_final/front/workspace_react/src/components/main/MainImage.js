import React from 'react';
import { Card, CardGroup, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainImage.scss';

const Mainimage = () => {
    return (
        <div>
          <br />
            <p class='itT'>IT 기술 최신 동향</p>
            {/* IT 기술 */}
            <CardGroup>
  <Card>
    <Card.Img src='./assets/react_logo.png' />
    <Card.Body>
      <Card.Title>[React] The Plan for React 18</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src='./assets/JAVASCRIPT.png' />
    <Card.Body>
      <Card.Title>[JavaScript] 2022 기술 동향</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src='./assets/Java.jpg' />
    <Card.Body>
      <Card.Title>[Java] 2022 기술 동향</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>

{/* 소통공간 */}
<br />
<br />

<p class='community'>모임찾기</p>
<CardGroup>
  <Card>
    <Card.Img variant="top" src='./assets/react_logo.png' />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src='./assets/react_logo.png' />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src='./assets/react_logo.png' />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

{/* 최신글 */}
<p className='recentPost'>최신 글</p>
<ListGroup as="ol" numbered>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
</ListGroup>
        </div>
    );
};

export default Mainimage;


