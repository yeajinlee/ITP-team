import React from 'react';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myPageBoard.scss";
import { Table } from 'react-bootstrap';
import noticeData from './jsonFile/GroupBoradData.json';

function myPageGroupBoard(props) {
    return (
        <div className='myList'>
            <Sidebar />
            <div class="card">
                <div className='board'>
                    <Link to="/myPageCommunityBoard" class="link-dark" style={{ textDecoration: 'none' }}>소통공간 </Link>ㅣ
                    <Link to="/myPageGroupBoard" class="link-dark" style={{ textDecoration: 'none' }}> 모임찾기 </Link>
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
        </div>
    );
}

export default myPageGroupBoard;
