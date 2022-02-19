import React from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notice from './Notice';

const contents = [
    {
        'no': 1,
        'title': '공지 1 제목',
        'content': '공지 1 내용',
        'date': '2022.02.17-1' 
    }
]

// const noticeDetail = () => {
//     return(
//         <div>
//             <h3>공지사항</h3>
//             {noticeContents.map((n) => {
//                 return (
//                   <Table>
//                     <tbody>
//                       <tr>
//                         <th>제목</th> <td>{n.title}</td>
//                       </tr>
//                       <tr>
//                         <th>작성자</th> <td>관리자</td>
//                       </tr>
//                       <tr>
//                         <th>작성일</th> <td>{n.date}</td>
//                       </tr>
//                       <tr>
//                         <td colSpan={2}>{n.content}</td>
//                       </tr>
//                     </tbody>
//                   </Table>
//                 );
//             })}
//         </div>
//     );
// };

const DetailTitle = () => {
    return (
        <div>{this.props.title}</div>
    );
}
const DetailDate = () => {
    return (
        <div>{this.props.date}</div>
    );
}
const DetailContent = () => {
    return(
        <div>{this.props.content}</div>
    );
}
const noticeDetail = () => {
    return (
        <section>
            <DetailTitle title={contents.title}/>
            <DetailDate date={contents.date}/>
            <DetailContent content={contents.content}/>
        </section>
    );
}

export default noticeDetail;