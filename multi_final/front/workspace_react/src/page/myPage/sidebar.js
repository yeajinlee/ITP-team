import React from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./pageSide";
import "./sidebar.scss";


function sidebar() {
  const menus = [
    { name: "작성 글", path: "/myPageCommunityBoard" },
    { name: "댓글", path: "/myPageCommunityComment" },
    { name: "모임 신청", path: "/myPageGroupRequest" },
    { name: "정보 수정", path: "/myPageInformationModify"}
  ];
  return (
    
  <div className="side">
    내가 쓴 글
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

export default sidebar;