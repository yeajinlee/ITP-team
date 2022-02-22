import { Route, Routes, } from "react-router-dom";
import Main from "./page/Main";
import MainBottomNevber from "./components/main/MainBottomNavber.js";
import Login from "./page/login";
import Notice from "./page/Notice/Notice";
import NoticeDetail from "./page/Notice/NoticeDetail";
import AddNotice from "./page/Notice/AddNotice";
import ItTechnologyMain from './page/itTechnology/itTechnologyMain.js'; 
import ItTechnologyDetail from './page/itTechnology/ItTechnologyDetail.js';
import ItTrendMain from'./page/itTrend/itTrendMain.js';
import ItTrendDetail from "./page/itTrend/ITrendDetail.js";
import Register from "./page/Register";
import MyPageCommunityBoard from "./page/myPage/myPageBoard/myPageCommunityBoard";
import MyPageCommunityComment from "./page/myPage/myPageBoard/myPageCommunityComment";
import MyPageGroupRequest from "./page/myPage/myPageBoard/myPageGroupRequest";
import MyPageInformationModify from "./page/myPage/myPageBoard/myPageInformationModify";
import MyPageGroupBoard from "./page/myPage/myPageBoard/myPageGroupBoard";
import MyPageGroupComment from "./page/myPage/myPageBoard/myPageGroupComment";
/* import LoginOrNonLogin from "./components/main/LoginOrNonLogin"; */
import TopNavber from "./components/main/MainTopNavberNonLogin"
const App = () => {
  
  return (   
    <div className="App">
      <TopNavber />
    <Routes>
      {/* 메인 */}
      <Route index element={<Main />} />
      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      {/* 회원가입 */}
      <Route path="/Register" element={<Register />} />
      {/* 공지사항 */}
      <Route path="/notice" element={<Notice />}/>
      <Route path="/notice/:no" element={<NoticeDetail/>}/>
      <Route path="/addNotice" element={<AddNotice/>}/>
      {/* IT 기술 */}
      <Route path="/itTech" element={<ItTechnologyMain/>} />
      <Route path="/itTech/:no" element={<ItTechnologyDetail/>} />
      {/* IT 트렌드 */}
      <Route path="/itTrend" element={<ItTrendMain/>} />
      <Route path="/itTrend/:no" element={<ItTrendDetail/>} />
      {/* My Page */}
      <Route path="/myPageCommunityBoard" element={<MyPageCommunityBoard />} />
      <Route path="/myPageCommunityComment" element={<MyPageCommunityComment />} />
      <Route path="/myPageGroupRequest" element={<MyPageGroupRequest />} />
      <Route path="/myPageInformationModify" element={<MyPageInformationModify />} />
      <Route path="/myPageGroupBoard" element={<MyPageGroupBoard />} />
      <Route path="/myPageGroupComment" element={<MyPageGroupComment />} />
    </Routes>
    <MainBottomNevber />
     </div>
  );
};
export default App;