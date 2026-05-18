import { useEffect, useState } from "react";

import {
  Wallet as WalletIcon,
  DollarSign,
  Bitcoin,
} from "lucide-react";

import API from "../api/axios";

const Wallet = () => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchProfile =
    async () => {
      try {
        const res =
          await API.get(
            "/user/profile"
          );

        setUser(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading wallet...
      </div>
    );
  }

  const balances =
    user?.balances || {};

  const assets = [
    {
      name: "USD",
      symbol: "USD",
      icon: (
        <DollarSign size={36} />
      ),
      balance:
        balances.USD || 0,
      color:
        "from-green-500 to-emerald-600",
    },

    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: (
        <Bitcoin size={36} />
      ),
      balance:
        balances.BTC || 0,
      color:
        "from-orange-500 to-yellow-500",
    },

    {
      name: "Ethereum",
      symbol: "ETH",
      icon: (
        <div className="text-3xl">
          Ξ
        </div>
      ),
      balance:
        balances.ETH || 0,
      color:
        "from-blue-500 to-cyan-500",
    },

    {
      name: "Solana",
      symbol: "SOL",
      icon: (
        <div className="text-3xl">
          ◎
        </div>
      ),
      balance:
        balances.SOL || 0,
      color:
        "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10 flex items-center gap-4">
          <div className="bg-blue-600 p-4 rounded-3xl">
            <WalletIcon size={38} />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              Wallet
            </h1>

            <p className="text-slate-400 mt-2 text-lg">
              Real-time backend wallet
              balances
            </p>
          </div>
        </div>

        {/* TOTAL */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
          <p className="text-slate-400 text-lg">
            Total Portfolio Value
          </p>

          <h2 className="text-6xl font-bold mt-4">
            $
            {(
              balances.USD || 0
            ).toLocaleString()}
          </h2>
        </div>

        {/* ASSETS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {assets.map((asset) => (
            <div
              key={asset.symbol}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
            >
              <div
                className={`h-3 bg-gradient-to-r ${asset.color}`}
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`bg-gradient-to-r ${asset.color} p-4 rounded-2xl`}
                  >
                    {asset.icon}
                  </div>

                  <div className="bg-slate-800 px-4 py-2 rounded-xl">
                    {
                      asset.symbol
                    }
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-2">
                  {asset.name}
                </h3>

                <p className="text-slate-400 mb-6">
                  Available Balance
                </p>

                <h2 className="text-5xl font-bold">
                  {typeof asset.balance ===
                  "number"
                    ? asset.balance.toLocaleString()
                    : asset.balance}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;