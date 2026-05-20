import React from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const Trading = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Professional Trading Terminal
        </h1>

        <p className="text-gray-400 mt-2">
          Live TradingView charts with real Binance market data
        </p>
      </div>

      <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-800">
        <AdvancedRealTimeChart
          theme="dark"
          symbol="BINANCE:BTCUSDT"
          width="100%"
          height={700}
          timezone="Etc/UTC"
          locale="en"
          hide_top_toolbar={false}
          hide_legend={false}
          save_image={true}
          interval="15"
          range="12M"
          allow_symbol_change={true}
          calendar={false}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">
            Market
          </h2>

          <p className="text-2xl font-bold mt-2">
            BTC/USDT
          </p>
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">
            24h Volume
          </h2>

          <p className="text-2xl font-bold mt-2">
            $2.4B
          </p>
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">
            Market Trend
          </h2>

          <p className="text-green-400 text-2xl font-bold mt-2">
            Bullish
          </p>
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">
            Exchange
          </h2>

          <p className="text-2xl font-bold mt-2">
            Binance Live
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trading;