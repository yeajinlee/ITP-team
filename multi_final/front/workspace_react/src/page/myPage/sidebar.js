import React from "react";
import { NavLink, useParams } from "react-router-dom";
import SidebarItem from "./pageSide";


function Sidebar() {
  const { m_name } = useParams();
  const myWrite = [
    { name: "작성 글", path: `/myPageBoard/${m_name}` },
    { name: "댓글", path: `/myPageComment/${m_name}` },
  ];
  const menus = [
    { name: "모임 신청", path: "/myPageGroupRequest" },
    { name: "정보 수정", path: "/myPageInformationModify"}
  ];
  return (
  <div id='sideBar'>
    내가 쓴 글
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