import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import dummy from './data.json'; 
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



const itTechnologyMain = () => {
   
    return (
      
            <div className="div">
            <h2>it기술</h2>
           <ul className="skill_list">
            {dummy.skills.map((skill)=>(
                <li key={skill.no}>
              <Link to={"/itTech/" + skill.no}>
                  <span>
            <img width="100px" height="100px" src={skill.img} alt="img"/>
            {skill.title} {skill.subtitle}
            </span>
     
        
       </Link>
                </li>
            ))}
            </ul>
          
             </div>


    )}
     
           
     


export default itTechnologyMain;


