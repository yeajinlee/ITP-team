import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/MainBottomNavber.scss';


const MainNevber = () => {

    return (
        <div className='bottomNavber'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="bottomNavber">
                        <div class="navbar-nav">
                            <Link to='/Notice' class="nav-link active link-light" style={{ textDecoration: 'none'}} aria-current="page">공지사항</Link>
                            <Link to='#FAQ' class="nav-link link-light" style={{ textDecoration: 'none'}}>자주 묻는 질문</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="bottomNavber">
                        <div class="navbar-nav">
                            <Link to='/Useterm' class="nav-link active link-light" style={{ textDecoration: 'none'}} aria-current="page">이용약관</Link>
                            <Link to='/Infolaw' class="nav-link link-light" style={{ textDecoration: 'none'}}>개인정보처리방침</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        );
    };


export default MainNevber;
