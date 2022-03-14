import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itTechnologyMain.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItTechnologyReact from './ItTechnologyReact';
import ItTechnologySpring from './ItTechnologySpring';
import ItTechnologyVue from './ItTechnologyVue';


const ItTechnologyMain=()=>{
    return (
        
            <div id='itTechMain'>
            <p className='itTechPageTitle'>IT 기술</p>
            <div>
                <div className="skill_list">
                    <ItTechnologyReact/>
                    <hr/>
                    <ItTechnologySpring/>
                    <hr/>
                    <ItTechnologyVue/>
                </div>
                </div>
            </div>


    )}
     
           
     


export default ItTechnologyMain;


