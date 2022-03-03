import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import MainBottomNevber from "./components/main/MainBottomNavber.js";
import Login from "./page/login";
import Notice from "./page/bottomNavber/Notice/Notice";
import NoticeDetail from "./page/bottomNavber/Notice/NoticeDetail";
import AddNotice from "./page/bottomNavber/Notice/AddNotice";
import ChangeNotice from "./page/bottomNavber/Notice/ChangeNotice";
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
import MainTopNavberLogin from "./components/main/MainTopNavber";
import MainOnLogin from "./page/MainOnLogin"; 
import Infolaw from "./page/bottomNavber/Infolaw";
import Useterm from "./page/bottomNavber/Useterm";
import GroupMain from "./page/communityGroup/groupMain";
import Faq from "./page/FAQ/FAQ";
const App = () => {
  
  return (

// if문으로 참, 거짓 판단 후 출력하는 것도 고민해볼 것.
      <div className="all">
        <MainTopNavberLogin />
    <Routes>
      {/* 메인 */}
      <Route index element={<Main />} />
      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      <Route path="/mainOnLogin" element={<MainOnLogin />} />
      {/* 회원가입 */}
      <Route path="/Register" element={<Register />} />
      {/* 공지사항 */}
      <Route path="/notice" element={<Notice />}/>
      <Route path="/notice/:no" element={<NoticeDetail/>}/>
      <Route path="/addNotice" element={<AddNotice/>}/>
      <Route path="/changeNotice/:no" element={<ChangeNotice/>}/>
      {/* 이용약관 및 개인정보처리방침 */}
      <Route path="/Useterm" element={<Useterm />} />
      <Route path="/Infolaw" element={<Infolaw/>} />
      {/* IT 기술 */}
      <Route path="/itTech" element={<ItTechnologyMain/>} />
      <Route path="/itTech/:no" element={<ItTechnologyDetail/>} />
      {/* IT 트렌드 */}
      <Route path="/itTrend" element={<ItTrendMain/>} />
      <Route path="/itTrend/:title" element={<ItTrendDetail/>} />
      {/* My Page */}
      <Route path="/myPageCommunityBoard" element={<MyPageCommunityBoard />} />
      <Route path="/myPageCommunityComment" element={<MyPageCommunityComment />} />
      <Route path="/myPageGroupRequest" element={<MyPageGroupRequest />} />
      <Route path="/myPageInformationModify" element={<MyPageInformationModify />} />
      <Route path="/myPageGroupBoard" element={<MyPageGroupBoard />} />
      <Route path="/myPageGroupComment" element={<MyPageGroupComment />} />
      {/* 모임찾기 */}
      <Route path="/communityGroup" element={<GroupMain />} />
      {/* 자주 묻는 질문 */}
      <Route path="/faq" element={<Faq />} />
    </Routes>
    <MainBottomNevber />
    </div>
  );
};
export default App;
