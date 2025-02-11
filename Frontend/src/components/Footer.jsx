import React, { useState } from 'react';
// import { Home, SportsEsports, AccountBalanceWallet, AccountCircle } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";




const Footer = () => {
    const [active, setActive] = useState("home");

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col justify-end pb-4">
            <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 shadow-lg rounded-t-xl w-full flex justify-around p-3 md:p-4">
            <NavItem icon={<HomeIcon fontSize="large" />} label="Home" active={active === "home"} onClick={() => setActive("home")} />
            <NavItem icon={<SportsEsportsIcon fontSize="large" />} label="Playzone" active={active === "playzone"} onClick={() => setActive("playzone")} />
            <NavItem icon={<AccountBalanceWalletIcon fontSize="large" />} label="Wallet" active={active === "wallet"} onClick={() => setActive("wallet")} />
            <NavItem icon={<AccountCircleIcon fontSize="large" />} label="Profile" active={active === "profile"} onClick={() => setActive("profile")} />
            </nav>
        </div>
    );
};

export default Footer;

function NavItem({ icon, label, active, onClick }) {
    return (
        <button 
            onClick={onClick} 
            className={`flex flex-col items-center text-white transition-all ${active ? "text-blue-400" : "text-gray-400"} hover:scale-110 active:scale-95 md:text-lg lg:text-xl`}>
            {icon}
            <span className="text-xs mt-1 md:text-sm lg:text-base">{label}</span>
        </button>
    );
}
