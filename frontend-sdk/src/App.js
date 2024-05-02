import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginWrap from "./pages/Login/LoginWrap";
import CatererLogin from "./pages/Login/CatererLogin";
import AboutUs from "./pages/aboutus/AboutUs";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import HowItWorksCaterer from "./pages/HowItWorksCaterer";
import Cuser from "./pages/User/Cuser";
import CatPage from "./pages/SignUp/CatPage";
import UserSignUpMain from "./pages/SignUp/UserSignUpMain";
import ProfileUserMain from "./pages/User/ProfileUserMain";
import CatererHome from "./pages/User/catererHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/HowItWorksCaterer" element={<HowItWorksCaterer />} />
        <Route path="/login" element={<LoginWrap />} />
        <Route path="/CatererLogin" element={<CatererLogin />} />
        <Route path="/csignup" element={<CatPage />} />
        <Route path="/usersignup" element={<UserSignUpMain />} />
        <Route path="/User/:id" element={<ProfileUserMain />} />
        <Route path="/home" element={<CatererHome />} />
        
        <Route path="/CUser/:cid" element={<Cuser />} />
        <Route path="/CHome/:cid" element={<CatererHome />} />
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
