import React, {
  useEffect,
  useState,
} from "react";

import {
  getWallet,
} from "../services/walletApi";

const Portfolio = () => {
  const [wallet, setWallet] =
    useState(null);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet =
    async () => {
      try {
        const data =
          await getWallet(
            user._id
          );

        setWallet(
          data.wallet
        );
      } catch (error) {
        console.log(error);
      }
    };

  if (!wallet) {
    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        Loading portfolio...
      </div>
    );
  }

  const balances =
    wallet.balances;

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Portfolio
          </h2>

          <p className="text-gray-400 mt-2">
            Real wallet balances
          </p>
        </div>

        <button
          onClick={
            fetchWallet
          }
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl font-semibold"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(
          balances
        ).map(
          ([asset, amount]) => (
            <div
              key={asset}
              className="bg-black border border-gray-800 rounded-xl p-5"
            >
              <p className="text-gray-400">
                {asset}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {Number(
                  amount
                ).toFixed(4)}
              </h2>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;