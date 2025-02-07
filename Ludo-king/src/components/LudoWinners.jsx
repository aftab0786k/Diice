import React, { useState } from "react";
import './Login.css'

const getWinnersData = () => [
  { id: 1, name: "Amit", prize: "₹1000", icon: "🏅" },
  { id: 2, name: "Priya", prize: "₹500", icon: "🏅" },
  { id: 3, name: "Rohan", prize: "₹700", icon: "🏅" },
  { id: 4, name: "Anjali", prize: "₹1200", icon: "🏅" },
  { id: 5, name: "Rahul", prize: "₹800", icon: "🏅" },
  { id: 6, name: "Neha", prize: "₹600", icon: "🏅" },
];

const LudoWinners = () => {
  const [winners] = useState(getWinnersData());
  const [loading] = useState(false);
  const [error] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          🏆 Ludo Winners & Prizes
        </h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="relative overflow-hidden h-48">
            <div
              className="absolute inset-0 animate-scroll"
              style={{ animation: "scroll 15s linear infinite" }}
            >
              {winners.map((winner) => (
                <div
                  key={winner.id}
                  className="flex items-center justify-between bg-gray-800 rounded-lg mb-2 p-4 shadow hover:bg-gray-700"
                >
                  <span className="text-xl">{winner.icon}</span>
                  <span className="text-lg font-semibold">{winner.name}</span>
                  <span className="text-lg font-semibold">{winner.prize}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default LudoWinners;
