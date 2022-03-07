import { Routes, Route } from "react-router-dom";
// 메인
import MainTopNavberLogin from "./components/main/MainTopNavber";
import Main from "./page/Main";
import MainBottomNevber from "./components/main/MainBottomNavber.js";
// 로그인 및 회원가입
import Login from "./page/login";
import Register from "./page/Register";
import MainOnLogin from "./page/MainOnLogin"; 
// 공지사항 및 자주 묻는 질문
import Notice from "./page/bottomNavber/Notice/Notice";
import NoticeDetail from "./page/bottomNavber/Notice/NoticeDetail";
import AddNotice from "./page/bottomNavber/Notice/AddNotice";
import ChangeNotice from "./page/bottomNavber/Notice/ChangeNotice";
import Faq from "./page/FAQ/FAQ";
// IT 기술
import ItTechnologyMain from './page/itTechnology/itTechnologyAll.js'; 
import ItTechnologyDetail from './page/itTechnology/ItTechnologyDetail.js';
// IT 트렌드
import ItTrendMain from'./page/itTrend/itTrendMain.js';
import ItTrendDetail from "./page/itTrend/ITrendDetail.js";
// My Page
import MyPageMain from "./page/myPage/myPageMain";
import MyPageComment from "./page/myPage/myPageBoard/myPageComment";
import MyPageInformationModify from "./page/myPage/myPageBoard/myPageInformationModify";
// 이용약관 및 개인정보처리방침
import Infolaw from "./page/bottomNavber/Infolaw";
import Useterm from "./page/bottomNavber/Useterm";
// 모임찾기
import GroupMain from "./page/communityGroup/GroupMain";
import GroupWriting from "./page/communityGroup/writing/gWritingMain";
// 소통공간
import CommunicationMain from "./page/communityCommunication/communicationMain";
import CommunicationWriting from "./page/communityCommunication/writing/cWritingMain"
import GroupBoardDetail from "./page/communityGroup/GroupBoardDetail";
import GroupBoardChange from "./page/communityGroup/GroupBoardChange";
import CommunityDetail from "./page/communityCommunication/CommunityDetail"
import CommunityChange from "./page/communityCommunication/CommunityChange"

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
      <Route path="/myPageBoard" element={<MyPageMain />} />
      <Route path="/myPageComment" element={<MyPageComment />} />
      <Route path="/myPageInformationModify" element={<MyPageInformationModify />} />
      {/* 모임찾기 */}
      <Route path="/communityGroup" element={<GroupMain />} />
      <Route path="/groupWriting" element={<GroupWriting />} />
      <Route path="/communityGroup/:no" element={<GroupBoardDetail />} />
      <Route path="/changeGroup/:no" element={<GroupBoardChange/>} />
      {/* 소통공간 */}
      <Route path="/communication" element={<CommunicationMain/>} />
      <Route path="/CommunicationWriting" element={<CommunicationWriting />} />
      <Route path="/Communication/:no" element={<CommunityDetail />} />
      <Route path="/ChangeCom/:no" element={<CommunityChange />} />
      {/* 자주 묻는 질문 */}
      <Route path="/faq" element={<Faq />} />
    </Routes>
    <MainBottomNevber />
    </div>
  );
};
export default App;
