import React from 'react';
import './css/MainImage.scss';
import { Card, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import communityBoradData from './jsonFile/CommunityBoradData.json';
import { Link } from 'react-router-dom';
import groupBoard from '../../page/communityGroup/GroupBoradData.json';

const Mainimage = () => {
    return (

      
        <div>
          <br />
          <p class='itT'>IT 기술 최신 동향</p>
          <div id='itTrend'>
            {/* IT 기술 */}
            <div className='first'>
              <Card>
                <Card.Img src='./assets/reactLogo.png' />
                <Card.Body>
                  <Card.Title>[React] The Plan for React 18</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className='second'>
              <Card>
                <Card.Img variant="top" src='./assets/JavascriptLogo.png' />
                <Card.Body>
                  <Card.Title>[JavaScript] 2022 기술 동향</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className='third'>
              <Card>
                <Card.Img variant="top" src='./assets/JavaLogo.jpg' />
                <Card.Body>
                  <Card.Title>[Java] 2022 기술 동향</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* -----------------------------------------게시글 --------------------------------*/}
          <br />
          <p style={{ 
            fontSize: '25px',
            textAlign: 'center'
            }}>
              모임찾기
              </p>
          <div id='groupLine' className='groupBoardLine'>
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

          <div id='mainBoard' className='boardTable'>
            <br />
            <p>소통 공간</p>
          <Table>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {communityBoradData.community.map((n,index) => (
                            <tr key={index}>
                              <td>{n.no}</td>
                              <td>
                                <Link to={'/Community/'+n.no} style={{ textDecoration: 'none' }}>
                                  {n.title}
                                  </Link>
                              </td>
                              <td>
                                {n.date}
                              </td>
                            </tr>
                            ))}
                  </tbody>
                </Table>
                </div>
        </div>
    );
};

export default Mainimage;


