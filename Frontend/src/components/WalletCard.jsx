import React, { useState } from "react";

const WalletCard = () => {
    const [balance, setBalance] = useState(15000);

    const addFunds = () => {
        const amount = prompt("Enter amount to add:");
        if (amount && !isNaN(amount)) {
            setBalance((prev) => prev + parseInt(amount));
        }
    };

    const withdrawFunds = () => {
        const amount = prompt("Enter amount to withdraw:");
        if (amount && !isNaN(amount)) {
            setBalance((prev) => Math.max(0, prev - parseInt(amount)));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-sm text-center border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-red-400 mb-4">Wallet Balance</h2>
                <div className="text-white text-3xl font-bold mb-6 shadow-md">Rs {balance.toLocaleString()}</div>
                <div className="flex gap-4 justify-center">
                    <button 
                        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                        onClick={addFunds}
                    >
                        Deposit +
                    </button>
                    <button 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                        onClick={withdrawFunds}
                    >
                        Withdraw -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WalletCard;
