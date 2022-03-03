import React,{useState,useEffect} from 'react';
import { Card, Button} from 'react-bootstrap';
/* import { Link } from 'react-router-dom'; */
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

// const Searchgetgroup=useCallback(()=>{
//   Axios.get(`http://localhost:8085/group/list/searchbytitle?page=${page}?g_title=${search}`).then((res)=>{
//     setGroupdata(res.data);
//   });
// },[page])


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
        <div>
          <br />
          
          <div id='firstLine' className='boardFirstLine'>
            
         { currentItems.filter((Groupdatas)=>{
          if(search===""){
         return Groupdatas
         }else if(Groupdatas.g_title.includes(search)){
         return Groupdatas
         }
         }).map((currentItems) =>
          <Card style={{ width: '18rem' }} >
            <Link to={"/communityGroup/"+ currentItems.g_no} style={{ textDecoration: 'none' }}>
             <Card.Body key={currentItems.g_no}>
              <Card.Img variant='top' src={currentItems.g_img} />
              <Card.Title className='title'>{currentItems.g_title}</Card.Title>
              <Card.Text className='cardText'> {currentItems.g_subtitle}</Card.Text>
              <br />
              <Card.Body className='bodyLink'>
                <Card.Link className='link' href="#">{currentItems.g_name}</Card.Link>
                <Card.Link className='link' href="#">{currentItems.g_tag}</Card.Link>
              </Card.Body>
            </Card.Body>
            </Link>
           </Card>
         )}
        
          
      
          <br /><br /><br /><br />
          </div>
          <br /><br /><br />
          <ul className='pagenumbers'>
            <li>
              <button onClick={handleprevbtn}
              disabled={currentpage===pagenums[0]?true:false}>
                Prev
              </button>
            </li>
            {pageIncrementBtn}
            {renderPagenum}
            {pageDecrementBtn}
            <li>
              <button onClick={handlenextbtn}
              disabled={currentpage===pagenums[pagenums.length-1]?true:false}>
                Next
              </button>
            </li>
            </ul>
          <>
 
         
    <input 
      type="text"
      onChange={(e)=>settitle(e.target.value)} 
      id="title"
      value={title}
      //aria-describedby="basic-addon1"
    />
  
  <button type="button" onClick={handlesearch}>검색</button>
  <Link to='/groupWriting'><Button className='writingButton'>글쓰기</Button></Link>
  </>
     
<br /><br />
        </div>
    );
};

export default GroupBorad;
