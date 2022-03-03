import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';


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


