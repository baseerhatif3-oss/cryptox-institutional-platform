import React from "react";

import Portfolio from "../components/Portfolio";

import MarketTicker from "../components/MarketTicker";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Professional crypto
            exchange overview
          </p>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-semibold">
          LIVE MARKET
        </div>
      </div>

      {/* MARKET TICKER */}

      <MarketTicker />

      {/* PORTFOLIO */}

      <Portfolio />

      {/* ANALYTICS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* TOTAL BALANCE */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Balance
          </p>

          <h2 className="text-4xl font-bold mt-4">
            $10,482
          </h2>

          <p className="text-green-400 mt-3">
            +12.8%
          </p>
        </div>

        {/* DAILY PNL */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Daily PnL
          </p>

          <h2 className="text-4xl font-bold mt-4 text-green-400">
            +$842
          </h2>

          <p className="text-green-400 mt-3">
            +8.2%
          </p>
        </div>

        {/* OPEN POSITIONS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Open Positions
          </p>

          <h2 className="text-4xl font-bold mt-4">
            12
          </h2>

          <p className="text-blue-400 mt-3">
            Active Trades
          </p>
        </div>

        {/* TRADING VOLUME */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Trading Volume
          </p>

          <h2 className="text-4xl font-bold mt-4">
            $4.2M
          </h2>

          <p className="text-yellow-400 mt-3">
            24H Volume
          </p>
        </div>
      </div>

      {/* MARKET OVERVIEW */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TOP GAINERS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Top Gainers
          </h2>

          <div className="space-y-4">
            {[
              {
                symbol:
                  "SOLUSDT",
                change:
                  "+18.2%",
              },

              {
                symbol:
                  "DOGEUSDT",
                change:
                  "+12.4%",
              },

              {
                symbol:
                  "AVAXUSDT",
                change:
                  "+9.8%",
              },

              {
                symbol:
                  "XRPUSDT",
                change:
                  "+7.1%",
              },
            ].map(
              (
                coin,
                index
              ) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-black border border-gray-800 rounded-xl px-5 py-4"
                >
                  <h3 className="font-bold">
                    {
                      coin.symbol
                    }
                  </h3>

                  <p className="text-green-400 font-bold">
                    {
                      coin.change
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* MARKET NEWS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Market News
          </h2>

          <div className="space-y-4">
            {[
              "Bitcoin breaks above major resistance level",

              "Ethereum futures volume hits all-time high",

              "Institutional investors increase crypto exposure",

              "Solana ecosystem sees massive growth",
            ].map(
              (
                news,
                index
              ) => (
                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-xl px-5 py-4"
                >
                  <p className="text-gray-300">
                    {news}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;