import { useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
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
    if (amount) setBalance(prev => prev + parseInt(amount));
  };

  const withdrawFunds = () => {
    const amount = prompt('Enter amount to withdraw:');
    if (amount) setBalance(prev => prev - parseInt(amount));
  };

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile-info">
            <img 
              src="icon.webp" 
              alt="Profile" 
              className="profile-pic"
            />
            <h3 style={{ color: '#fff', marginBottom: '5px' }}>Player Name</h3>
            <p style={{ color: '#e94560' }}>User ID:0001</p>
          </div>

          <div className="nav-menu">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Wallet Section */}
          <div className={`content-section ${activeSection === 'wallet' ? 'active' : ''}`}>
            <div className="wallet-card">
              <h2>Wallet Balance</h2>
              <div className="wallet-balance">₹ {balance.toLocaleString()}</div>
              <div className="action-buttons">
                <button onClick={addFunds} className="nav-btn">
                  Add Funds +
                </button>
                <button onClick={withdrawFunds} className="nav-btn">
                  Withdraw -
                </button>
              </div>
            </div>
          </div>

          {/* Add other sections similarly */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;