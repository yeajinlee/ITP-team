import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/MainBottomNavber.scss';


const MainNevber = () => {

    return (
        <div className='bottomNavber'>
            <nav >
                <div >
                    <div id='bottomExpand'>
                        <div id='bottomContainer'>
                        <p>
                          <p id='link1'> 
                            <Link to='/Notice' class="nav-link active link-light" style={{ textDecoration: 'none'}} >공지사항</Link> &nbsp;&nbsp;
                            <Link to='/faq' class="nav-link link-light" style={{ textDecoration: 'none'}}>자주 묻는 질문</Link>
                          </p>
                        </p>
                            <p id='link2'>
                            <Link to='/Useterm' class="nav-link active link-light" style={{ textDecoration: 'none'}} >이용약관</Link>
                            <Link to='/Infolaw' class="nav-link link-light"  style={{ textDecoration: 'none'}}>개인정보처리방침</Link> 
                            <Link to='#'  class="nav-link link-light">고객지원</Link>  
                            <Link to='#'  class="nav-link link-light">인재채용</Link>  
                            </p> 
                            <p id='bottomContent'>
                               <br/>(주) ITP | 대표자: 김자바 | 사업자번호: 123-45-00678
                               <br/> 이메일: itpmanager@naver.com
                               <br/> Copyright @ ITP Corp.All Rights Reserved <br/>
                            </p> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        );
    };


export default MainNevber;