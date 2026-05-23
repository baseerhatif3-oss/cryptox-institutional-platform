import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const PriceTicker = () => {

  const [markets, setMarkets] =
    useState([
      {
        symbol:
          "BTCUSDT",

        price:
          104000,

        change:
          "+2.8%",
      },

      {
        symbol:
          "ETHUSDT",

        price:
          4900,

        change:
          "+1.9%",
      },

      {
        symbol:
          "SOLUSDT",

        price:
          210,

        change:
          "+6.4%",
      },

      {
        symbol:
          "XRPUSDT",

        price:
          2.4,

        change:
          "+4.1%",
      },
    ]);

  /*
  ==========================================
  LIVE SOCKET
  ==========================================
  */

  useEffect(() => {

    socket.on(
      "marketUpdate",

      (data) => {

        if (
          Array.isArray(data)
        ) {

          setMarkets(data);
        }
      }
    );

    return () => {

      socket.off(
        "marketUpdate"
      );
    };

  }, []);

  return (

    <div className="w-full overflow-hidden border-b border-white/10 bg-[#0b0b0b]">

      <div className="flex animate-[ticker_35s_linear_infinite] whitespace-nowrap py-3">

        {[...markets, ...markets].map(
          (
            market,
            index
          ) => (

            <div
              key={index}
              className="flex items-center gap-4 px-8"
            >

              <h3 className="font-black text-sm">

                {
                  market.symbol
                }

              </h3>

              <p className="text-white font-bold">

                $
                {Number(
                  market.price
                ).toLocaleString()}

              </p>

              <span className="text-green-400 font-bold text-sm">

                {
                  market.change
                }

              </span>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default PriceTicker;