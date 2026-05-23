import React, {
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const MarketSidebar = () => {

  const [search, setSearch] =
    useState("");

  const [markets, setMarkets] =
    useState([
      {
        symbol:
          "BTCUSDT",
        price:
          104000,
        change:
          "+2.4%",
      },

      {
        symbol:
          "ETHUSDT",
        price:
          4900,
        change:
          "+1.8%",
      },

      {
        symbol:
          "SOLUSDT",
        price:
          210,
        change:
          "+5.2%",
      },

      {
        symbol:
          "XRPUSDT",
        price:
          2.4,
        change:
          "+3.1%",
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

  /*
  ==========================================
  FILTERED
  ==========================================
  */

  const filtered =
    markets.filter(
      (market) =>
        market.symbol
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (

    <div className="bg-[#111] border border-white/10 rounded-[32px] p-6">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-black">
            Markets
          </h2>

          <p className="text-gray-400 mt-1">
            Live crypto prices
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
          LIVE
        </div>

      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search assets..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 mb-6 outline-none"
      />

      {/* MARKET LIST */}

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">

        {filtered.map(
          (
            market,
            index
          ) => (

            <div
              key={index}
              className="bg-black border border-white/5 rounded-2xl px-5 py-4 flex items-center justify-between hover:border-yellow-500/20 transition cursor-pointer"
            >

              {/* LEFT */}

              <div>

                <h3 className="font-black">
                  {
                    market.symbol
                  }
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Spot Market
                </p>

              </div>

              {/* RIGHT */}

              <div className="text-right">

                <h3 className="font-black">
                  $
                  {Number(
                    market.price
                  ).toLocaleString()}
                </h3>

                <p className="text-green-400 text-sm font-bold mt-1">
                  {
                    market.change
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

export default MarketSidebar;