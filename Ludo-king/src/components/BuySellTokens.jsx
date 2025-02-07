import React, { useState, useEffect } from "react";

const getTokensData = () => [
  { id: 1, name: "Bitcoin", buyPrice: "₹45,00,000", sellPrice: "₹44,80,000" },
  { id: 2, name: "Ethereum", buyPrice: "₹3,10,000", sellPrice: "₹3,05,000" },
  { id: 3, name: "Solana", buyPrice: "₹12,500", sellPrice: "₹12,300" },
  { id: 4, name: "Ripple", buyPrice: "₹45", sellPrice: "₹44" },
  { id: 5, name: "Cardano", buyPrice: "₹120", sellPrice: "₹115" },
  { id: 6, name: "Dogecoin", buyPrice: "₹7.50", sellPrice: "₹7.40" },
  { id: 7, name: "Polkadot", buyPrice: "₹1,500", sellPrice: "₹1,450" },
  { id: 8, name: "Shiba Inu", buyPrice: "₹0.001", sellPrice: "₹0.0009" },
];

const BuySellTokens = () => {
  const [tokens, setTokens] = useState(getTokensData());
  const [loading] = useState(false);
  const [error] = useState(null);

  // Randomly shuffle the data at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prevTokens) => {
        const shuffledTokens = [...prevTokens].sort(() => Math.random() - 0.5);
        return shuffledTokens;
      });
    }, 3000); // Change data every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          📈 Buy & Sell Tokens
        </h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="overflow-hidden h-64">
            <table className="table-auto w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg">
              <thead className="sticky top-0 bg-gray-700 z-10">
                <tr>
                  <th className="p-4 text-sm font-medium">Token</th>
                  <th className="p-4 text-sm font-medium text-center">
                    Buy Price
                  </th>
                  <th className="p-4 text-sm font-medium text-center">
                    Sell Price
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto block">
                {tokens.map((token) => (
                  <tr
                    key={token.id}
                    className="hover:bg-gray-600 flex justify-between w-full"
                  >
                    <td className="p-4 w-1/3">{token.name}</td>
                    <td className="p-4 w-1/3 text-center">{token.buyPrice}</td>
                    <td className="p-4 w-1/3 text-center">{token.sellPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuySellTokens;
