import React from 'react';
import './css/MainImage.scss';
import { Card, Table, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import communityBoradData from './jsonFile/CommunityBoradData.json';
import noticeData from './jsonFile/GroupBoradData.json';
import { Link } from 'react-router-dom';

const Mainimage = () => {
    return (

      
        <div>
          <br />
          <p class='itT'>IT 기술 최신 동향</p>
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
          {/* -----------------------------------------게시글 --------------------------------*/}
          <br />
          <div id='communityRecent'>
            <Tabs defaultActiveKey="communicationBorad"  className="mb-3">
              <Tab eventKey="communicationBorad" title="소통공간">
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
              </Tab>
              <Tab eventKey="groupBorad" title="모임찾기">
                <Table>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {noticeData.group.map((n,index) => (
                      <tr key={index}>
                        <td>{n.no}</td>
                        <td>
                          <Link to={'/Group/'+n.no} style={{ textDecoration: 'none' }}>
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
              </Tab>
            </Tabs>
          </div>
          <div className='testTable'>
          <Table>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {noticeData.group.map((n,index) => (
                      <tr key={index}>
                        <td>{n.no}</td>
                        <td>
                          <Link to={'/Group/'+n.no} style={{ textDecoration: 'none' }}>
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
                <Table>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {noticeData.group.map((n,index) => (
                      <tr key={index}>
                        <td>{n.no}</td>
                        <td>
                          <Link to={'/Group/'+n.no} style={{ textDecoration: 'none' }}>
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


