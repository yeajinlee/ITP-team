import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table} from 'react-bootstrap';
import axios from 'axios';
import './GroupApplylist.scss'

function GroupApplylist(props) {
    const { m_name } = useParams();

    const[Groupapplydatas,setGroupapplydata]=useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authstatus,setauthstatus]=useState();


  useEffect(()=>{
    const fetchGroup=async()=>{
      try {
     
          setError(null);
          
          // loading 상태를 true
          setLoading(true); 
          
          const response=await axios.get(`http://localhost:8085/mypage/applylist?m_name=${m_name}`,null,{
            params:{
            
                'm_name':m_name,
              }
          });
          setGroupapplydata(response.data);
         console.log(response.data);
          
          
        }catch(e){
          setError(e);
      }
      setLoading(false);
    
  
};
fetchGroup();

 },[m_name]);

 console.log(m_name);
 
 
 if (loading) return <div>로딩중..</div>;
 if (error) return <div>에러가 발생했습니다</div>;
if (!Groupapplydatas) return null;
    return (
        <div id='myPageMain'>
            <Sidebar /> 
            <div id='board'>
                    <div className="checktitle">{m_name}의 모임찾기 신청현황</div>
                    <Table className='myPageTable'>
                        <thead>
                            <tr>
                                <th id="g_title">글제목</th>
                                <th id="a_content">신청내용</th>
                                <th>승인여부</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {Groupapplydatas.map((Groupapplydata) => (
                            <tr key={Groupapplydata.a_gno}>
                                <td id="a_name1">
                                <Link to={'/communityGroup/'+Groupapplydata.a_gno} style={{ textDecoration: 'none',color: 'black'}}>
                                    {Groupapplydata.g_title}</Link></td>
                             
                                <td id="a_content1">
                                    {Groupapplydata.a_content}
                                </td>
                               <td>
                             {Groupapplydata.a_auth}
                               </td>
                            
                            </tr>
                            ))}
                        </tbody>
                    </Table>
              
                
           
            </div>
        </div>
    );
}

export default GroupApplylist;
