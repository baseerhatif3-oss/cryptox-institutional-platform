import React from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const TradingChart = () => {

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">

      <div className="p-6 border-b border-gray-800">

        <h2 className="text-2xl font-bold">
          Advanced Trading Chart
        </h2>

        <p className="text-gray-400 mt-2">
          Professional TradingView terminal
        </p>

      </div>

      <AdvancedRealTimeChart
        theme="dark"
        symbol="BINANCE:BTCUSDT"
        interval="15"
        timezone="Etc/UTC"
        hide_side_toolbar={false}
        allow_symbol_change={true}
        autosize
      />

    </div>
  );
};

export default TradingChart;