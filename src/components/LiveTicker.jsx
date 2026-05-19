import {
  useEffect,
  useState,
} from "react";

import {
  io,
} from "socket.io-client";

const socket =
  io(
    "https://crypto-backend-dojp.onrender.com"
  );

const LiveTicker =
  () => {
    const [prices,
      setPrices] =
      useState({
        BTC:
          "0.00",

        ETH:
          "0.00",

        SOL:
          "0.00",

        XRP:
          "0.00",
      });

    useEffect(() => {
      socket.on(
        "market_update",
        (
          data
        ) => {
          setPrices(
            data
          );
        }
      );

      return () => {
        socket.off(
          "market_update"
        );
      };
    }, []);

    const coins =
      [
        {
          symbol:
            "BTC",

          price:
            prices.BTC,
        },

        {
          symbol:
            "ETH",

          price:
            prices.ETH,
        },

        {
          symbol:
            "SOL",

          price:
            prices.SOL,
        },

        {
          symbol:
            "XRP",

          price:
            prices.XRP,
        },
      ];

    return (
      <div className="bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="flex whitespace-nowrap animate-pulse">
          {coins.map(
            (
              coin
            ) => (
              <div
                key={
                  coin.symbol
                }
                className="px-8 py-4 border-r border-slate-800 flex items-center gap-3"
              >
                <span className="font-bold text-white text-lg">
                  {
                    coin.symbol
                  }
                </span>

                <span className="text-green-400 font-bold text-lg">
                  $
                  {
                    coin.price
                  }
                </span>
              </div>
            )
          )}

          {/* DUPLICATE FOR CONTINUOUS EFFECT */}

          {coins.map(
            (
              coin
            ) => (
              <div
                key={`duplicate-${coin.symbol}`}
                className="px-8 py-4 border-r border-slate-800 flex items-center gap-3"
              >
                <span className="font-bold text-white text-lg">
                  {
                    coin.symbol
                  }
                </span>

                <span className="text-green-400 font-bold text-lg">
                  $
                  {
                    coin.price
                  }
                </span>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

export default LiveTicker;