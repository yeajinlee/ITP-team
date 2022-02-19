import React from 'react';
import {ListGroup, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const noticeContents = [
    {
        'no': 1,
        'title': '공지 1 제목',
        'content': '공지 1 내용',
        'date': '2022.02.17-1' 
    },
    {
        'no': 2,
        'title': '공지 2 제목',
        'content': '공지 2 내용',
        'date': '2022.02.17-2' 
    },
    {
        'no': 3,
        'title': '공지 3 제목',
        'content': '공지 3 내용',
        'date': '2022.02.17-3' 
    }
    ,
    {
        'no': 4,
        'title': '공지 4 제목',
        'content': '공지 4 내용',
        'date': '2022.02.17-4' 
    }
]

const noticeList = () => {
  return
}

const notice = () => {
  return (
    <div>
      <h3>공지사항</h3>
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
          {noticeContents.map((n,index) => (
              <tr key={index}>
                <td>{n.no}</td>
                <td>
                  <Link to={'/noticeDetail'} style={{ textDecoration: 'none' }}>
                    {n.title}
                  </Link>
                </td>
                <td>관리자</td>
                <td>
                  {n.date}
                </td>
              </tr>
        
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default notice;