import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const LiveTrades = () => {

  const [trades, setTrades] =
    useState([]);

  /*
  ==========================================
  SOCKET EVENTS
  ==========================================
  */

  useEffect(() => {

    socket.on(
      "newTrade",
      (trade) => {

        setTrades(
          (prev) => [
            trade,
            ...prev,
          ].slice(0, 20)
        );
      }
    );

    return () => {
      socket.off(
        "newTrade"
      );
    };

  }, []);

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Live Trades
          </h2>

          <p className="text-gray-400 mt-2">
            Realtime exchange executions
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">
          LIVE
        </div>

      </div>

      <div className="space-y-3">

        {trades.length === 0 && (

          <div className="text-gray-500">
            Waiting for live trades...
          </div>

        )}

        {trades.map(
          (
            trade,
            index
          ) => (

            <div
              key={index}
              className="flex items-center justify-between bg-black border border-gray-900 rounded-xl px-4 py-3"
            >

              <div>

                <p className="font-bold">
                  {
                    trade.symbol
                  }
                </p>

                <p
                  className={`text-sm ${
                    trade.side ===
                    "BUY"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {trade.side}
                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold">
                  $
                  {Number(
                    trade.price
                  ).toLocaleString()}
                </p>

                <p className="text-gray-400 text-sm">
                  Qty:
                  {" "}
                  {
                    trade.quantity
                  }
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default LiveTrades;