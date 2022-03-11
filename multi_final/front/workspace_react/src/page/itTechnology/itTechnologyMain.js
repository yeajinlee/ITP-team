import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItTechnologyReact from './ItTechnologyReact';
import ItTechnologySpring from './ItTechnologySpring';


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
        
            <div id='itTechMain'>
            <p className='itTechPageTitle'>IT 기술</p>
            <div>
                <ul className="skill_list">
                    {/* {techs.map((tech)=>(
                        <li key={tech.no}>
                            <Link to={"/itTech/" + tech.no} className="itTechLink">
                                <span className='itTechSpan'>
                                    <img width="200px" height="200px" src={tech.img} alt="img"/>
                                    <div>
                                        <p className='boardTitle'>{tech.title}</p>
                                        <p className='boardContent'>{tech.subtitle}</p>
                                    </div>
                                </span>
                            </Link>
                        </li>
                    ))} */}
                    <ItTechnologyReact/>
                    <ItTechnologySpring/>
                </ul>
                </div>
            </div>


    )}
     
           
     


export default ItTechnologyMain;


