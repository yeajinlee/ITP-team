import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MainTopNavber.scss';
import { Link } from 'react-router-dom';
import MainCarousel from './MainCarousel';
import { NavDropdown } from 'react-bootstrap';
import logo from '../image/ItpLogo_2.png';
/* 
import MainCarousel from './MainCarousel'; */


   /* if를 통해서 구간 나눌 것. 
    if문 비교할 때 db 연동이 되있어야함. axios로 DB랑 회원에 관한 정보를 만들어놔야함. 
    입력값과 axios로 불러온 값이 일치하는지 안하는지에 따라 메뉴를 나누면 됨.
    import로 테이블에 있는 값을 다 가져와도 됨. */

const MainTopNavberNonLogin = () => {
    const [issession,setissession]=useState(); 
    const[ismanager,setismanager]=useState();
    const [isLogin,setIslogin]=useState();
    const [rg_name,setrg_name]=useState('');
    const [show, setShow] = useState(false);
    const [techShow, setTechShow] = useState(false);

const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}

    const showTechDropdown = (e) => {
        setTechShow(!techShow);
    }

    const hideTechDropdown = (e) => {
        setTechShow(false);
    }

    const m_name=sessionStorage.getItem('m_name');
    const Logout=()=>{
        localStorage.clear();
        sessionStorage.clear();
        setIslogin(false);
      console.log(setIslogin);
      alert('로그아웃');
    }
    useEffect(()=>{
      if(sessionStorage.getItem('m_name')===null &&localStorage.getItem('m_name')===null){
        setIslogin(false); setismanager(false);
      }else if(sessionStorage.getItem('m_name')==='manager'){
        setIslogin(true);
        setismanager(true);
      }
      else{setIslogin(true);}
    },[isLogin]);


   
    useEffect(()=>{
        if(sessionStorage.getItem('m_name')===null || localStorage.getItem('m_name')!==null){
          setissession(true);setrg_name(localStorage.getItem('m_name'));
        }else if(sessionStorage.getItem('m_name')!==null ||localStorage.getItem('m_name')!==null){
          setissession(false); setrg_name(sessionStorage.getItem('m_name'));
         
        }
       
      },[issession]);

    return (
      <div id="mainTopNavber">
        <div id="mainTopLogoAndLogin">
          <Link to="/">
            <img src={logo} className="logoImg" alt="Logo" />
          </Link>
          {!isLogin ? (
            <div id="topLoginAndRegister">
              <Link to="/login" className="Login">
                로그인
              </Link>
              <Link to="/Register" className="Register">
                회원가입
              </Link>
            </div>
          ) : (
            <div id="topLoginAndRegister">
              <Link
                to="/"
                className="logout"
                style={{ textDecoration: 'none' }}
                onClick={Logout}
              >
                로그아웃
              </Link>
              {!ismanager ? (
                <Link
                  to={`/myPageBoard/${rg_name}`}
                  className="myPage"
                  style={{ textDecoration: 'none' }}
                >
                  마이페이지
                </Link>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        <nav id="topNav">
          <div id="navbarMain">
            <Link to="/itTrend" className="itTrendNav" id="nav_menu">
              IT 뉴스
            </Link>
            {/* <Link to='/itTech' className='itTechNav' id='nav_menu'>
                            IT 기술</Link> */}
            <NavDropdown
              title="IT 기술"
              show={techShow}
              onMouseEnter={showTechDropdown}
              onMouseLeave={hideTechDropdown}
              id="techDropdown"
              className="dropdown"
              zindex={1}
            >
              <NavDropdown.Item href="/itTech">업데이트</NavDropdown.Item>
              <NavDropdown.Item href="/itTech/forum">
                포럼
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="커뮤니티" /* id="collasible-nav-dropdown" */
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              id="communityDropdown"
              className="dropdown"
              zindex={1}
            >
              <NavDropdown.Item href="/communityGroup">
                모임찾기
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/communication">
                소통공간
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </nav>
        <MainCarousel />
      </div>
    );
                    };

export default MainTopNavberNonLogin;