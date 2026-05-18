import {
  useState,
} from "react";

import TradingChart from "../components/TradingChart";

const Dashboard = () => {
  const [pair, setPair] =
    useState(
      "BINANCE:BTCUSDT"
    );

  const pairs = [
    {
      name: "BTC/USDT",
      value:
        "BINANCE:BTCUSDT",
    },

    {
      name: "ETH/USDT",
      value:
        "BINANCE:ETHUSDT",
    },

    {
      name: "SOL/USDT",
      value:
        "BINANCE:SOLUSDT",
    },

    {
      name: "BNB/USDT",
      value:
        "BINANCE:BNBUSDT",
    },

    {
      name: "XRP/USDT",
      value:
        "BINANCE:XRPUSDT",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-[1700px] mx-auto">
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            Trading Terminal
          </h1>

          <p className="text-slate-400 mt-2">
            Professional crypto trading interface
          </p>
        </div>

        {/* PAIRS */}

        <div className="flex flex-wrap gap-4 mb-8">
          {pairs.map((p) => (
            <button
              key={p.value}
              onClick={() =>
                setPair(
                  p.value
                )
              }
              className={`px-5 py-3 rounded-2xl font-bold transition ${
                pair ===
                p.value
                  ? "bg-blue-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* TERMINAL */}

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* CHART */}

          <div className="xl:col-span-3 bg-slate-900 border border-slate-800 rounded-3xl p-4 h-[850px]">
            <TradingChart
              symbol={pair}
            />
          </div>

          {/* ORDER PANEL */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h2 className="text-3xl font-bold mb-8">
              Quick Trade
            </h2>

            <div className="space-y-5">
              <input
                type="number"
                placeholder="Amount"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="number"
                placeholder="Price"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-2xl font-bold text-xl transition">
                Buy
              </button>

              <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-bold text-xl transition">
                Sell
              </button>
            </div>

            {/* MARKET INFO */}

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">
                Market Stats
              </h3>

              <div className="space-y-4">
                <div className="bg-slate-800 rounded-2xl p-4 flex justify-between">
                  <span className="text-slate-400">
                    Pair
                  </span>

                  <span className="font-bold">
                    {pair.replace(
                      "BINANCE:",
                      ""
                    )}
                  </span>
                </div>

                <div className="bg-slate-800 rounded-2xl p-4 flex justify-between">
                  <span className="text-slate-400">
                    Exchange
                  </span>

                  <span className="font-bold">
                    Binance
                  </span>
                </div>

                <div className="bg-slate-800 rounded-2xl p-4 flex justify-between">
                  <span className="text-slate-400">
                    Market
                  </span>

                  <span className="font-bold text-green-400">
                    Active
                  </span>
                </div>

                <div className="bg-slate-800 rounded-2xl p-4 flex justify-between">
                  <span className="text-slate-400">
                    Trading Fee
                  </span>

                  <span className="font-bold">
                    0.1%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;