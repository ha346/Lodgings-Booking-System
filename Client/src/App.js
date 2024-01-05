import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";    
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Accounts from "./components/accounts/Accounts";     
import SecondPage from "./pages/secondPage/SecondPage";
import Manage from "./components/manage/Manage"; 
import Setings from "./components/setings/Setings";  
import LoginComponent from "./components/login/LoginComponent";
import Registration from "./components/registration/Registration";
import TermsAndCondition from "./components/termsAndPrivacy/TermsAndCondition";
import PrivacyStatement from "./components/termsAndPrivacy/PrivacyStatement";
import Contact from "./components/contact&About/Contact";
import About from "./components/contact&About/About";

function App() { 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setings" element={<Setings />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/loginComponent" element={<LoginComponent />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/privacy" element={<PrivacyStatement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;