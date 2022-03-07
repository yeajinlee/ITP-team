import React,{useState,useEffect} from 'react';
import { Card, Button} from 'react-bootstrap';
import './groupBoard.scss'
//import groupBoard from './GroupBoradData.json'
import axios from 'axios'
import { Link } from 'react-router-dom';



const GroupBorad = () => {
  const page=1;
  const[Groupdatas,setGroupdata]=useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[title,settitle]=useState('');
  const[search,setsearch]=useState('');

  const[currentpage,setcurrentpage]=useState(1);
  const itemsPerPage=6;
  const pageNumberLimit=5;
  const[maxpageNumberLimit,setmaxpageNumberLimit]=useState(5);
  const[minpageNumberLimit,setminpageNumberLimit]=useState(0);

 
const handlesearch=()=>{
  setsearch(title);
 
 
}

const handleClickpage=(e)=>{
  setcurrentpage(Number(e.target.id))
}



console.log(Groupdatas.length);

  const pagenums=[];
  for(let i=1;i<=Math.ceil((Groupdatas.length)/itemsPerPage);i++){
    pagenums.push(i);
  }
  console.log(pagenums);

  const indexOfLastItem=currentpage*itemsPerPage; //마지막 갯수
  const indexOfFirstItem=indexOfLastItem-itemsPerPage;
  const currentItems=Groupdatas.slice(indexOfFirstItem,indexOfLastItem);

  console.log(currentItems);

  const renderPagenum=pagenums.map((number)=>{
    if(number<maxpageNumberLimit+1&&number>minpageNumberLimit){
    return(
      
      <li 
      key={number} 
      id={number} 
      onClick={handleClickpage}
      className={currentpage===number?"active":null}>
      {number}
      </li>
      
    );
    }else{
      return null;
    }
  });


  useEffect(()=>{
    const fetchGroup=async()=>{
      try {
     
          setError(null);
          
          // loading 상태를 true
          setLoading(true); 
          
          const response=await axios.get(`http://localhost:8085/group/listAll`,null);
          setGroupdata(response.data);
          
        }catch(e){
          setError(e);
      }
      setLoading(false);
    
  
};
fetchGroup();

 },[page]);

  const handlenextbtn=()=>{
    setcurrentpage(currentpage+1);
    
    if(currentpage+1>maxpageNumberLimit){
      setmaxpageNumberLimit(maxpageNumberLimit+pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit+pageNumberLimit);
    }
  }

  const handleprevbtn=()=>{
    setcurrentpage(currentpage-1);
    
    if((currentpage-1)%pageNumberLimit===0){
      setmaxpageNumberLimit(maxpageNumberLimit-pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit-pageNumberLimit);
    }
  }

  let pageIncrementBtn=null;
  if(pagenums.length>maxpageNumberLimit){
    pageIncrementBtn=<li onClick={handlenextbtn}>&hellip;</li>
  }

  let pageDecrementBtn=null;
  if(pagenums.length>maxpageNumberLimit){
    pageDecrementBtn=<li onClick={handleprevbtn}>&hellip;</li>
  }


 if (loading) return <div>로딩중..</div>;
 if (error) return <div>에러가 발생했습니다</div>;
if (!Groupdatas) return null;
    return (
        <div id='GroupBoardMain'>
          <div>
          <Link to='/groupWriting' >
            <Button  className='writingButton'>글쓰기</Button>
          </Link>
          </div>
          <div className='boardFirstLine'>
            {currentItems.filter((Groupdatas)=>{
              if(search===""){
                return Groupdatas
              }else if(Groupdatas.g_title.includes(search)){
                return Groupdatas
              }
            }).map((currentItems) =>
            <Card id='groupCard' className='groupCardCss' style={{ width: '18rem' }}>
              <Card.Body key={currentItems.g_no}>
                <Link to={"/communityGroup/"+ currentItems.g_no} style={{ textDecoration: 'none' }}>
                  <Card.Img variant='top' src={currentItems.g_img} />
                  <Card.Title className='title'>{currentItems.g_title}</Card.Title>
                  <Card.Text className='cardText'> {currentItems.g_subtitle}</Card.Text>
                </Link>
                <Card.Body className='bodyLink'>
                  <Card.Link className='link'>{currentItems.g_name}</Card.Link>
                  <Card.Link className='link'>{currentItems.g_tag}</Card.Link>
                </Card.Body>
              </Card.Body>
            </Card>
            )}
          </div>
          <div id='groupSearch'>
            <input 
              type="text"
              onChange={(e)=>settitle(e.target.value)} 
              className="searchInput"
              value={title}
            />
            <button className='searchButton' type="button" onClick={handlesearch} >검색</button>
          </div>
          <div>
            <ul id='pageButton'>
              <li>
                <button onClick={handleprevbtn}
                disabled={currentpage===pagenums[0]?true:false}>
                  &lt;
                </button>
              </li>
              {pageIncrementBtn}
              {renderPagenum}
              {pageDecrementBtn}
              <li>
                <button onClick={handlenextbtn}
                disabled={currentpage===pagenums[pagenums.length-1]?true:false}>
                  &gt;
                </button>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default GroupBorad;
