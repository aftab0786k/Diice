import React from "react";
import Login from './components/Login'

import { Routes, Route } from "react-router";
import Home from "./components/Home";

import Register from "./components/Register";

import Navbar from "./components/Navbar";

import Dice3D from "./components/Dice3D";
import Canvas from "./components/Canvas";
import WalletCard from "./components/WalletCard";
import ProfileCard from "./Profile/ProfileCard";


const App = () => {
  return (
    <>
    
      <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      
      <Route path ="register" element={<Register/>}/>
      
      <Route path ="navbar" element={<Navbar/>}/>
      <Route path ="dice3d" element={<Dice3D/>}/>
      <Route path ="canvas" element={<Canvas/>}/>
      <Route path ="wallet" element={<WalletCard/>}/>
      <Route path ="profile" element={<ProfileCard/>}/>
      
     
    </Routes>
    </>
  )
}

export default App

