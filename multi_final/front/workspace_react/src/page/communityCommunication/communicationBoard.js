import React from 'react';
import { Table, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import communityBoradData from '../../components/main/jsonFile/CommunityBoradData.json';
import '../communityCommunication/communicationBoard.scss';
const communicationMain = () => {
    return (
        <div>
            <div id='mainBoard' className='communicationBoard'>
            <Link to='/communicationWriting'><Button className='cWritingButton'>글쓰기</Button></Link>
                <br />
                <p>소통 공간</p>
                <Table>
                    <thead>
                        <tr>
                          <th>번호</th>
                          <th>제목</th>
                          <th>작성자</th>
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
                                    {n.writer}
                                </td>
                                <td>
                                    {n.date}
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
          <div id='communicationButton' >
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
        </div>
    );
};

export default communicationMain;