import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const MarketTicker = () => {
  const [markets, setMarkets] =
    useState([
      {
        symbol: "BTCUSDT",
        price: 104250,
        change: "+2.8%",
      },

      {
        symbol: "ETHUSDT",
        price: 4980,
        change: "+1.9%",
      },

      {
        symbol: "SOLUSDT",
        price: 210,
        change: "+6.4%",
      },

      {
        symbol: "XRPUSDT",
        price: 2.41,
        change: "+4.1%",
      },
    ]);

  useEffect(() => {
    socket.on(
      "marketUpdate",
      (data) => {
        setMarkets(data);
      }
    );

    return () => {
      socket.off(
        "marketUpdate"
      );
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {markets.map(
        (market) => (
          <div
            key={
              market.symbol
            }
            className="bg-[#111] border border-gray-800 rounded-2xl p-4"
          >
            <p className="text-gray-400">
              {market.symbol}
            </p>

            <h2 className="text-2xl font-bold mt-2">
              $
              {Number(
                market.price
              ).toLocaleString()}
            </h2>

            <p className="text-green-400 mt-2 font-semibold">
              {
                market.change
              }
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default MarketTicker;