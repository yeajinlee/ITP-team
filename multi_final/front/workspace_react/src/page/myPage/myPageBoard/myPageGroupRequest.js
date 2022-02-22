import React from 'react';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myPageGroupRequest.scss";
import { Table } from 'react-bootstrap';
import groupBoradData from './jsonFile/GroupRequest.json';

const myPageGroupRequest = () => {
    return (
        <div className='myList'>
            <Sidebar />
            <div class="card">
                <div className='board'>
                    <button> 전체 </button>ㅣ
                    <button> 참여확정 </button>ㅣ
                    <button> 지원 검토중 </button>
                    <Table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>카테고리</th>
                                <th>지원일</th>
                                <th>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupBoradData.groupRequest.map((n,index) => (
                            <tr key={index}>
                                <td>{n.no}</td>
                                <td>
                                    <Link to={'/Request/'+n.no} style={{ textDecoration: 'none' }}>
                                        {n.title}
                                    </Link>
                                </td>
                                <td>프로젝트</td>
                                <td>
                                    {n.date}
                                </td>
                                <td>참여확정</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default myPageGroupRequest;