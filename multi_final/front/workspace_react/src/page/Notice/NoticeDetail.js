import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import noticeData from './NoticeData.json'
import { useNavigate, useParams } from 'react-router-dom';

// const contents = [
//     {
//         'no': 1,
//         'title': '공지 1 제목',
//         'content': '공지 1 내용',
//         'date': '2022.02.17-1' 
//     }
// ]

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

// const DetailTitle = () => {
//     return (
//         <div>{this.props.title}</div>
//     );
// }
// const DetailDate = () => {
//     return (
//         <div>{this.props.date}</div>
//     );
// }
// const DetailContent = () => {
//     return(
//         <div>{this.props.content}</div>
//     );
// }
// const noticeDetail = () => {
//     return (
//         <section>
//             <DetailTitle title={noticeData.title}/>
//             <DetailDate date={noticeData.date}/>
//             <DetailContent content={noticeData.content}/>
//         </section>
//     );
// }

export default NoticeDetail;