
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Register from './Component/Register';
import Login from './Component/Login';

import Home from './Component/Home';
import Dashboard from "./Component/Dashboard";
import SetPassword from "./Component/SetPassword";
import ForgotPassword from "./Component/ForgotPassword";
import Header from "./Component/Header";
import Viewprofile from "./Component/Charts/Viewprofile";
import Resetpassword from "./Component/Resetpassword";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/setpassword' element={<SetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/header' element={<Header/>} />
          <Route path='/viewprofile' element={<Viewprofile/>} />
          <Route path='/resetpassword' element={<Resetpassword/>} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
