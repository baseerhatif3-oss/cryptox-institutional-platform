import { useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

const coins = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    price: 105000,
  },

  {
    coin: "Ethereum",
    symbol: "ETH",
    price: 6200,
  },

  {
    coin: "Solana",
    symbol: "SOL",
    price: 210,
  },
];

const Futures = () => {
  const [selectedCoin, setSelectedCoin] =
    useState(coins[0]);

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleTrade = async (
    side
  ) => {
    try {
      if (
        !amount ||
        Number(amount) <= 0
      ) {
        return toast.error(
          "Enter valid amount"
        );
      }

      setLoading(true);

      const res =
        await API.post(
          "/trade",
          {
            coin:
              selectedCoin.coin,

            symbol:
              selectedCoin.symbol,

            side,

            amount:
              Number(amount),

            price:
              selectedCoin.price,
          }
        );

      toast.success(
        `${side} order executed`
      );

      console.log(
        res.data
      );

      setAmount("");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Trade failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Futures Trading
          </h1>

          <p className="text-slate-400 mt-2">
            Real backend-powered
            trading engine
          </p>
        </div>

        {/* COINS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {coins.map((coin) => (
            <button
              key={coin.symbol}
              onClick={() =>
                setSelectedCoin(
                  coin
                )
              }
              className={`p-6 rounded-3xl border transition text-left ${
                selectedCoin.symbol ===
                coin.symbol
                  ? "bg-blue-600 border-blue-500"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              <h2 className="text-2xl font-bold">
                {coin.coin}
              </h2>

              <p className="text-slate-300 mt-2">
                {coin.symbol}
              </p>

              <h3 className="text-3xl font-bold mt-4">
                $
                {coin.price.toLocaleString()}
              </h3>
            </button>
          ))}
        </div>

        {/* TRADING PANEL */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Trade{" "}
            {
              selectedCoin.symbol
            }
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block mb-3 text-slate-400">
                Amount
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
                placeholder="Enter amount"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
              />
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <div className="flex justify-between mb-3">
                <span className="text-slate-400">
                  Price
                </span>

                <span>
                  $
                  {selectedCoin.price.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Total
                </span>

                <span className="font-bold text-xl">
                  $
                  {(
                    Number(
                      amount || 0
                    ) *
                    selectedCoin.price
                  ).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() =>
                  handleTrade(
                    "BUY"
                  )
                }
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 py-5 rounded-2xl font-bold text-xl transition"
              >
                Buy
              </button>

              <button
                onClick={() =>
                  handleTrade(
                    "SELL"
                  )
                }
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 py-5 rounded-2xl font-bold text-xl transition"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;