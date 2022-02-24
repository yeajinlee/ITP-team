import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/itTechnologyMain.scss'
import { Link } from 'react-router-dom';
//import dummy from './data.json'; 
import axios from 'axios';


// import { Button } from 'react-bootstrap'; 

// const skilldata=[
//     {
//         no:1,
//         title:"The plan for React",
//         subtitle:"react subtitle",
//         img:"https://t1.daumcdn.net/cfile/tistory/24457C4F58663DD011"
    
//     },
//     {
//         no:2,
//         title:"The plan for JavaScript",
//         subtitle:"react subtitle",
//         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
    
//     }

// ];

// function Skill(props){
    
//     return(
//         <div>
//         <img width="100px" height="100px"  alt="First slide"  src={props.img}/>
//         <span>   {props.no}
//         {props.title} {props.subtitle}</span>
        
//         </div>
//     );
// }



const ItTechnologyMain=()=>{
    const[techs,setTech]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchTech=async()=>{
            try {
                //error 와 tech 를 초기화
                setError(null);
                setTech(null);
                // loading 상태를 true
                setLoading(true);    
                const response=await axios.get('http://localhost:8085/itTech');
                setTech(response.data);
            }catch(e){
                setError(e);
            }
            setLoading(false);
          
        
    };
    fetchTech();
    
},[]);
if (loading) return <div>로딩중..</div>;
if (error) return <div>에러가 발생했습니다</div>;
if (!techs) return null;
    return (
            
            // <div className="div">
            // <h2>it기술</h2>
           <ul className="skill_list">
            {techs.map((tech)=>(
                <li key={tech.no}>
              <Link to={"/itTech/" + tech.no}>
                  <span>
            <img width="100px" height="100px" src={tech.img} alt="img"/>
            {tech.title} {tech.subtitle}
            </span>
     
        
       </Link>
                </li>
            ))}
            </ul>
          
            //  </div>


    )}
     
           
     


export default ItTechnologyMain;


