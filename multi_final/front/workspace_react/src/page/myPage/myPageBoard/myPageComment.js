import React from 'react';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Tab, Tabs } from 'react-bootstrap';
import communityCommentData from './jsonFile/CommunityComment.json'
import groupData from './jsonFile/GroupBoradComment.json';

const myPageCommunityComment = () => {
    return (
        <div id='myPageMain'>
            <Sidebar /> 
            <div id='board'>
            <Tabs>
                <Tab eventKey="group" title="모임찾기">
                    <Table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성 댓글</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupData.group.map((n,index) => (
                            <tr key={index}>
                                <td>{n.no}</td>
                                <td>
                                    <Link to={'/Group/'+n.no}  className='myPageLink'>
                                        {n.title}
                                    </Link>
                                </td>
                                <td>
                                    {n.content}
                                </td>
                                <td>
                                    {n.date}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="communication" title="소통공간">
                    <Table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성 댓글</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {communityCommentData.community.map((n,index) => (
                            <tr key={index}>
                                <td>{n.no}</td>
                                <td>
                                    <Link to={'/Community/'+n.no} className='myPageLink'>
                                        {n.title}
                                    </Link>
                                </td>
                                <td>
                                    {n.content}
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
        </div>
    );
};

export default myPageCommunityComment;