import React from 'react';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myPageBoard.scss";
import { Table } from 'react-bootstrap';
import groupCommentData from './jsonFile/GroupBoradComment.json';

const myPageGroupComment = () => {
    return (
        <div className='myList'>
            <Sidebar />
            <div class="card">
                <div className='board'>
                    <Link to="/myPageCommunityComment" class="link-dark" style={{ textDecoration: 'none' }}>소통공간 </Link>ㅣ
                    <Link to="/myPageGroupComment" class="link-dark" style={{ textDecoration: 'none' }}> 모임찾기 </Link>
                    <Table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>댓글내용</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupCommentData.group.map((n,index) => (
                            <tr key={index}>
                                <td>{n.no}</td>
                                <td>
                                    <Link to={'/Group/'+n.no} style={{ textDecoration: 'none' }}>
                                        {n.title}
                                    </Link>
                                </td>
                                <td>포트폴리오가 필요한가요?</td>
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
};

export default myPageGroupComment;