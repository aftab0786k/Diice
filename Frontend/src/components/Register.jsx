import { useState } from 'react';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('wallet');
  const [balance, setBalance] = useState(15000);
  
  const sections = [
    { id: 'wallet', label: '💰 Wallet' },
    { id: 'calculator', label: '🧮 Token Calculator' },
    { id: 'history', label: '📜 History' },
    { id: 'password', label: '🔑 Password Change' },
    { id: 'terms', label: '📑 Terms' },
    { id: 'logout', label: '🚪 Logout' }
  ];

  const addFunds = () => {
    const amount = prompt('Enter amount to add:');
    if (amount) {
      setBalance(prev => prev + parseInt(amount));
    }
  };

  const withdrawFunds = () => {
    const amount = prompt('Enter amount to withdraw:');
    if (amount) {
      setBalance(prev => prev - parseInt(amount));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-72 bg-gradient-to-b from-[#0f3460] to-[#1a1a2e] p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <img 
                  src="/profile-pic.jpg" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full border-2 border-[#e94560] mx-auto mb-4 shadow-glow"
                />
                <h3 className="text-white text-xl font-bold mb-1">Player Name</h3>
                <p className="text-[#e94560] text-sm">Pro Member</p>
              </div>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-gradient-to-r from-[#2b5876] to-[#4e4376] shadow-blue-glow'
                        : 'bg-gradient-to-r from-[#e94560] to-[#ff6b6b] hover:shadow-red-glow'
                    } hover:-translate-y-1 text-white relative overflow-hidden group`}
                  >
                    {section.label}
                    <span className="shine-animation group-hover:opacity-100" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8">
            {/* Wallet Section */}
            {activeSection === 'wallet' && (
              <div className="animate-fadeIn">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 mb-6">
                  <h2 className="text-2xl font-bold text-[#e94560] mb-4 drop-shadow-md">
                    Wallet Balance
                  </h2>
                  <div className="text-4xl font-bold text-white mb-6">
                    ₹ {balance.toLocaleString()}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
                    <button
                      onClick={addFunds}
                      className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg"
                    >
                      Add Funds +
                    </button>
                    <button
                      onClick={withdrawFunds}
                      className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg"
                    >
                      Withdraw -
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Add other sections similarly */}
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease;
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(233, 69, 96, 0.4);
        }

        .shadow-red-glow {
          box-shadow: 0 8px 20px rgba(233, 69, 96, 0.4);
        }

        .shadow-blue-glow {
          box-shadow: 0 0 15px rgba(75, 123, 236, 0.4);
        }

        .shine-animation {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.3),
            transparent
          );
          transition: 0.6s;
          opacity: 0;
        }

        button:hover .shine-animation {
          left: 100%;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Profile;