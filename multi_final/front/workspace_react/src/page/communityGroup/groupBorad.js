import React from 'react';
import { Card, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
/* import { Link } from 'react-router-dom'; */
import './groupBorad.scss'
import groupBoard from './GroupBoradData.json'


// 3개가 최대가 되게 하려면 어떻게 해야하지?

const groupBorad = () => {
    return (
        <div>
          <br />
          <div id='firstLine' className='boardFirstLine'>
            <Card style={{ width: '18rem' }}>
              {groupBoard.group.map((n,index) =>
              <Card.Body>
                <Card.Img variant='top' src={n.img} />
                <Card.Title className='title'>{n.title}</Card.Title>
                <Card.Text className='cardText'>{n.content}</Card.Text>
                <br />
                <Card.Body className='bodyLink'>
                  <Card.Link className='link' href="#">{n.writer}</Card.Link>
                  <Card.Link className='link' href="#">{n.topic}</Card.Link>
                </Card.Body>
              </Card.Body>
            )}
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