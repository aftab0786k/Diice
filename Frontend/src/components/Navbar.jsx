import React from "react";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import './Login.css'
import Header from "./Header";
import LudoWinners from "./LudoWinners";
import BuySellTokens from "./BuySellTokens";


const Navbar = () => {
  return (
    <div className=" b-nav bg-gradient-to-b from-gray-900 to-gray-700 text-white min-h-screen" >
      <Header />
      
      
      <main className="p-4" >
        <section className="mb-4">
          <ImageCarousel/>
        </section>
        
        <section className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden  h-auto  flex items-center justify-center ">
            <LudoWinners/>
          </div>
         
          <div className="overflow-hidden  h-auto  flex items-center justify-center text-black">
            <BuySellTokens/>
          </div>
        </section>
        
        <section className="grid grid-cols-2 gap-4 mt-4">
          <button className="bg-green-500 text-white p-4 rounded cursor-pointer">Recharge & Bill Pay</button>
          <button className="bg-yellow-500 text-white p-4 rounded cursor-pointer">Buy & Sell Tokens</button>
        </section>
        
        <section className="mt-4">
          <h2 className="text-lg font-bold">Upcoming Matches</h2>
          <div className="overflow-hidden w-full h-40 bg-gray-300 flex items-center justify-center text-black">
          </div>
        </section><br></br>
        
        <section className="mb-4 p-4 bg-gradient-to-b from-gray-100 to-gray-300 text-black shadow rounded">
          <h2 className="text-lg font-bold">Upcoming Tournaments</h2>
          <p>Enroll to play. If you don’t attend after selection, ₹50 will be deducted from your wallet.</p>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer">Enroll Now</button>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Navbar;
