import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Wallets = () => {
  const [wallets,
    setWallets] =
    useState({});

  useEffect(() => {
    fetchWallets();
  }, []);

  const fetchWallets =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.get(
            "https://crypto-backend-dojp.onrender.com/api/wallets",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        setWallets(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const copyAddress =
    async (address) => {
      await navigator.clipboard.writeText(
        address
      );

      alert(
        "Wallet address copied!"
      );
    };

  const coins = [
    {
      symbol: "BTC",
      color:
        "from-orange-500 to-yellow-500",
    },

    {
      symbol: "ETH",
      color:
        "from-blue-500 to-indigo-500",
    },

    {
      symbol: "USDT",
      color:
        "from-green-500 to-emerald-500",
    },

    {
      symbol: "SOL",
      color:
        "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Crypto Wallets
          </h1>

          <p className="text-slate-400 mt-3">
            Your personal deposit wallet addresses
          </p>
        </div>

        {/* WALLETS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coins.map(
            (coin) => (
              <div
                key={
                  coin.symbol
                }
                className={`bg-gradient-to-r ${coin.color} rounded-3xl p-[1px]`}
              >
                <div className="bg-slate-900 rounded-3xl p-8 h-full">
                  {/* TOP */}

                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-4xl font-bold">
                        {
                          coin.symbol
                        }
                      </h2>

                      <p className="text-slate-400 mt-2">
                        Deposit Wallet
                      </p>
                    </div>

                    <div className="text-5xl">
                      💰
                    </div>
                  </div>

                  {/* ADDRESS */}

                  <div className="bg-slate-800 rounded-2xl p-5 break-all text-sm text-slate-300 mb-6">
                    {
                      wallets[
                        coin
                          .symbol
                      ]
                    }
                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      copyAddress(
                        wallets[
                          coin
                            .symbol
                        ]
                      )
                    }
                    className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl text-xl font-bold"
                  >
                    Copy Address
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallets;