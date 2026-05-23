import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const defaultMarkets = [
  {
    symbol: "BTCUSDT",
    price: null,
    change: null,
  },

  {
    symbol: "ETHUSDT",
    price: null,
    change: null,
  },

  {
    symbol: "SOLUSDT",
    price: null,
    change: null,
  },

  {
    symbol: "XRPUSDT",
    price: null,
    change: null,
  },
];

const MarketTicker = () => {

  const [markets, setMarkets] =
    useState(defaultMarkets);



  /*
  ==========================================
  SOCKET CONNECTION
  ==========================================
  */

  useEffect(() => {

    socket.connect();

    socket.on(
      "connect",
      () => {
        console.log(
          "✅ Socket Connected"
        );
      }
    );



    /*
    ==========================================
    MARKET UPDATE
    ==========================================
    */

    socket.on(
      "marketUpdate",
      (data) => {

        if (
          Array.isArray(data) &&
          data.length > 0
        ) {
          setMarkets(data);
        }

      }
    );



    /*
    ==========================================
    DISCONNECT
    ==========================================
    */

    socket.on(
      "disconnect",
      () => {
        console.log(
          "❌ Socket Disconnected"
        );
      }
    );



    return () => {

      socket.off(
        "marketUpdate"
      );

      socket.off(
        "connect"
      );

      socket.off(
        "disconnect"
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

              {market.price ? (
                <>
                  $
                  {Number(
                    market.price
                  ).toLocaleString()}
                </>
              ) : (
                <span className="text-gray-500">
                  Loading...
                </span>
              )}

            </h2>



            <p
              className={`mt-2 font-semibold ${
                market.change &&
                market.change.includes("-")
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >

              {market.change ||
                "Connecting..."}

            </p>

          </div>

        )
      )}

    </div>
  );
};

export default MarketTicker;