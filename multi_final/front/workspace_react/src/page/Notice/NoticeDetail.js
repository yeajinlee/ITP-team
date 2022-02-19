import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import noticeData from './NoticeData.json'
import { useNavigate, useParams } from 'react-router-dom';



const NoticeDetail = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const BackToNotice = () => {
    navigate('/notice');
  };
  return (
    <div>
      <h3>공지사항</h3>
      <Table>
        <tbody>
          <tr>
            <th>제목</th> <td>{noticeData.notice[no - 1].title}</td>
          </tr>
          <tr>
            <th>작성자</th> <td>관리자</td>
          </tr>
          <tr>
            <th>작성일</th> <td>{noticeData.notice[no - 1].date}</td>
          </tr>
          <tr>
            <td colSpan={2}>{noticeData.notice[no - 1].content}</td>
          </tr>
        </tbody>
      </Table>
      <input type="button" value="목록으로" onClick={BackToNotice} />
    </div>
  );
};



export default NoticeDetail;