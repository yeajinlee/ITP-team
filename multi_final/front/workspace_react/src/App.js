import { Route, Routes, } from "react-router-dom";
import Main from "./page/Main";
import MainTopNavber from "./components/main/MainTopNavber";
import MainBottomNevber from "./components/main/MainBottomNavber.js";
import Login from "./page/login";
import ItTechnologyMain from './page/itTechnology/itTechnologyMain.js'; 
import ItTechnologyDetail from './page/itTechnology/ItTechnologyDetail.js';

import Register from "./page/Register";

const App = () => {
  
  return (   
    <div className="App">
      <MainTopNavber />
    <Routes>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/itTech" element={<ItTechnologyMain/>} />
      <Route path="/itTech/:no" element={<ItTechnologyDetail/>} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    <MainBottomNevber />
     </div>
  );
};
export default App;