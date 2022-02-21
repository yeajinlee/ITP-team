import React from 'react';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myPageComment.scss";
import { Table } from 'react-bootstrap';
import communityCommentData from './jsonFile/CommunityComment.json'

const myPageCommunityComment = () => {
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
                                <th>댓글 내용</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {communityCommentData.community.map((n,index) => (
                            <tr key={index}>
                                <td>{n.no}</td>
                                <td>
                                    <Link to={'/Community/'+n.no} style={{ textDecoration: 'none' }}>
                                        {n.title}
                                    </Link>
                                </td>
                                <td>무료 강의 괜찮습니다.</td>
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

export default myPageCommunityComment;