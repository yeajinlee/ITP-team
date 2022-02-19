import { Route, Routes, } from "react-router-dom";
import Main from "./page/Main";
import MainTopNavber from "./components/main/MainTopNavber";
import MainBottomNevber from "./components/main/MainBottomNavber.js";
import Login from "./page/login";
import Notice from "./page/Notice/Notice";
import NoticeDetail from "./page/Notice/NoticeDetail";

const App = () => {
  return (   
    <div className="App">
      <MainTopNavber />
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/noticeDetail/" element={<NoticeDetail/>}/>
    </Routes>
    <MainBottomNevber />
     </div>
  );
};
export default App;