import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myPageComment.scss";
import { Table, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';

const MyPageCommunityComment = () => {
    const { m_name } = useParams();
    const[Repdatas,setRepdata]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
  useEffect(()=>{
    const fetchCom=async()=>{
      try {
     
          setError(null);
          
          // loading 상태를 true
          setLoading(true); 
          
          const response=await axios.get(`http://localhost:8085/mypage/rep?m_name=${m_name}`,null,{
            params:{
                'm_name':m_name,
              }
          });
          setRepdata(response.data);
          
        }catch(e){
          setError(e);
      }
      setLoading(false);
    
  
};
fetchCom();

 },[]);
 if (loading) return <div>로딩중..</div>;
 if (error) return <div>에러가 발생했습니다</div>;
if (!Repdatas) return null;

    return (
        <div id='board'>
            <Sidebar /> 
            <div className='boardList'>
            <Tabs>
                <Tab eventKey="group" title="소통공간">
                    <Table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>작성 글 번호</th>
                                <th>작성 댓글</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Repdatas.map((Repdata) => (
                            <tr key={Repdata.r_rno}>
                                <td>{Repdata.r_rno}</td>
                                <td>
                                    <Link to={'/Communication/'+Repdata.r_no} style={{ textDecoration: 'none' }}>
                                        {Repdata.r_no}
                                    </Link>
                                </td>
                                <td>
                                    {Repdata.r_content}
                                </td>
                                <td>
                                    {Repdata.r_date}
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

export default MyPageCommunityComment;