import React, {
  useState,
} from "react";

import {
  FaStar,
  FaBitcoin,
  FaEthereum,
  FaCoins,
} from "react-icons/fa";

const Watchlist = () => {

  const [coins] =
    useState([

      {
        name:
          "Bitcoin",

        symbol:
          "BTC",

        price:
          "$84,520",

        change:
          "+4.82%",

        positive:
          true,

        icon:
          <FaBitcoin className="text-yellow-500" />,
      },

      {
        name:
          "Ethereum",

        symbol:
          "ETH",

        price:
          "$4,280",

        change:
          "+2.18%",

        positive:
          true,

        icon:
          <FaEthereum className="text-blue-400" />,
      },

      {
        name:
          "Solana",

        symbol:
          "SOL",

        price:
          "$182",

        change:
          "-1.34%",

        positive:
          false,

        icon:
          <FaCoins className="text-purple-400" />,
      },

      {
        name:
          "XRP",

        symbol:
          "XRP",

        price:
          "$1.92",

        change:
          "+5.11%",

        positive:
          true,

        icon:
          <FaCoins className="text-cyan-400" />,
      },
    ]);

  return (

    <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

      <div className="p-8 border-b border-white/10 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">
            Watchlist
          </h2>

          <p className="text-gray-400 mt-2">
            Favorite assets overview
          </p>

        </div>

        <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl">

          <FaStar />

        </div>

      </div>

      <div className="divide-y divide-white/5">

        {coins.map(
          (
            coin,
            index
          ) => (

            <div
              key={index}
              className="p-6 flex items-center justify-between hover:bg-white/5 transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-2xl">

                  {coin.icon}

                </div>

                <div>

                  <h3 className="font-black text-lg">
                    {coin.symbol}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {coin.name}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <h3 className="font-black text-lg">
                  {coin.price}
                </h3>

                <p
                  className={`text-sm font-bold mt-1 ${
                    coin.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >

                  {coin.change}

                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default Watchlist;