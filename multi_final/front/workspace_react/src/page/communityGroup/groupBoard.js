import React,{useState,useEffect} from 'react';
import { Card, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
/* import { Link } from 'react-router-dom'; */
import './groupBorad.scss'
//import groupBoard from './GroupBoradData.json'
import axios from 'axios'
import { Link } from 'react-router-dom';



const GroupBorad = () => {
  const[page,setpage]=useState('1');
  const[Groupdatas,setGroupdata]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[title,settitle]=useState('');
  const[search,setsearch]=useState('');

 const handleClick=(e)=>{
   setpage(e.target.id);
 
};
const handlesearch=()=>{
  setsearch(title);
 
}

// const Searchgetgroup=useCallback(()=>{
//   Axios.get(`http://localhost:8085/group/list/searchbytitle?page=${page}?g_title=${search}`).then((res)=>{
//     setGroupdata(res.data);
//   });
// },[page])

 // const [currentpage,setCurrentPage]=useState(1);
  // const [itemsPerPage,setItemsPerPage]=useState(4);

 

  // const pages=[];
  // for(let i=1;i<Math.ceil(Groupdatas.length/3);i++){
  //   pages.push(i);
  // }
  
  // // const indexOfLastItem=currentpage*itemsPerPage;
  // // const indexOfFirstItem=indexOfLastItem-itemsPerPage;
  // // const currentItems=Groupdatas.slice(indexOfFirstItem,indexOfLastItem);


  // const PaginateNumbers=pages.map((pagenum)=>{
  //   return(
  //     <li key={pagenum} id={pagenum} onClick={handleClick}>
  //       {pagenum}
  //       </li>
  //   );
  // })

  useEffect(()=>{
    const fetchGroup=async()=>{
      try {
          //error 와 tech 를 초기화
          setError(null);
          
          // loading 상태를 true
          setLoading(true); 
          
          const response=await axios.get(`http://localhost:8085/group/list/?page=${page}`,null);
          setGroupdata(response.data);
          
        }catch(e){
          setError(e);
      }
      setLoading(false);
    
  
};
fetchGroup();

 },[page]);

   


 if (loading) return <div>로딩중..</div>;
 if (error) return <div>에러가 발생했습니다</div>;
if (!Groupdatas) return null;
    return (
        <div>
          <br />
          
          <div id='firstLine' className='boardFirstLine'>
          {Groupdatas.filter((val)=>{
            if(search===""){
              return val
            }else if(val.g_title.includes(search)){
              return val
            }
          }).map((Groupdata) =>
            <Card style={{ width: '18rem' }} >
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
             </Card>
           )}
            <Link to='/groupWriting'><Button className='writingButton'>글쓰기</Button></Link>
          <br /><br /><br /><br />
          </div>
          <br /><br /><br />
          <>
 
         
    <input 
      type="text"
      onChange={(e)=>settitle(e.target.value)} 
      id="title"
      value={title}
      //aria-describedby="basic-addon1"
    />
  
  <button type="button" onClick={handlesearch}>검색</button>
  </>
          <div id='button' >
              <ButtonToolbar className='buttonPosition' >
              <ButtonGroup className="me-2">
                <Button>&lt;</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button id="1" onClick={handleClick}>1</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button value="2" id="2" onClick={handleClick}>2</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button id="3" onClick={handleClick}>3</Button> 
              </ButtonGroup>
              <ButtonGroup className="me-2">
                <Button id="4" onClick={handleClick}>4</Button> 
              </ButtonGroup>
              <ButtonGroup >
                <Button>&gt;</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
<br /><br />
        </div>
    );
};

export default GroupBorad;
