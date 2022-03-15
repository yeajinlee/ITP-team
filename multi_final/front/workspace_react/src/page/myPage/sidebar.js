import React from "react";
import { NavLink, useParams } from "react-router-dom";
import SidebarItem from "./pageSide";


function Sidebar() {
  const { m_name } = useParams();
  const myname=sessionStorage.getItem('m_name');
  const myWrite = [
    { name: "작성 글", path: `/myPageBoard/${m_name}` },
    { name: "댓글", path: `/myPageComment/${m_name}` },
  ];
  const menus = [
    { name: "정보 수정", path: `/myPageInformationModify/${m_name}`}
  ];
  return (
  <div id='sideBar'>
   {myname} 님의 정보
    <div className="Menu">
      {myWrite.map((menu, index) => {
        return (
        <NavLink
        exact
        style={{color: "gray", textDecoration: "none"}}
        to={menu.path}
        key={index}
        activeStyle={{color: "black"}}
        >
          <SidebarItem
          menu={menu}
          />
          </NavLink>
          );
          })}
    </div>
    <div className="Menu">
      {menus.map((menu, index) => {
        return (
        <NavLink
        exact
        style={{color: "gray", textDecoration: "none"}}
        to={menu.path}
        key={index}
        activeStyle={{color: "black"}}
        >
          <SidebarItem
          menu={menu}
          />
          </NavLink>
          );
          })}
    </div>
  </div>   
  );
}

export default Sidebar;