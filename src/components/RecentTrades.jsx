import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const RecentTrades = () => {

  const [trades, setTrades] =
    useState([]);

  /*
  ==========================================
  SOCKET LISTENER
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

    <div className="bg-[#111] border border-white/10 rounded-3xl p-6">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-black">
            Recent Trades
          </h2>

          <p className="text-gray-400 mt-1">
            Live market executions
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
          LIVE
        </div>

      </div>

      {/* TRADES */}

      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">

        {trades.length === 0 && (

          <div className="text-gray-500">
            Waiting for trades...
          </div>

        )}

        {trades.map(
          (
            trade,
            index
          ) => (

            <div
              key={index}
              className="bg-black border border-white/5 rounded-2xl px-5 py-4 flex items-center justify-between"
            >

              {/* LEFT */}

              <div>

                <h3 className="font-bold">
                  {
                    trade.symbol
                  }
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Qty:
                  {" "}
                  {
                    trade.quantity
                  }
                </p>

              </div>

              {/* CENTER */}

              <div>

                <h3 className="font-bold">
                  $
                  {Number(
                    trade.price
                  ).toLocaleString()}
                </h3>

              </div>

              {/* RIGHT */}

              <div>

                <span
                  className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    trade.side ===
                    "BUY"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >

                  {
                    trade.side
                  }

                </span>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default RecentTrades;