import React from "react";
import Dice3D from "./Dice3D";
import { FaCoins } from "react-icons/fa"; // Import Coin Icon from react-icons

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-black to-gray-800 text-white p-2 sm:p-4 flex justify-between items-center">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="dice-wrapper">
          <Dice3D />
        </div>
        <h1 className="text-sm sm:text-xl font-bold">Diice Raja</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Tokens:05 with Coin Icon */}
        <div className="flex items-center gap-1 sm:gap-2">
          <FaCoins className="text-yellow-400" size={18} />
          <span id="displayName" className="text-xs sm:text-base">
            Tokens: 05
          </span>
        </div>
        
        {/* User ID */}
        <span id="userId" className="sm:inline text-xs sm:text-base">
          User ID: 0000
        </span>

        {/* Profile Image */}
        <img
          src="icon.webp"
          alt="Profile"
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
