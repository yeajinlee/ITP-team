import React, { useEffect, useState } from 'react';
import './css/MainImage.scss';
import { Card, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import groupBoard from '../../page/communityGroup/GroupBoradData.json';
import axios from 'axios';

const Mainimage = () => {

    const[Groupdatas,setGroupdata]=useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const[Comdatas,setComdata]=useState([]);

    useEffect(()=>{
      const fetchGroupmain=async()=>{
        try {
       
            setError(null);
            
            // loading 상태를 true
            setLoading(true); 
            
            const response=await axios.get(`http://localhost:8085/group/recent`,null);
            setGroupdata(response.data);
            
          }catch(e){
            setError(e);
        }
        setLoading(false);
      
    
  };
  fetchGroupmain();
  
   },[]);

   useEffect(()=>{
    const fetchCommain=async()=>{
      try {
     
          setError(null);
          
          // loading 상태를 true
          setLoading(true); 
          
          const response=await axios.get(`http://localhost:8085/com/recent`,null);
          setComdata(response.data);
          
        }catch(e){
          setError(e);
      }
      setLoading(false);
    
  
};
fetchCommain();

 },[]);
   if (loading) return <div>로딩중..</div>;
   if (error) return <div>에러가 발생했습니다</div>;
  if (!Groupdatas) return null;
  if (!Comdatas) return null;
    return (

      
        <div id='imageMain'>
          <p class='itT'>IT 기술 최신 동향</p>
          <div id='itTrend'>
            {/* IT 기술 */}
            <div className='first'>
              <Card>
                <Card.Img src='./assets/reactLogo.png' />
                <Card.Body>
                  <Card.Title>[React] The Plan for React 18</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className='second'>
              <Card>
                <Card.Img variant="top" src='./assets/JavascriptLogo.png' />
                <Card.Body>
                  <Card.Title>[JavaScript] 2022 기술 동향</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className='third'>
              <Card>
                <Card.Img variant="top" src='./assets/JavaLogo.jpg' />
                <Card.Body>
                  <Card.Title>[Java] 2022 기술 동향</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* -----------------------------------------게시글 --------------------------------*/}
          <br />
          <p style={{ 
            fontSize: '25px',
            textAlign: 'center'
            }}>
              모임찾기
              </p>

             <div id='groupLine' className='groupBoardLine'>
          
                 {Groupdatas.map((Groupdata) =>
            <Card style={{ width: '18rem' }}>
         <Link to={"/communityGroup/"+ Groupdata.g_no} style={{ textDecoration: 'none' }}>
              <Card.Body key={Groupdata.g_no}>
                <Card.Img variant='top' src={Groupdata.g_img} />
                <Card.Title className='title'>{Groupdata.g_title}</Card.Title>
                <Card.Text className='cardText'>{Groupdata.g_subtitle}</Card.Text>
                <br />
                <Card.Body className='bodyLink'>
                  <Card.Link className='link' href="#">{Groupdata.g_name}</Card.Link>
                  <Card.Link className='link' href="#">{Groupdata.g_tag}</Card.Link>
                </Card.Body>
              </Card.Body>
         </Link>
            </Card>
               )}
          </div>
          <p className='communityHome'>소통 공간</p>
          <div id='mainBoard' >
            
          <Table className='boardTable'>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Comdatas.map((Comdata) => (
                            <tr key={Comdata.c_no}>
                              <td>{Comdata.c_no}</td>
                              <td>
                                <Link to={'/Communication/'+Comdata.c_no} style={{ textDecoration: 'none' }}>
                                  {Comdata.c_title}
                                  </Link>
                              </td>
                                <td>
                                    {Comdata.c_name}
                                </td>
                              <td>
                                {Comdata.c_date}
                              </td>
                            </tr>
                            ))}
                  </tbody>
                </Table>
                </div>
        </div>
    );
};

export default Mainimage;


