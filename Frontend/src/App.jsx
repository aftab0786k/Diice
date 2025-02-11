import React from "react";
// import Login from './components/Login'
import Login from './components/LoginNew'
import Signup from './components/SignupNew'
import { Routes, Route } from "react-router";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Canvas from "./components/Canvas";
import WalletCard from "./components/WalletCard";
import ProfileCard from "./Profile/ProfileCard";


const App = () => {
  return (
    <>
      <Routes>
      <Route index element={<Navbar />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path ="register" element={<Register/>}/>
      <Route path ="canvas" element={<Canvas/>}/>
      <Route path ="wallet" element={<WalletCard/>}/>
      <Route path ="profile" element={<ProfileCard/>}/>
    </Routes>
    </>
  )
}

export default App

