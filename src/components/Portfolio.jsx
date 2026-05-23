import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Portfolio = () => {

  const [wallet, setWallet] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



  /*
  ==========================================
  FETCH WALLET
  ==========================================
  */

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet =
    async () => {
      try {

        const res =
          await axios.get(
            `${API}/user/wallet/${user.id}`
          );

        setWallet(
          res.data.wallet
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



  /*
  ==========================================
  LOADING
  ==========================================
  */

  if (loading) {
    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">
          Loading Portfolio...
        </h2>
      </div>
    );
  }



  /*
  ==========================================
  NO WALLET
  ==========================================
  */

  if (!wallet) {
    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-red-400">
          Wallet Not Found
        </h2>
      </div>
    );
  }



  const balances =
    wallet.balances || {};



  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Portfolio
          </h2>

          <p className="text-gray-400 mt-2">
            Live wallet balances
          </p>

        </div>

        <button
          onClick={fetchWallet}
          className="bg-yellow-500 hover:bg-yellow-600 transition px-5 py-3 rounded-xl font-semibold text-black"
        >
          Refresh
        </button>

      </div>



      {/* BALANCES */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {Object.entries(
          balances
        ).map(
          ([coin, amount]) => (

            <div
              key={coin}
              className="bg-black border border-gray-800 rounded-2xl p-5"
            >

              <p className="text-gray-400">
                {coin}
              </p>

              <h3 className="text-3xl font-bold mt-3">
                {Number(
                  amount
                ).toLocaleString()}
              </h3>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Portfolio;